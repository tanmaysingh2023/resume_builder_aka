// src/components/AuthRoute.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');  // Get token from local storage

                const response = await fetch('/api/check-auth', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,  // Send token in header
                    },
                });

                const data = await response.json();

                if (data.authenticated) {
                    navigate('/dashboard');
                } else {
                    navigate('/home');
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                navigate('/home');
            }
        };

        checkAuth();
    }, [navigate]);

    return null;
};

export default AuthRoute;
