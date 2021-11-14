import React from "react";

function LoadingPage({isLoading}){
    return(
        <div className={`LoadingPage ${isLoading? "" : "hidden"}`}>
            <img src="https://gifimage.net/wp-content/uploads/2017/08/loading-gif-transparent-25.gif" alt="loading"/>
        </div>
    )
}

export default LoadingPage