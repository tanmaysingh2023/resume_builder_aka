import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX / 40, y: clientY / 40 });
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <span className="text-sm text-gray-400 mb-2">Team Akatsuki helps you build</span>
                    <h1 className="text-5xl font-bold mb-4 leading-snug">
                        Build professional resumes in minutes.
                    </h1>
                    <p className="text-lg text-gray-400 mb-6">
                        Stand out from the crowd and land your dream job with a stunning resume.
                    </p>

                    <div className="flex space-x-4">
                        <Link to="/login">
                            <button className="bg-neon-blue text-white px-6 py-3 rounded-lg shadow-neon-blue hover:scale-105 transition-transform">
                                Get Started
                            </button>
                        </Link>

                        <Link to="/templates">
                            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                                Explore Templates
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Preview Section */}
                <div
                    className="hidden md:block bg-gray-900 p-6 rounded-lg shadow-lg relative"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <img
                        src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Resume Preview"
                        className="rounded-lg w-[600px] h-[600px] object-cover"
                    />
                </div>
            </div>

            {/* Tutorials Section */}
            <div className="max-w-7xl mt-20 w-full">
                <h2 className="text-4xl font-bold text-center mb-6">Resume Building Tutorials</h2>
                <p className="text-lg text-gray-400 text-center mb-12">
                    Learn how to craft a professional resume with these expert tutorials.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tutorial 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        <h3 className="text-2xl font-semibold mb-3">How to Structure Your Resume</h3>
                        <p className="text-gray-400 mb-4">
                            Learn how to organize your resume sections for maximum impact.
                        </p>
                        <Link to="/tut-struc" className="text-blue-400 hover:underline">
                            Read More →
                        </Link>
                    </div>

                    {/* Tutorial 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        <h3 className="text-2xl font-semibold mb-3">Writing a Compelling Summary</h3>
                        <p className="text-gray-400 mb-4">
                            Craft an engaging summary that highlights your skills and experience.
                        </p>
                        <Link to="/tut-summary" className="text-blue-400 hover:underline">
                            Read More →
                        </Link>
                    </div>

                    {/* Tutorial 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        <h3 className="text-2xl font-semibold mb-3">Using Keywords to Beat ATS</h3>
                        <p className="text-gray-400 mb-4">
                            Learn how to optimize your resume with keywords to pass applicant tracking systems.
                        </p>
                        <Link to="/tut-ats" className="text-blue-400 hover:underline">
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
