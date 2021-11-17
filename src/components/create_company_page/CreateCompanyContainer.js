import React, { useState, useEffect } from "react";
import CreateCompanyError from "./CreateCompanyError";
import CreateCompanyForm from "./CreateCompanyForm";
import CreateCompanySuccess from "./CreateCompanySuccess"

function CreateCompanyContainer({ currentPage, setCurrentPage, history, setIsLoading, BACK_END_URL, logoutSession, isLoggedIn}){

    const containerBG = "https://www.tomber.biz/wp-content/uploads/2016/01/b53e19288eb68b246d95aa21ac5d5e93.jpg"
    const [errorMessage, setErrorMessage] = useState("")
    const [createdCompany, setCreatedCompany] = useState({name: ""})

    useEffect(()=>{
        setCurrentPage({page_name: "Create Company", endpoint: `/create_company`})
    },[])

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
        </div>
    )
}

export default CreateCompanyContainer


