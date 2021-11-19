import React,{useEffect, useState} from "react";
import CreateCompanyParentPanel from "./CreateCompanyParentPanel";
import LoadingCircle from "../LoadingCircle";

function CreateCompanyDetails({setIsLoading, formData, setFormData, handleInputChange, handleFormSubmit, BACK_END_URL}){

    const {name, street, city, state, zipcode, established, is_parent, structure, organization, industry, parent_name} = formData

    const [parentsLoading, setParentsLoading] = useState(false)
    const [userCompaniesArray, setUserCompaniesArray] = useState([])
    const [selectedParent, setSelectedParent] = useState({
        name:"",
        location:"",
        is_parent: true,
        structure: "",
        organization: "",
        industry: "",
        employees: 0,
        children: 0
    })
    const companyStructuresArray = ["-- select an option --", "Sole Proprietorship", "Partnership", "S Corporation", "Corporation", "Limited Liability Company"]
    const companyOrganizationsArray = ["-- select an option --", "For-Profit", "Non-Profit", "Not-For-Profit"]
    const companyIndustriesArray = ["-- select an option --", "Agriculture, Forestry, Hunting and Fishing", "Manufacturing", "Retail Trade", "Accommodation and Food Services"]
    

    useEffect(()=>{
        setParentsLoading(true)
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
            setParentsLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const companyOrganizations = companyOrganizationsArray.map(organization => 
        <option key={organization} value={organization}>
            {organization}
        </option>
    )

    const companyIndustries = companyIndustriesArray.map(industry => 
        <option key={industry}>
            {industry}
        </option>
    )

    function handleSelectParent(e){
        setSelectedParent(userCompaniesArray.find(company => company.name === e.target.value))
        handleInputChange(e)
    }

    return(
        <div className="CreateCompanyDetails">
            <form>
                <div className="CreateCompanyRequired">
                    <h1>Required Information</h1>

                    <div className="CreateCompanyName">
                        <p>Name</p>
                        <div>
                            <input placeholder="Name" name="name" value={name} onChange={handleInputChange}/>
                            <p>must be unique(case sensitive)</p>
                        </div>
                    </div>

                    <div className="CreateCompanySubSecA">
                        <div className="CreateCompanySpecs">
                            <div className="CreateCompanyStructure">
                                <p>Structure</p>
                                <select name="structure" value={structure} onChange={handleInputChange}>
                                    {companyStructures}    
                                </select>
                            </div>

                            <div className="CreateCompanyOrganization">
                                <p>Organization</p>
                                <select name="organization" value={organization} onChange={handleInputChange}>
                                    {companyOrganizations}    
                                </select>
                            </div>

                            <div className="CreateCompanyModel">
                                <p>Industry</p>
                                <select name="industry" value={industry} onChange={handleInputChange}>
                                    {companyIndustries}
                                </select>
                            </div>
                        </div>

                        <div className="CreateCompanyParent">

                            <div className="CreateCompanyParentSelectSec">
                                {parentsLoading? 
                                    <LoadingCircle/>
                                :   
                                <>
                                    <input type="checkbox" name="is_parent" checked={is_parent} onChange={handleInputChange}/>
                                    <p>{is_parent? "Create Parent Company" : "Child of: "}</p>
                                    <select className={`CreateCompanyParentSelect ${is_parent? "hidden" : ""}`} name="parent_name" value={parent_name} onChange={handleSelectParent}>
                                        <option value="-- select an option --">-- select an option --</option>
                                        {parentCompanies}    
                                    </select>
                                </>
                                }
                            </div>
                            
                            <CreateCompanyParentPanel
                                selectedParent={selectedParent}
                                is_parent={is_parent}
                            />
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
            <div className="CreateCompanyFormSubmit" onClick={handleFormSubmit}>
                <img src="https://cdn.onlinewebfonts.com/svg/img_489531.png" alt="save" title="Save"/>
            </div>
        </div>
    )
}

export default CreateCompanyDetails


