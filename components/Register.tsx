// Package
import * as React from "react"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'

// Component
import TextFields from '@/components/TextFields'


export default function Register(){
    return(
        <div className="loginBox">
            <div className="loginInside">
                {/* <img src={"./logo.png"} alt="Logo" className="logoLogin"/> */}
                <TextFields name="Email"/>
                <TextFields name="Password"/>
                <TextFields name="Confirm password"/>
                <Button variant="contained" className="buttonLogin">Register</Button>
                <p className="textLogin">If you have an account you can <br/><Link to="/">login here</Link></p>
            </div>
        </div>
    )
}