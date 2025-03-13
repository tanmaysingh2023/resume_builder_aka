import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-black text-white shadow-neon-blue">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-3xl font-bold text-neon-pink drop-shadow-neon-pink">
                    Resume Builder
                </h1>

                <nav className="flex gap-6">
                    <Link 
                        to="/home" 
                        className="text-lg hover:text-neon-blue transition-all"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className="text-lg hover:text-neon-blue transition-all"
                    >
                        About
                    </Link>
                    <Link 
                        to="/contact" 
                        className="text-lg hover:text-neon-blue transition-all"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
