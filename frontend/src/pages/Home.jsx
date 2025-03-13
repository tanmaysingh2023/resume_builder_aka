import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX / 40, y: clientY / 40 });
    };



    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl">
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <span className="text-sm text-gray-400 mb-2">Version 4</span>
                    <h1 className="text-5xl font-bold mb-4 leading-snug">
                        Build professional resumes in minutes.
                    </h1>
                    <p className="text-lg text-gray-400 mb-6">
                        Build professional resumes in minutes. Stand out from the crowd and land your dream job.
                    </p>

                    <div className="flex space-x-4">
                        <Link to="/login">
                            <button className="bg-neon-blue text-white px-6 py-3 rounded-lg shadow-neon-blue hover:scale-105 transition-transform">
                                Get Started
                            </button>
                        </Link>

                        <Link to="/templates">
                            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                                Find Talent
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
                        src="https://images.pexels.com/photos/7809930/pexels-photo-7809930.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Resume Preview"
                        className="rounded-lg w-[600px] h-[600px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
