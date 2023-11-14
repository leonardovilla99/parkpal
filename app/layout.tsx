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

// Initialization
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        //document.title = 'ParkPal';
    }, []);
    if(isLoggedIn) {
        return (<Map></Map>)
    }else{
        return(
            <body className={inter.className}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register/>} />
                    </Routes>
                </BrowserRouter>
            </body>
        )
    }
}
