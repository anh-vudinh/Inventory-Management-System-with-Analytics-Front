import React, {useState} from "react";
import CreateCompanyDescription from "./CreateCompanyDescription";
import CreateCompanyDetails from "./CreateCompanyDetails";
import CreateCompanyLogo from "./CreateCompanyLogo";

function CreateCompanyForm({setIsLoading, BACK_END_URL, setErrorMessage, setCreatedCompany}){

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
        parent_name: "",
        is_active: true,
        structure: "",
        organization: "",
        industry: ""
    }

    const [formData, setFormData] = useState(formDataDefault)

    function handleInputChange(e){
        if(e.target.name === "is_parent") 
            return setFormData({...formData, [e.target.name]: e.target.checked});

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleFormSubmit(){
        if(formData.name === "") return;
        const headers = {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }

        fetch(`${BACK_END_URL}/api/companies`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setCreatedCompany(data)
                })
            }else{
                resp.json().then(message => {
                    setErrorMessage(message.error)
                })
            }
        })
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
                        setIsLoading={setIsLoading}
                        handleInputChange={handleInputChange}
                        formData={formData} setFormData={setFormData}
                        BACK_END_URL={BACK_END_URL}
                        handleFormSubmit={handleFormSubmit}      
                    />
                </div>

            </div>
        </div>
    )
}

export default CreateCompanyForm


