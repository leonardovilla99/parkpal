import React from "react";

export default function Popup(props){
    return(props.trigger)?(
        <button className="popupExt" onClick={() => {props.setTrigger(false)}}>
            <button disabled={true} className="popup">
                {props.children}
            </button>
        </button>
    ) : "";
}