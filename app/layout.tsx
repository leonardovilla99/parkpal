// Package
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'; // Import Inter font from Google Fonts
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CSS
import './globals.css'; // Import global CSS styles

// Component
import Login from '@/components/Login';
import Register from '@/components/Register';
import Map from '@/components/Map';
import supabase from '@/supabase'; // Import Supabase client for authentication

// Initialization
const inter = Inter({ subsets: ['latin'] }); // Initialize Inter font with Latin subset

export default function RootLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle authentication state change
    const onAuthStateChange = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user != null) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        document.title = 'ParkPal'; // Set document title
        onAuthStateChange(); // Check authentication state on component mount
    }, []);

    // Render different content based on authentication state
    if (isLoggedIn) {
        return (
            // Authenticated user view
            <html lang="en">
                <body className={inter.className}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Map></Map>} />
                        </Routes>
                    </BrowserRouter>
                </body>
            </html>
        );
    } else {
        return (
            // Non-authenticated user view
            <html lang="en">
                <body className={inter.className}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </BrowserRouter>
                </body>
            </html>
        );
    }
}