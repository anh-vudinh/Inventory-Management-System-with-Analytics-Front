import React from "react";

function Overlay({setCurrentAction}){

    return(
        <div className="Overlay" onClick={()=> setCurrentAction("")}>
            <p>(click to exit)</p>
        </div>
    )
}

export default Overlay