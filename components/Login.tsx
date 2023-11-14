// Package
import * as React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

// Component
import TextFields from '@/components/TextFields';

export default function Login(){
    return(
        <div className="loginBox">
            <div className="loginInside">
                {/* <img src={"./logo.png"} alt="Logo" className="logoLogin"/> */}
                <TextFields name="Email"/>
                <TextFields name="Password"/>
                <Button variant="contained" className="buttonLogin">Login</Button>
                <p className="textLogin">If you don’t have an account you can <br/><Link to="/register">register here</Link></p>
            </div>
        </div>
    )
}