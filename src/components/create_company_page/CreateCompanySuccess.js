import React from "react";

function CreateCompanyError({createdCompany, setCreatedCompany}){

    return(
        <div className={`CreateCompanySuccessOverlay ${createdCompany.name === ""? "hidden" : ""}`} onClick={()=> setCreatedCompany({name:""})}>
            <div className="CreateCompanySuccessContainer">
                <div className="CreateCompanySuccessImage">
                    <img src="http://parts.igem.org/wiki/images/2/28/Green_check_mark.png" alt="green check"/>
                </div>
                <div className="CreateCompanySuccessMessage">
                    <p>{`${createdCompany.name} sucessfully created`}</p>
                </div>
            </div>
        </div>
    )
}

export default CreateCompanyError