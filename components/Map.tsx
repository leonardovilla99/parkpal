// Package
import * as React from "react"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'

import supabase from "@/supabase"


export default function Map(){

    const onAuthStateChange =async () => {
        try {
            let { error } = await supabase.auth.signOut()
        } catch (error) {
            console.log(error)
        }finally{
            window.location.reload();
        }
    }
    return(
        <div className="map">
            <div className="pin" id="uno"><p>1</p></div>
            <div className="pin" id="dos"><p>2</p></div>
            <div className="pin" id="tres"><p>3</p></div>
            <div className="pin" id="qu"><p>4</p></div>
            <div className="pin" id="cin"><p>5</p></div>
            <div className="pin" id="sei"><p>6</p></div>
            <div className="mapBox">
                <div className="parkingTitle">
                    <h2>FREE PARKING SPOT</h2>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG1</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>32</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG2</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>65</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG3</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>43</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG4</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>65</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG5</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>X</p></div>
                </div>
                <div className="parkingContainer" id="lastContainer">
                    <div className="parkingText">
                        <h3>PG6</h3>
                        <p>Parking spot available</p>
                    </div>
                    <div className="numberParking"><p>76</p></div>
                </div>
            </div>
            <button onClick={onAuthStateChange}>Logout</button>
        </div>
    )
}