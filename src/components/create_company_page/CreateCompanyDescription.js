import React from "react";

function CreateCompanyDescription({formData, setFormData, handleInputChange}){

    return(
        <div className="CreateCompanyDescription">
            <textarea name="description" placeholder="Company Description (Optional)" value={formData.description} onChange={handleInputChange}/>
        </div>
    )
}

export default CreateCompanyDescription


