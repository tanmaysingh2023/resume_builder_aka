import React from "react";

const TutSummary = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      {/* Page Heading */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Writing a Compelling Summary</h1>
        <p className="text-lg text-gray-400">
          Your resume summary is the first thing recruiters read—make it impactful! Here's how to write an attention-grabbing summary.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mt-10 space-y-8">

        {/* 1. What is a Resume Summary? */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">1. What is a Resume Summary?</h2>
          <p className="text-gray-400">
            A resume summary is a **2-3 sentence introduction** at the top of your resume that highlights your **experience, skills, and career goals**.
          </p>
        </div>

        {/* 2. Key Components of a Great Summary */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">2. Key Components of a Great Summary</h2>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li><strong>Experience Level:</strong> Mention how many years of experience you have.</li>
            <li><strong>Key Skills:</strong> Highlight your core competencies.</li>
            <li><strong>Industry Focus:</strong> Specify the industry you specialize in.</li>
            <li><strong>Biggest Achievement:</strong> Show impact with a key accomplishment.</li>
          </ul>
        </div>

        {/* 3. Examples Based on Experience */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">3. Resume Summary Examples</h2>

          {/* Entry-Level Example */}
          <div className="border-l-4 border-blue-500 pl-4 mt-3 text-gray-400">
            <p className="font-semibold">Entry-Level (No Experience):</p>
            <p className="italic">
              "Recent Computer Science graduate with strong skills in JavaScript, React, and problem-solving. Passionate about building scalable web applications and eager to contribute to a dynamic development team."
            </p>
          </div>

          {/* Mid-Level Example */}
          <div className="border-l-4 border-green-500 pl-4 mt-4 text-gray-400">
            <p className="font-semibold">Mid-Level (2-5 Years of Experience):</p>
            <p className="italic">
              "Full Stack Developer with 3+ years of experience specializing in React, Node.js, and MongoDB. Built and optimized web applications that improved user engagement by 40%. Strong problem-solving skills and a passion for writing clean, efficient code."
            </p>
          </div>

          {/* Senior-Level Example */}
          <div className="border-l-4 border-yellow-500 pl-4 mt-4 text-gray-400">
            <p className="font-semibold">Senior-Level (6+ Years of Experience):</p>
            <p className="italic">
              "Senior Software Engineer with 7+ years of experience in full-stack development. Led teams to deliver high-performance applications, reducing downtime by 50%. Expertise in React, TypeScript, and AWS. Passionate about mentoring junior developers."
            </p>
          </div>
        </div>

        {/* 4. Common Mistakes to Avoid */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">4. Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li>❌ Using **generic phrases** like "hardworking" or "team player."</li>
            <li>❌ Writing a **long paragraph** instead of keeping it concise.</li>
            <li>❌ **Not mentioning skills** that match the job description.</li>
          </ul>
        </div>

        {/* 5. Pro Tips */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">5. Pro Tips</h2>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li>✅ Tailor your summary to each **job description**.</li>
            <li>✅ Use **numbers** to show impact (e.g., "Increased efficiency by 30%").</li>
            <li>✅ Keep it **short**—2-3 sentences maximum.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutSummary;
