import React, {useState} from "react";

function Toolbar({history, logoutSession}){

    const [toolbarArray, setToolbarArray] = useState([])
    const logoutIcon = "https://www.pinclipart.com/picdir/big/126-1262666_open-exit-door-open-door-icon-png-clipart.png"

    const toolbarIcons = toolbarArray.map(icon => 
        <img src={icon} alt={icon} title={icon}/>    
    )

    function handleGoBackClick(){
        history.goBack()
    }

    function handleGoForwardClick(){
        history.goForward()
    }

    return(
        <div className="ToolbarContainer">
            <div className="Toolbar">
                <div className="ToolbarNavIcons">
                    <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Replay_Reverse-512.png" alt="back button" title="Go Back" onClick={handleGoBackClick}/>
                    <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Replay_Reverse-512.png" alt="forward button" title="Go Forward" onClick={handleGoForwardClick}/>
                </div>
                <div className="ToolbarUserIcons">
                    {toolbarArray.length < 1? 
                        <img className="ToolbarAddIcon" src="https://cdn0.iconfinder.com/data/icons/circles-2/100/sign-square-dashed-plus-512.png" alt="add icon" title="Drag Drop Toolbar Icons Here To Add"/>
                    : null}
                    {toolbarIcons}
                </div>
                <div className="ToolbarLogoutIcon" onClick={logoutSession}>
                    <img src={logoutIcon} alt="logout" title="Logout"/>
                </div>
            </div>
        </div>
    )
}

export default Toolbar