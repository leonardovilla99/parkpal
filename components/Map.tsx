// Package
import * as React from "react"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'


export default function Map(){
    return(
        <div className="map">
            <div className="pin" id="uno"><>1</></div>
            <div className="pin" id="dos"><>2</></div>
            <div className="pin" id="tres"><>3</></div>
            <div className="pin" id="qu"><>4</></div>
            <div className="pin" id="cin"><>5</></div>
            <div className="pin" id="sei"><>6</></div>
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
        </div>
    )
}