import React from "react";

function LoadingPage({isLoading}){
    return(
        <div className={`LoadingPage ${isLoading? "" : "hidden"}`}>
            <img src="https://www.policlinico.unina.it/siti/MR/images/loading-green.gif" alt="loading"/>
        </div>
    )
}

export default LoadingPage