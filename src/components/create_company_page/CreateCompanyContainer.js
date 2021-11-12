import React from "react";
import CreateCompanyForm from "./CreateCompanyForm";

function CreateCompanyContainer({BACK_END_URL}){

    const containerBG = "https://www.tomber.biz/wp-content/uploads/2016/01/b53e19288eb68b246d95aa21ac5d5e93.jpg"

    return(
        <div className="CreateCompanyContainer">
            <div className="CreateCompanyContainerBG">
                <img src={containerBG} alt="background"/>
            </div>
            <CreateCompanyForm
                BACK_END_URL={BACK_END_URL}
            />
        </div>
    )
}

export default CreateCompanyContainer


