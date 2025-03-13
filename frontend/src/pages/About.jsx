import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
            <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-lg border-2 border-neon-blue shadow-neon-blue">
                <h1 className="text-4xl text-neon-pink font-bold mb-6 text-center drop-shadow-neon-pink">
                    About Resume Builder
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    Our Resume Builder is designed to simplify the process of creating professional and impactful resumes. Whether you’re a fresher, experienced professional, or someone switching careers, our tool offers easy-to-use templates, customizable sections, and sleek designs to help you stand out.
                </p>

                <h2 className="text-2xl text-neon-blue font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Interactive resume creation with live preview</li>
                    <li>Pre-designed professional templates</li>
                    <li>Download your resume in PDF format instantly</li>
                    <li>Customizable sections for skills, education, and achievements</li>
                </ul>

                <p className="mt-6 text-gray-400 text-lg">
                    Start building your resume today and unlock new career opportunities with confidence!
                </p>
            </div>
        </div>
    );
};

export default About;
