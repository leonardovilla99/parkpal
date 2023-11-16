// Package
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
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

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');


    const handleLogin = async () => {
        try {
          const response = await axios.post(`${API_URL}/login`, { email, password });
          setToken(response.data.token);
          console.log('Login successful');
        } catch (error) {
          console.error('Login failed');
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
                    <Button variant="contained" className="buttonLogin" onClick={handleLogin}>Login</Button>
                    <p className="textLogin">If you don’t have an account you can <br/><Link to="/register">register here</Link></p>
                </div>
            </div>
        </div>
        
    )
}