// Package
import React,{useState} from "react"
import { Button } from "@mui/material"
import { Link } from 'react-router-dom'

// Component
import supabase from "@/supabase"
import Popup from "@/components/Popup"


export default function Map(){
    const [popup,setPopup] = useState(-1)
    const [popOpen,setPopOpen] = useState(false)
    const [swap,setSwap] = useState("")

    let availableSpot = [32,65,43,65,2,76]

    const onAuthStateChange =async () => {
        try {
            let { error } = await supabase.auth.signOut()
        } catch (error) {
            console.log(error)
        }finally{
            window.location.reload();
        }
    }

    const handleButtonClick = (value: React.SetStateAction<number>) => {
        // Use the 'value' parameter to update state or perform other actions
        setPopup(value);
        setPopOpen(true)
    }

    const swapSpot = () => {
        // Use the 'value' parameter to update state or perform other actions
        setSwap('Request Sent!')
        setInterval(function() {
            setSwap('')
        }, 2500);
    }

    return(
        <div className="map">
            <Popup trigger={popOpen} setTrigger={setPopOpen}>
                <h1>PG{popup}</h1>
                <p>Available spot: {availableSpot[popup-1]}</p>
                <div onClick={() => {swapSpot()}}>Request swap</div>
                <p>{swap}</p>
            </Popup>
            <button className="pin" id="uno" onClick={()=> {handleButtonClick(1)}}><p>1</p></button>
            <button className="pin" id="dos" onClick={()=> {handleButtonClick(2)}}><p>2</p></button>
            <button className="pin" id="tres" onClick={()=> {handleButtonClick(3)}}><p>3</p></button>
            <button className="pin" id="qu" onClick={()=> {handleButtonClick(4)}}><p>4</p></button>
            <button className="pin" id="cin" onClick={()=> {handleButtonClick(5)}}><p>5</p></button>
            <button className="pin" id="sei" onClick={()=> {handleButtonClick(6)}}><p>6</p></button>
            <div className="mapBox">
                <div className="parkingTitle">
                    <h2>SWAPPABLE PARKING</h2>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG1</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[0]}</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG2</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[1]}</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG3</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[2]}</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG4</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[3]}</p></div>
                </div>
                <div className="parkingContainer">
                    <div className="parkingText">
                        <h3>PG5</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[4]}</p></div>
                </div>
                <div className="parkingContainer" id="lastContainer">
                    <div className="parkingText">
                        <h3>PG6</h3>
                        <p>Best time to swap: 10:00 AM</p>
                    </div>
                    <div className="numberParking"><p>{availableSpot[5]}</p></div>
                </div>
            </div>
            <button onClick={onAuthStateChange}>Logout</button>
        </div>
    )
}