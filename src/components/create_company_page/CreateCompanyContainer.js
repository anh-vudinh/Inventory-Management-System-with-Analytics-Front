import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CreateCompanyError from "./CreateCompanyError";
import CreateCompanyForm from "./CreateCompanyForm";
import CreateCompanySuccess from "./CreateCompanySuccess"

function CreateCompanyContainer({history, setIsLoading, BACK_END_URL, logoutSession, isLoggedIn}){

    const containerBG = "https://www.tomber.biz/wp-content/uploads/2016/01/b53e19288eb68b246d95aa21ac5d5e93.jpg"
    const [errorMessage, setErrorMessage] = useState("")
    const [createdCompany, setCreatedCompany] = useState({name: ""})
    const logoutIcon = "https://www.pinclipart.com/picdir/big/126-1262666_open-exit-door-open-door-icon-png-clipart.png"

    if(!isLoggedIn){
        return <Redirect to="/"/>
    }

    function handleGoBackClick(){
        history.goBack()
    }

    return(
        <div className="CreateCompanyContainer">
            <div className="CreateCompanyContainerBG">
                <img src={containerBG} alt="background"/>
            </div>
            <CreateCompanyForm
                BACK_END_URL={BACK_END_URL}
                setErrorMessage={setErrorMessage}
                setCreatedCompany={setCreatedCompany}
                setIsLoading={setIsLoading}
            />
            <CreateCompanyError
                errorMessage={errorMessage} setErrorMessage={setErrorMessage}
            />
            <CreateCompanySuccess
                createdCompany={createdCompany} setCreatedCompany={setCreatedCompany}
            />

            <div className="CreateCompanyBack" onClick={handleGoBackClick}>
                <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Replay_Reverse-512.png" alt="back button" title="Go Back"/>
            </div>

            <div className="CompanySelectLogout" onClick={logoutSession}>
                <img src={logoutIcon} alt="logout" title="Logout"/>
            </div>
        </div>
    )
}

export default CreateCompanyContainer


