import React, {useState, useEffect} from 'react'
import LoadingCircle from '../../LoadingCircle'
import Overlay from '../../Overlay'

function DetailsPagePanelDetailsActionsDuplicate({employeesArray, setEmployeesArray, selectedEmployee, setSelectedEmployee, selectedCompany, setCurrentAction, BACK_END_URL}){

    const [companiesArray, setCompaniesArray] = useState([])
    const [formData, setFormData] = useState({name:""})
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    useEffect(()=>{
        setIsLoading(true)
        if (selectedEmployee.id === 0) return setErrorMessage("First Select an Employee");
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
            setCompaniesArray(data.filter(company => company.id !== selectedCompany.id))
            setIsLoading(false)
        })
    },[])

    const companyList = companiesArray.map(company => 
        <option key={company.id} value={company.name}>
            {company.name}
        </option>
    )

    function handleInputChange(e){
        setFormData({...formData, name: e.target.value})
    }

    function handleSubmit(){
        if(formData.name === "") return;
        if(selectedEmployee.id === 0) return;
        setErrorMessage("")
        const matching_company = companiesArray.find(company => formData.name === company.name)
        
        const dataToSend = {
            from_company: selectedCompany.id,
            to_company: matching_company.id, 
            employee: selectedEmployee.id
        }

        const headers = {
            method: "POST",
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }

        fetch(`${BACK_END_URL}/api/duplicate_employee`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setCurrentAction("")
                })
            }else{
                resp.json().then(message => setErrorMessage(message.error))
            }
        })
    }

    return(
        <>
            <Overlay
                setCurrentAction={setCurrentAction}
            />
            <div className="DetailsPagePanelDetailsActionsDuplicateContainer">
                <div className="DetailsPagePanelDetailsActionsDuplicate">
                    {isLoading?
                        <>
                            <LoadingCircle/>
                            <div className="DetailsPagePanelDetailsActionsTransferError">
                                <p>{errorMessage}</p>
                            </div>
                        </>
                    :
                    <>
                        <div className="DetailsPagePanelDetailsActionsDuplicateCompanies">
                            <p>{selectedCompany.name}</p>
                            <img src="https://cdn4.iconfinder.com/data/icons/arrows-64/43/double-arrow-right-bolded-512.png" alt="Duplicate to arrow"/>

                                <select value={formData.name} onChange={handleInputChange}>
                                    <option value="">-- select an option --</option>
                                    {companyList}
                                </select>
                        </div>
                        <div className="DetailsPagePanelDetailsActionsDuplicateError">
                            <p>{errorMessage}</p>
                        </div>
                        <div className="DetailsPagePanelDetailsActionsDuplicateSubmit">
                            <button onClick={handleSubmit}>DUPLICATE</button>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default DetailsPagePanelDetailsActionsDuplicate