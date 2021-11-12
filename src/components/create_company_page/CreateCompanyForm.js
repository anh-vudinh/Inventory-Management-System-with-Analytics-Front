import React, {useState} from "react";
import CreateCompanyDescription from "./CreateCompanyDescription";
import CreateCompanyDetails from "./CreateCompanyDetails";
import CreateCompanyLogo from "./CreateCompanyLogo";

function CreateCompanyForm({BACK_END_URL}){

    const formDataDefault = {
        logo: "",
        description: "",
        name: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        established: "",
        is_parent: true,
        company_structure: "",
        company_type: "",
        company_model: ""
    }

    const [formData, setFormData] = useState(formDataDefault)

    function handleInputChange(e){
        if(e.target.name === "is_parent") 
            return setFormData({...formData, [e.target.name]: e.target.checked});

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className="CreateCompanyFormContainer">

            <div className="CreateCompanyForm">

                <div className="CreateCompanyFormLeft">

                    <div className="CreateCompanyFormLeftTop">
                        <CreateCompanyLogo
                            handleInputChange={handleInputChange}
                            formData={formData} setFormData={setFormData}
                        />
                    </div>
                    <div className="CreateCompanyFormLeftBottom">
                        <CreateCompanyDescription
                            handleInputChange={handleInputChange}
                            formData={formData} setFormData={setFormData}
                        />
                    </div>

                </div>

                <div className="CreateCompanyFormRight">
                    <CreateCompanyDetails
                        handleInputChange={handleInputChange}
                        formData={formData} setFormData={setFormData}
                        BACK_END_URL={BACK_END_URL}                  
                    />
                </div>

            </div>
        </div>
    )
}

export default CreateCompanyForm


