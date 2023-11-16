import React from "react";

export default function Popup(props){
    return(props.trigger)?(
        <div className="popupExt" >
            <div className="popup">
                {props.children}
            </div>
            <button onClick={() => {props.setTrigger(false)}} className="closeB">CLOSE</button>
        </div>
    ) : "";
}