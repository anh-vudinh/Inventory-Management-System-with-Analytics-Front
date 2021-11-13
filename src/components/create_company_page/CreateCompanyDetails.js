import React,{useEffect, useState} from "react";

function CreateCompanyDetails({formData, setFormData, handleInputChange, BACK_END_URL}){

    const {name, street, city, state, zipcode, established, is_parent, company_structure, company_type, company_model, parent_name} = formData

    const [userCompaniesArray, setUserCompaniesArray] = useState([])
    const [selectedParent, setSelectedParent] = useState({
        name:"",
        location:"",
        is_parent: true,
        company_structure: "",
        company_type: "",
        company_model: "",
        employees: 0,
        children: 0
    })
    const companyStructuresArray = ["-- select an option --", "Sole Proprietorship", "Partnership", "S Corporation", "Corporation", "Limited Liability Company"]
    const companyTypesArray = ["-- select an option --", "For-Profit", "Non-Profit"]
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

    function handleSelectParent(e){
        console.log(e.target.value)
        setSelectedParent(userCompaniesArray.find(company => company.name === e.target.value))
        handleInputChange(e)
    }

    return(
        <div className="CreateCompanyDetails">
            <form>
                <div className="CreateCompanyRequired">
                    <h1>Required Information</h1>

                    <div className="CreateCompanyName">
                        <p>Company Name</p>
                        <div>
                            <input placeholder="Name" name="name" value={name} onChange={handleInputChange}/>
                            <p>must be unique(case sensitive)</p>
                        </div>
                    </div>

                    <div className="CreateCompanySubSecA">
                        <div className="CreateCompanySpecs">
                            <div className="CreateCompanyStructure">
                                <p>Company Structure</p>
                                <select name="company_structure" value={company_structure} onChange={handleInputChange}>
                                    {companyStructures}    
                                </select>
                            </div>

                            <div className="CreateCompanyType">
                                <p>Company Type</p>
                                <select name="company_type" value={company_type} onChange={handleInputChange}>
                                    {companyTypes}    
                                </select>
                            </div>

                            <div className="CreateCompanyModel">
                                <p>Company Industry</p>
                                <select name="company_model" value={company_model} onChange={handleInputChange}>
                                    {companyModels}
                                </select>
                            </div>
                        </div>

                        <div className="CreateCompanyParent">
                            <input type="checkbox" name="is_parent" checked={is_parent} onChange={handleInputChange}/>
                            <p>{is_parent? "(Check) Parent Company" : "Child of: "}</p>
                            <select className={`CreateCompanyParentSelect ${is_parent? "hidden" : ""}`} name="parent_name" value={parent_name} onChange={handleSelectParent}>
                                {parentCompanies}    
                            </select>
                            <div className="CreateCompanyParentCompanyDetails">
                                <div>
                                    <p>Location: </p>
                                    <p>{selectedParent.location}</p>
                                </div>
                                
                                <div>
                                    <div className="CreateCompanyParentCompanyDetailsSecA">
                                        <div>
                                            <p>Structure: </p>
                                            <p>{selectedParent.company_structure}</p>
                                        </div>
                                        <div>
                                            <p>Type: </p>
                                            <p>{selectedParent.company_type}</p>
                                        </div>
                                        <div>
                                            <p>Industry: </p>
                                            <p>{selectedParent.company_model}</p>
                                        </div>
                                    </div>

                                    <div className="CreateCompanyParentCompanyDetailsSecB">
                                        <div>
                                            <p>Employees: </p>
                                            <p>{selectedParent.employees}</p>
                                        </div>
                                        <div>
                                            <p>Children: </p>
                                            <p>{selectedParent.children}</p>
                                        </div>
                                        <div>
                                            <p>Parent?: </p>
                                            <p>{selectedParent.is_parent.toString()}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    


                </div>

                <div className="Divider"></div>

                <div className="CreateCompanyOptional">
                    <h1>Optional Information</h1>
                    <div className="CreateCompanyEstDate">
                        <p>Established Date</p>
                        <input type="date" placeholder="Establishment Date" name="established" value={established} onChange={handleInputChange}/>
                    </div>

                    <div className="CreateCompanyLocation">
                        <p>Location</p>
                        <div>
                            <input type="text" placeholder="Street" name="street" value={street} onChange={handleInputChange}/>
                            <input type="text" placeholder="City" name="city" value={city} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder="State" name="state" value={state} onChange={handleInputChange}/>
                            <input type="text" placeholder="Zipcode" name="zipcode" value={zipcode} onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>








            </form>
        </div>
    )
}

export default CreateCompanyDetails


