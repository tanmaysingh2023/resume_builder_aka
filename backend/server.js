const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const { PDFDocument, rgb,StandardFonts } = require("pdf-lib");
const puppeteer = require("puppeteer");
const Resume = require("./models/Resume");
require("dotenv").config();
const bcrypt = require("bcryptjs"); // For hashing passwords
const jwt = require("jsonwebtoken"); // For generating JWT tokens
const User = require("./models/User"); // User model
const Activity = require("./models/Activity"); // Activity model
const authMiddleware = require("./middleware/authMiddleware"); // Import middleware
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cookieParser()); 
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve the 'public' folder
const authRoutes = require('./routes/auth');
app.use(authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get('/api/check-auth', authMiddleware);


// POST: Submit resume data and generate PDF
app.post("/api/submit", authMiddleware,async (req, res) => {
  try {
    // console.log("Received resume submission request:", req.body);
    // console.log("Authenticated user:", req.user);

    const {
      name,
      email,
      phone,
      profiles,
      jobDescription,
      targetedCompanies,
      education,
      skills,
      workExperience,
      projects,
      achievements,
    } = req.body;

    // Check if user is authenticated
    if (!req.user || !req.user.id) {
      console.error("User not authenticated");
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Validate required fields
    if (!name || !email || !phone || !education.length || !skills.length) {
      console.error("Incomplete resume data:", { name, email, phone, education, skills });
      return res.status(400).json({ message: "Incomplete resume data provided." });
    }

    const newResume = new Resume({
      userId: req.user.id,
      name,
      email,
      phone,
      profiles,
      jobDescription,
      targetedCompanies,
      education,
      skills,
      workExperience,
      projects,
      achievements,
    });
    //console.log(newResume)
    await newResume.save();
    //console.log("Resume saved successfully:", newResume);

    res.json({ message: "Resume submitted successfully", resume: newResume });
  } catch (error) {
    console.error("Error submitting resume:", error);
    res.status(500).json({ message: "Failed to submit resume", error: error.message });
  }
});


app.get("/api/download-pdf/:resumeId", async (req, res) => {
  try {
    const resumeId = req.params.resumeId;
    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    const pdfDir = path.join(__dirname, "pdfs"); // Directory to store PDFs
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir); // Create pdfs directory if it doesn't exist
    }

    const pdfPath = path.join(pdfDir, `resume_${resumeId}.pdf`);

    // Generate a new PDF if it doesn't exist
    if (!fs.existsSync(pdfPath)) {
      await generatePdf(resume, pdfPath);
    }

    res.download(pdfPath, `resume_${resumeId}.pdf`);
  } catch (err) {
    console.error("Error sending PDF:", err);
    res.status(500).send("Failed to download PDF");
  }
});



    // HTML Template for the Resume
    async function generatePdf(data, outputPath) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
    
      function isValidUrl(str) {
        try {
          new URL(str);
          return true;
        } catch (_) {
          return false;
        }
      }
    
      //console.log("Generating PDF for:", data);
    
      const htmlContent = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
            h1, h2 { color: navy; }
            h2 { border-bottom: 2px solid navy; padding-bottom: 5px; margin-top: 20px; }
            p, li { font-size: 14px; color: gray; }
            .header { text-align: center; margin-bottom: 20px; }
            .contact { font-size: 12px; text-align: center; margin-bottom: 20px; color: darkgray; }
            .section { margin-bottom: 20px; }
            .list-item { margin-bottom: 10px; }
            a { color: blue; text-decoration: none; }

                    .watermark {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 80px;
              color: rgba(200, 0, 0, 0.2); /* Light red, semi-transparent */
              font-weight: bold;
              z-index: -1;
              white-space: nowrap;
              user-select: none;
            }

             
          </style>
        </head>
        <body>
           <!-- Watermark -->
          <div class="watermark">Not Verified</div>
          <div class="header">
            <h1>${data.name || "N/A"}</h1>
            <p class="contact">Email: ${data.email || "N/A"} | Phone: ${data.phone || "N/A"}</p>
          </div>
    
          <div class="section">
            <h2>Professional Profiles</h2>
            <ul>
              ${
                data.profiles?.length
                  ? data.profiles
                      .map(
                        (profile) => `
                        <li class="list-item">
                          <strong>${profile.platform || "N/A"}</strong><br/>
                          Link: ${
                            isValidUrl(profile.link)
                              ? `<a href="${profile.link}" target="_blank">${profile.platform}</a>`
                              : profile.link || "N/A"
                          }
                        </li>
                      `
                      )
                      .join("")
                  : "<p>N/A</p>"
              }
            </ul>
          </div>
    
          <div class="section">
            <h2>Education</h2>
            <ul>
              ${
                data.education?.length
                  ? data.education
                      .map(
                        (edu) => `
                        <li class="list-item">
                          <strong>${edu.degree || "N/A"}</strong> - ${edu.institute || "N/A"} (${edu.tenure || "N/A"})<br/>
                          Score: ${edu.score || "N/A"}, Position: ${edu.position || "N/A"}
                        </li>
                      `
                      )
                      .join("")
                  : "<p>N/A</p>"
              }
            </ul>
          </div>
    
          <div class="section">
            <h2>Work Experience</h2>
            <ul>
              ${
                data.workExperience?.length
                  ? data.workExperience
                      .map(
                        (exp) => `
                        <li class="list-item">
                          <strong>${exp.title || "N/A"}</strong> (${exp.tenure || "N/A"})<br/>
                          ${exp.description || "N/A"}
                        </li>
                      `
                      )
                      .join("")
                  : "<p>N/A</p>"
              }
            </ul>
          </div>
    
          <div class="section">
            <h2>Projects</h2>
            <ul>
              ${
                data.projects?.length
                  ? data.projects
                      .map(
                        (proj) => `
                        <li class="list-item">
                          <strong>${proj.title || "N/A"}</strong> (${proj.tenure || "N/A"})<br/>
                          ${proj.description || "N/A"}
                        </li>
                      `
                      )
                      .join("")
                  : "<p>N/A</p>"
              }
            </ul>
          </div>
    
          <div class="section">
            <h2>Technical Achievements</h2>
            <ul>
              ${
                data.achievements?.length
                  ? data.achievements
                      .map(
                        (ach) => `
                        <li class="list-item">
                          <strong>${ach.title || "N/A"}</strong> (${ach.tenure || "N/A"})<br/>
                          ${ach.description || "N/A"}
                        </li>
                      `
                      )
                      .join("")
                  : "<p>N/A</p>"
              }
            </ul>
          </div>
    
          
        </body>
        </html>
      `;
    
      await page.setContent(htmlContent, { waitUntil: "networkidle0" });
      await page.pdf({ path: outputPath, format: "A4" });
    
      await browser.close();
      console.log("PDF successfully created at:", outputPath);
    }
  
     

app.post('/api/resume', async (req, res) => {
  try {
      const { name, phone, email, profiles, skills, education } = req.body;
      const userId = req.user.id; // Ensure user is authenticated

      const newResume = new Resume({ userId, name, phone, email, profiles, skills, education });
      await newResume.save();

      res.status(201).json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
      res.status(500).json({ message: "Error creating resume" });
  }
});




// GET: Retrieve all resumes from the database
app.get("/api/resumes", async (req, res) => {
  try {
    const resumes = await Resume.find(); // Fetch all resumes from MongoDB
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

// Endpoint to serve the generated PDF for download
app.get("/api/download-pdf", (req, res) => {
  const pdfPath = path.join(__dirname, "resume.pdf");
  res.sendFile(pdfPath, (err) => {
    if (err) {
      console.error("Error sending PDF:", err);
      res.status(500).send("Failed to download PDF");
    }
  });
});


app.get("/api/download-pdf/:resumeId", async (req, res) => {
  try {
    const resumeId = req.params.resumeId;
    const pdfPath = path.join(__dirname, `pdfs/resume_${resumeId}.pdf`);

    if (!fs.existsSync(pdfPath)) {
      return res.status(404).send("PDF not found");
    }

    res.download(pdfPath, `resume_${resumeId}.pdf`);
  } catch (err) {
    console.error("Error sending PDF:", err);
    res.status(500).send("Failed to download PDF");
  }
});

// POST: Signup (Password hashed)
app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
   

    try {
        // Hash the password before saving
       // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, message: 'Signup failed' });
    }
});

// POST: Login (Check password and generate JWT)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
 // console.log(user)
  if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
  }
 // console.log(user.password)
  // Compare the plain-text password with the hashed password stored in the DB
   //const hashedPassword = await bcrypt.hash(password, 10);
 

  const isMatch = await bcrypt.compare(password,user.password);
  //console.log(isMatch)
  if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user });
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });
        req.userId = decoded.id;
        next();
    });
};

// GET: Get user activities
app.get("/api/activities/:userId", authenticate, async (req, res) => {
    try {
        const activities = await Activity.find({ userId: req.userId });
        console.log(activities)
        res.status(200).json({ activities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch activities' });
    }
});

app.get("/api/resume/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Resume.findOne({ id: id }).lean(); // Replace 'Resume' with your actual model name

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
});


app.get('/api/resumes/:userId', async (req, res) => {
  console.log("User ID Received:", req.params.userId);
  try {
      const resumes = await Resume.find({ userId: req.params.userId });
      console.log("resume data=",resumes)
      res.json({ resumes });
  } catch (error) {
      res.status(500).json({ message: 'Error fetching resumes' });
  }
});


app.get('/api/resume/:resumeId', async (req, res) => {
  try {
      const resume = await Resume.findById(req.params.resumeId);
      
      if (!resume) {
          return res.status(404).json({ message: 'Resume not found' });
      }
      res.json(resume);
      //console.log("resume data==",resume)
  } catch (error) {
      console.error("Error fetching resume:", error);
      res.status(500).json({ message: 'Error fetching resume' });
  }
});

//delete the resume by id
app.delete('/api/resumes/:id', async (req, res) => {
  try {
      const deletedResume = await Resume.findByIdAndDelete(req.params.id);
      if (!deletedResume) {
          return res.status(404).json({ message: "Resume not found" });
      }
      res.json({ message: "Resume deleted successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error deleting resume", error });
  }
});

// DELETE route to remove a resume by ID
app.delete("/api/resumes/delete/:id",  async (req, res) => {
  try {
    const resumeId = req.params.id;

    // Find and delete the resume
    const deletedResume = await Resume.findByIdAndDelete(resumeId);

    if (!deletedResume) {
      return res.status(404).json({ success: false, message: "Resume not found." });
    }

    res.json({ success: true, message: "Resume deleted successfully." });
  } catch (error) {
    console.error("Error deleting resume:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});



// Route to load templates
app.get('/api/templates/:templateName', async (req, res) => {
  const { templateName } = req.params;

  try {
      const template = require(`./templates/${templateName}`);
      res.send(template);  // Send HTML content as response
  } catch (err) {
      res.status(404).json({ error: "Template not found." });
  }
});

// Unified schema: templateId + data (Mixed)
// We'll store all documents in the "aka_resume" collection
const Schema=mongoose.Schema
const akaResumeSchema = new Schema({
  userId: { type: String, required: true },
  templateId: { type: String, required: true },
  data: { type: Schema.Types.Mixed, required: true },
  pdfFileId: { type: Schema.Types.ObjectId }, // Reference to the stored PDF in GridFS
  createdAt: { type: Date, default: Date.now },
}, { collection: 'aka_resume' });

// Create the Mongoose model
const AkaResume = mongoose.model('AkaResume', akaResumeSchema);

// POST endpoint to save an aka_resume
app.post('/api/aka_resume', async (req, res) => {
  try {
    const newAkaResume = new AkaResume(req.body);
    await newAkaResume.save();
    res.status(201).json(newAkaResume);
  } catch (error) {
    console.error('Error saving aka_resume:', error);
    res.status(500).json({ message: 'Error saving aka_resume', error });
  }
});

// GET endpoint to fetch all aka_resume documents
app.get('/api/aka_resume', async (req, res) => {
  try {
    const allAkaResume = await AkaResume.find().sort({ createdAt: -1 });
    res.json(allAkaResume);
  } catch (error) {
    console.error('Error fetching aka_resume:', error);
    res.status(500).json({ message: 'Error fetching aka_resume', error });
  }
});

app.get('/api/aka_resume/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const resumes = await AkaResume.find({ userId }).sort({ createdAt: -1 });
    // Always return JSON, even if resumes is empty
    res.json({ resumes: resumes || [] });
  } catch (error) {
    console.error("Error fetching aka_resume:", error);
    res.status(500).json({ message: 'Error fetching aka_resume', error });
  }
});


app.delete('/api/aka_resume/delete/:id', async (req, res) => {
  try {
    const result = await AkaResume.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error deleting aka_resume:", error);
    res.status(500).json({ success: false, error });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

