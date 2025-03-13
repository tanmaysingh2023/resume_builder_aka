import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!minLength) return "Password must be at least 8 characters";
        if (!hasUppercase) return "Include at least one uppercase letter";
        if (!hasLowercase) return "Include at least one lowercase letter";
        if (!hasNumber) return "Include at least one number";
        if (!hasSpecialChar) return "Include at least one special character";

        return "Strong password ✅";
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrength(validatePassword(newPassword));
    };

    const handleSignup = async () => {
        if (!name || !email || !password) {
            setError("Please fill in all fields");
            return;
        }
        if (passwordStrength !== "Strong password ✅") {
            setError("Please enter a stronger password.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (data.success) {
                alert("Signup successful! Please log in.");
                navigate("/login");
            } else {
                setError(data.message || "Signup failed.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-neon-blue">
                <h2 className="text-5xl text-neon-pink font-bold drop-shadow-neon-pink text-center mb-8">Sign Up</h2>
                {error && (
                    <p className="mb-4 text-sm text-center text-red-400 bg-red-900/30 p-2 rounded-md">
                        <FaExclamationCircle className="inline mr-1" /> {error}
                    </p>
                )}
                <div className="space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black text-white border border-neon-blue focus:ring-2 focus:ring-neon-blue"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black text-white border border-neon-blue focus:ring-2 focus:ring-neon-blue"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 rounded-md bg-black text-white border border-neon-blue focus:ring-2 focus:ring-neon-blue"
                    />
                    <p
                        className={`text-sm text-center ${
                            passwordStrength === "Strong password ✅" ? "text-green-400" : "text-red-400"
                        }`}
                    >
                        {passwordStrength}
                    </p>
                </div>
                <button
                    onClick={handleSignup}
                    disabled={loading || passwordStrength !== "Strong password ✅"}
                    className={`w-full mt-6 py-2 bg-neon-blue text-white rounded-md shadow-neon-blue hover:scale-105 transition-transform ${
                        loading && "cursor-not-allowed opacity-75"
                    }`}
                >
                    {loading ? "Signing up..." : "Signup"}
                </button>
                <div className="flex justify-center mt-4 text-sm text-gray-400">
                    <p>Already have an account?</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="ml-1 text-neon-pink hover:underline"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
