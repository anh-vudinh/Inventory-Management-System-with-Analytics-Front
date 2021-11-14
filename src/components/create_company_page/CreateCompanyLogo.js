import React from "react";
import CreateCompanyEmptyLogo from "./CreateCompanyEmptyLogo";

function CreateCompanyLogo({formData, setFormData, handleInputChange}){

    return(
        <div className="CreateCompanyLogo">
            
            {formData.logo === ""?
                <CreateCompanyEmptyLogo/>
            :
                <img src={formData.logo} alt="Logo Sample"/>
            }

            <input name="logo" placeholder="Add Company Logo" value={formData.logo} onChange={handleInputChange}/>
        </div>
    )
}

export default CreateCompanyLogo


