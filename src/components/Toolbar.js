import React from "react";

function Toolbar({history, logoutSession, toolbarArray, setToolbarArray, handleToolbarPageAdd}){

    const logoutIcon = "https://www.pinclipart.com/picdir/big/126-1262666_open-exit-door-open-door-icon-png-clipart.png"

    const iconsImageArray = [
        {"Create Company": "https://cdn.onlinewebfonts.com/svg/img_161865.png"},
        {"Details Page": "https://www.freeiconspng.com/uploads/-info-button--details-sheets-icon--icon-search-engine--iconfinder-15.png"},
        {"Company Select": "https://cdn4.iconfinder.com/data/icons/symbol-black-business-1/32/office_building-search-512.png"},
        {"Applicants": "https://cdn2.iconfinder.com/data/icons/employment-business/256/Resume-512.png"}
    ]

    const toolbarIcons = toolbarArray.map(icon => 
        <img src={searchCallback(icon)} key={icon.page_name} alt={icon.page_name} title={icon.page_name} onClick={()=>history.push(`${icon.endpoint}`)}/>
    )

    function searchCallback(icon){
        const object = iconsImageArray.find(obj => Object.keys(obj)[0] === icon.page_name)
        return Object.values(object)[0];
    }

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
                    <img src="http://freevector.co/wp-content/uploads/2010/01/2558-back-arrow2.png" alt="back button" title="Go Back" onClick={handleGoBackClick}/>
                    <img src="http://freevector.co/wp-content/uploads/2010/01/2558-back-arrow2.png" alt="forward button" title="Go Forward" onClick={handleGoForwardClick}/>
                </div>
                <div className="ToolbarUserIcons">
                        {toolbarIcons}   
                </div>
                <div className="ToolbarAddIcon">
                    <img src="https://cdn0.iconfinder.com/data/icons/circles-2/100/sign-square-dashed-plus-512.png" alt="add icon" title="Add Shortcuts"/>
                </div>
                <div className="ToolbarAddIcon">
                    <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698367-icon-19-bookmark-add-512.png" alt="add icon" title="Click to Add Shortcut" onClick={handleToolbarPageAdd}/>
                </div>
                <div className="ToolbarLogoutIcon" onClick={logoutSession}>
                    <img src={logoutIcon} alt="logout" title="Logout"/>
                </div>
            </div>
        </div>
    )
}

export default Toolbar