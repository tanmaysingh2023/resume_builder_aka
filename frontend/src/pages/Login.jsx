import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed.');
            }

            if (!data.token) {
                throw new Error('No token received. Login unsuccessful.');
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl text-neon-pink font-bold drop-shadow-neon-pink mb-4">
                Login
            </h1>
            <form 
                onSubmit={handleLogin} 
                className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-neon-blue">
                {error && (
                    <p className="mb-4 text-sm text-center text-red-400 bg-red-900/30 p-2 rounded-md">
                        {error}
                    </p>
                )}

                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black text-white border border-neon-blue focus:ring-2 focus:ring-neon-blue"
                        placeholder="Your Email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black text-white border border-neon-blue focus:ring-2 focus:ring-neon-blue"
                        placeholder="Your Password"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full bg-neon-blue text-white py-2 rounded-md shadow-neon-blue hover:scale-105 transition-transform ${loading && 'cursor-not-allowed opacity-75'}`}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>

            <p className="text-gray-400 mt-4">
                Don't have an account?{' '}
                <button
                    onClick={() => navigate('/signup')}
                    className="text-neon-blue hover:underline"
                >
                    Sign up here
                </button>
            </p>
        </div>
    );
}

export default Login;
