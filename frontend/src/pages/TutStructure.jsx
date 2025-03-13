import React from "react";

const TutStructure = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      {/* Page Heading */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">How to Structure Your Resume</h1>
        <p className="text-lg text-gray-400">
          Learn the essential components of a well-structured resume that will grab recruiters' attention.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mt-10 space-y-8">
        
        {/* 1. Header Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">1. Header Section</h2>
          <p className="text-gray-400">
            Your resume header should include your full name, contact details, and links to your LinkedIn or portfolio.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Email:</strong> johndoe@example.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/johndoe</li>
          </ul>
        </div>

        {/* 2. Summary Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">2. Professional Summary</h2>
          <p className="text-gray-400">
            A brief but impactful summary (2-3 sentences) that highlights your experience, skills, and career goals.
          </p>
          <p className="mt-3 italic text-gray-400">
            Example: "Experienced Software Developer with expertise in Full Stack Development, specializing in React, Node.js, and MongoDB."
          </p>
        </div>

        {/* 3. Work Experience Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">3. Work Experience</h2>
          <p className="text-gray-400">
            List your previous jobs with achievements, responsibilities, and measurable impact.
          </p>
          <p className="mt-3 italic text-gray-400">
            Example:
          </p>
          <div className="border-l-4 border-blue-500 pl-4 mt-3 text-gray-400">
            <p><strong>Software Engineer</strong> - XYZ Corp (2019 - Present)</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed a React-based dashboard that increased efficiency by 30%.</li>
              <li>Led a team of 5 developers to build a scalable e-commerce platform.</li>
            </ul>
          </div>
        </div>

        {/* 4. Skills Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">4. Skills</h2>
          <p className="text-gray-400">
            Highlight technical and soft skills relevant to the job.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            {["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Git", "REST APIs"].map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Education Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">5. Education</h2>
          <p className="text-gray-400">
            Mention your degree, university, and graduation year.
          </p>
          <p className="mt-3">
            <strong>Bachelor of Computer Science</strong> - XYZ University (2015 - 2019)
          </p>
        </div>

        {/* 6. Additional Sections (Projects & Certifications) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">6. Projects & Certifications</h2>
          <p className="text-gray-400">
            Add relevant projects and certifications to showcase your expertise.
          </p>
          <p className="mt-3">
            <strong>Project:</strong> Built a book recommendation system using Machine Learning (GitHub link)
          </p>
          <p className="mt-3">
            <strong>Certification:</strong> AWS Certified Solutions Architect - Associate
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutStructure;
