'use client'

// Package
import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// CSS
import './globals.css'

// Component
import Login from '@/components/Login'
import Register from '@/components/Register'
import Map from '@/components/Map'
import supabase from '@/supabase'

// Initialization
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onAuthStateChange =async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            if(user != null){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.title = 'ParkPal';
        onAuthStateChange();
    }, []);


    if(isLoggedIn) {
        return (
            <html lang="en">
                <body className={inter.className}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Map></Map>} />
                        </Routes>
                    </BrowserRouter>
                </body>
            </html>
        )
    }else{
        return(
        <html lang="en">
            <body className={inter.className}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register/>} />
                    </Routes>
                </BrowserRouter>
            </body>
        </html>
        )
    }
}
