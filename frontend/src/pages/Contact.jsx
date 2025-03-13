import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
            <div className="max-w-xl w-full bg-gray-900 p-8 rounded-lg border-2 border-neon-pink shadow-neon-pink">
                <h1 className="text-4xl text-neon-pink font-bold mb-6 text-center drop-shadow-neon-pink">
                    Contact Us
                </h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-black text-white border-2 border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 bg-black text-white border-2 border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 mb-1">Message</label>
                        <textarea
                            rows="4"
                            className="w-full p-3 bg-black text-white border-2 border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-neon-pink text-white py-3 rounded-lg shadow-neon-pink hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    <p>Or reach us at:</p>
                    <p className="mt-1">
                        <a href="mailto:support@resumebuilder.com" className="text-neon-blue hover:underline">
                            support@resumebuilder.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
