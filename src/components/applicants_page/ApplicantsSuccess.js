import React from "react";

function ApplicantsSuccess({successMessage, setSuccessMessage}){

    return(
        <div className={`CreateCompanySuccessOverlay ${successMessage === ""? "hidden" : ""}`} onClick={()=> setSuccessMessage("")}>
            <div className="CreateCompanySuccessContainer">
                <div className="CreateCompanySuccessImage">
                    <img src="http://parts.igem.org/wiki/images/2/28/Green_check_mark.png" alt="green check"/>
                </div>
                <div className="CreateCompanySuccessMessage">
                    <p>{successMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default ApplicantsSuccess