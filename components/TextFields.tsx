'use client';

// Package
import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const TextFields = ({ name }: { name: string }) => {
    return(
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
                label= {name}
                variant="standard"
                color= "primary"
                
            />
            </Box>
        </ThemeProvider>
    )
}
export default TextFields;