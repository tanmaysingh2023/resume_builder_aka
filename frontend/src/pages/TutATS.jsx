import React from "react";

const TutATS = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      {/* Page Heading */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Using Keywords to Beat ATS</h1>
        <p className="text-lg text-gray-400">
          Learn how to optimize your resume with the right keywords to pass Applicant Tracking Systems (ATS) and land more interviews.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mt-10 space-y-8">

        {/* 1. What is an ATS? */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">1. What is an ATS?</h2>
          <p className="text-gray-400">
            An **Applicant Tracking System (ATS)** is software used by recruiters to filter and rank resumes based on specific **keywords** related to the job description. If your resume lacks the right keywords, it may get **rejected before a human even sees it**.
          </p>
        </div>

        {/* 2. How Does ATS Work? */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">2. How Does ATS Work?</h2>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li>🔍 **Scans** resumes for **specific keywords**.</li>
            <li>📊 **Ranks** candidates based on keyword match percentage.</li>
            <li>🚀 **Filters** out resumes that **don’t match** enough job-related terms.</li>
          </ul>
        </div>

        {/* 3. Choosing the Right Keywords */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">3. Choosing the Right Keywords</h2>
          <p className="text-gray-400">
            To optimize your resume for ATS, include **keywords from the job description** in your **skills, work experience, and summary** sections.  
          </p>
          <p className="mt-3 text-gray-400">
            Example job description for a **Software Engineer**:
          </p>
          <div className="bg-gray-700 p-4 rounded-lg mt-3 text-gray-300">
            <p>✅ <strong>Good Keywords:</strong> JavaScript, React.js, Node.js, REST APIs, Agile, Git, Redux</p>
            <p>❌ <strong>Bad Keywords:</strong> Coding, Hardworking, Team player</p>
          </div>
        </div>

        {/* 4. ATS-Optimized vs. Non-Optimized Resume */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">4. ATS-Optimized vs. Non-Optimized Resume</h2>

          {/* Non-Optimized Resume */}
          <div className="border-l-4 border-red-500 pl-4 mt-3 text-gray-400">
            <p className="font-semibold">❌ Non-Optimized Resume:</p>
            <p className="italic">
              "Hardworking developer with strong problem-solving skills. Passionate about technology and teamwork."
            </p>
          </div>

          {/* Optimized Resume */}
          <div className="border-l-4 border-green-500 pl-4 mt-4 text-gray-400">
            <p className="font-semibold">✅ ATS-Optimized Resume:</p>
            <p className="italic">
              "Software Engineer with 3+ years of experience in **React.js, Node.js, and REST APIs**. Skilled in **Agile development, Git, and Redux**, delivering high-performance web applications."
            </p>
          </div>
        </div>

        {/* 5. Pro Tips to Beat ATS */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">5. Pro Tips to Beat ATS</h2>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li>✅ Use **keywords from the job description**.</li>
            <li>✅ Avoid **tables, images, and fancy fonts** (ATS can't read them).</li>
            <li>✅ Save your resume in **PDF or DOCX format**.</li>
            <li>✅ Use **bullet points** for better readability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutATS;
