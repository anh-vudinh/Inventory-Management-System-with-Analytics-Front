import React from "react";

function ApplicantsError({errorMessage, setErrorMessage}){

    return(
        <div className={`CreateCompanyErrorOverlay ${errorMessage === ""? "hidden" : ""}`} onClick={()=> setErrorMessage("")}>
            <div className="CreateCompanyErrorContainer">
                <div className="CreateCompanyErrorTitle">
                    <p>Error</p>
                </div>
                <div className="Divider"/>
                <div className="CreateCompanyErrorMessage">
                    <p>{errorMessage}</p>
                </div>
                <div className="CreateCompanyErrorBtn">
                    <button>OKAY</button>
                </div>
            </div>
        </div>
    )
}

export default ApplicantsError