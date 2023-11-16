// Package
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component
import supabase from "../supabase"; // Import Supabase client for authentication
import { error } from "console";
import { ClassNames } from "@emotion/react";

// Create a dark theme for the material-ui components
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
    },
});

// Login component
export default function Login(){
    // State variables for email, password, error message, loading state, and success state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Function to handle the login process
    const login = async () => {
        console.log("LOGIN");
        try {
            setLoading(true);
            // Sign in with Supabase authentication using email and password
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            if (error) {
                setErr('Error during login: ' + error.message);
            }
        } catch (error) {
            // Handle login error
            if (error instanceof Error) {
                setErr("Login failed: " + error.message);
            }
        } finally {
            // Reset loading state and reload the page
            setLoading(false);
            window.location.reload();
        }
    }

    // Render the login form
    return(
        <div className="blockInside">
            <div className="loginBox">
                <div className="loginInside">
                    <img src={"./logo.png"} alt="Logo" className="logoLogin"/>
                    
                    {/* Email input field */}
                    <ThemeProvider theme={theme}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-multiline-flexible"
                                label= "Email"
                                variant="standard"
                                color= "primary"
                                value= {email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </ThemeProvider>
                    
                    {/* Password input field */}
                    <ThemeProvider theme={theme}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-multiline-flexible"
                                label= "Password"
                                type = "password"
                                variant="standard"
                                color= "primary"
                                value= {password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                    </ThemeProvider>
                    
                    {/* Login button */}
                    <Button variant="contained" className="buttonLogin" onClick={login}>Login</Button>
                    
                    {/* Link to register */}
                    <p className="textLogin">If you don’t have an account you can <br/><Link to="/register">register here</Link></p>
                    
                    {/* Display error message if any */}
                    <div className="error">{ error }</div>
                </div>
            </div>
        </div>
    )
}