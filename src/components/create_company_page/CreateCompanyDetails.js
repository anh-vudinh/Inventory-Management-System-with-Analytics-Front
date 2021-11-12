import React,{useEffect, useState} from "react";

function CreateCompanyDetails({formData, setFormData, handleInputChange, BACK_END_URL}){

    const {name, street, city, state, zipcode, established, is_parent, company_structure, company_type, company_model} = formData

    const [userCompaniesArray, setUserCompaniesArray] = useState([])
    const companyStructuresArray = ["-- select an option --", "Sole Proprietorship", "Partnership", "S Corporation", "Corporation", "Limited Liability Company"]
    const companyTypesArray = ["-- select an option --", "For Profit", "Non-Profit"]
    const companyModelsArray = ["-- select an option --", "Agriculture, Forestry, Hunting and Fishing", "Manufacturing", "Retail Trade", "Accommodation and Food Services"]

    useEffect(()=>{
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
      
        fetch(`${BACK_END_URL}/api/companies`, headers)
        .then(resp => resp.json())
        .then(data => {
            setUserCompaniesArray(data)
        })
    },[])

    const parentCompanies = userCompaniesArray.map((company, index) => 
        <option key={`${company.name}${index}`} name={company.name} value={company.name}>
            {company.name}
        </option>    
    )

    const companyStructures = companyStructuresArray.map(structure => 
        <option key={structure} value={structure}>
            {structure}
        </option>
    )

    const companyTypes = companyTypesArray.map(type => 
        <option key={type} value={type}>
            {type}
        </option>
    )

    const companyModels = companyModelsArray.map(model => 
        <option key={model}>
            {model}
        </option>
    )

    return(
        <div className="CreateCompanyDetails">
            <form>
                <input className="" placeholder="Company Name" value={name} onChange={handleInputChange}/>
                <div className="CreateCompanyLocation">
                    <input className="" type="text" placeholder="Street" name="street" value={street} onChange={handleInputChange}/>
                    <input className="" type="text" placeholder="City" name="city" value={city} onChange={handleInputChange}/>
                    <input className="" type="text" placeholder="State" name="state" value={state} onChange={handleInputChange}/>
                    <input className="" type="number" placeholder="Zipcode" name="zipcode" value={zipcode} onChange={handleInputChange}/>
                    <input className="" type="date" placeholder="Establishment Date" name="established" value={established} onChange={handleInputChange}/>
                </div>
                <div className="CreateCompanyParent">
                    <input type="checkbox" name="is_parent" checked={is_parent} onChange={handleInputChange}/>
                    <label>{is_parent? "Is Parent" : "Child of: "}</label>
                    <select className={`CreateCompanyParentSelect ${is_parent? "hidden" : ""}`}>
                        {parentCompanies}    
                    </select>
                </div>

                <div className="CreateCompanyStructure">
                    <label>Company Structure</label>
                    <select name="company_structure" value={company_structure} onChange={handleInputChange}>
                        {companyStructures}    
                    </select>
                </div>

                <div className="CreateCompanyType">
                    <label>Company Type</label>
                    <select name="company_type" value={company_type} onChange={handleInputChange}>
                        {companyTypes}    
                    </select>
                </div>

                <div className="CreateCompanyModel">
                    <label>Company Model</label>
                    <select name="company_model" value={company_model} onChange={handleInputChange}>
                        {companyModels}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default CreateCompanyDetails


