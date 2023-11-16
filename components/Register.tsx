// Package
import React, { useState } from "react";
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

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


export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setconfPassword] = useState('');
    const [token, setToken] = useState('');

    // error
    const [error, setErr] = useState('');

    const handleRegister = async () => {
        if(password == confPassword){
            try {
                await axios.post(`${API_URL}/register`, { email, password });
                setErr("User registered successfully");
              } catch (error) {
                setErr("Registration failed");
              }
        }else{
            setErr("Insert the same password")
        }
    };

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
                    {/* Confirm password */}
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
                            label= "Confirm password"
                            variant="standard"
                            color= "primary"
                            value= {confPassword}
                            onChange={(e) => setconfPassword(e.target.value)}
                            />
                        </Box>
                    </ThemeProvider>
                    <Button variant="contained" className="buttonLogin" onClick={handleRegister}>Register</Button>
                    <p className="textLogin">If you have an account you can <br/><Link to="/">login here</Link></p>
                    {error}
                    {token && <div>Token: {token}</div>}
                </div>
            </div>
        </div>
    )
}