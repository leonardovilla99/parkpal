// Package
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component
import supabase from "../supabase"
import { error } from "console";
import { ClassNames } from "@emotion/react";

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

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErr] = useState('')
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const login = async () => {
        console.log("LOGIN")
        try {
            setLoading(true)
            let { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if (error) {
                setErr('Error during login: ' + error.message);
            }
        }catch(error){
            if (error instanceof Error) {
                setErr("Login failed: " + error.message)
            }
        }finally{
            setLoading(false)
            window.location.reload();
        }
    }

    return(
        <div className="blockInside">
            <div className="loginBox">
                <div className="loginInside">
                    <img src={"./logo.png"} alt="Logo" className="logoLogin"/>
                    {/* Email */}
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
                    {/* Password */}
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
                            variant="standard"
                            color= "primary"
                            value= {password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                    </ThemeProvider>
                    <Button variant="contained" className="buttonLogin" onClick={login}>Login</Button>
                    <p className="textLogin">If you don’t have an account you can <br/><Link to="/register">register here</Link></p>
                    <div className="error">{ error }</div>
                </div>
            </div>
        </div>
        
    )
}