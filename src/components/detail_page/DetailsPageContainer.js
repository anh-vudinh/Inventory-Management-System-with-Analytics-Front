import React, {useState, useEffect} from 'react'
import DetailsPagePanelDetails from './DetailsPagePanelDetails'
import DetailsPagePanelTree from './DetailsPagePanelTree'
import DetailsPagePanelDetailsActionsCreateUser from './detail_page_action_buttons/DetailsPagePanelDetailsActionsCreateUser'
import DetailsPagePanelDetailsActionsDuplicate from './detail_page_action_buttons/DetailsPagePanelDetailsActionsDuplicate'
import DetailsPagePanelDetailsActionsEnableDisableUser from './detail_page_action_buttons/DetailsPagePanelDetailsActionsEnableDisableUser'
import DetailsPagePanelDetailsActionsTransfer from './detail_page_action_buttons/DetailsPagePanelDetailsActionsTransfer'

function DetailsPageContainer({history, BACK_END_URL, selectedCompany, currentPage, setCurrentPage}){

    const [employeesArray, setEmployeesArray] = useState([])
    const [selectedMainCategory, setSelectedMainCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState({id:0})
    const [currentAction, setCurrentAction] = useState("")

    useEffect(()=>{
        setCurrentPage({page_name: "Details Page", endpoint: `/detail_page/${selectedCompany.id}`})
    },[])

    function fetchDB(endpoint, method, dataToSend){
        const headers = {
            method: method,
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }

        fetch(`${BACK_END_URL}${endpoint}`, headers)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    function renderSwitch() {
        switch(currentAction){
            case "Transfer Employee": 
                return <DetailsPagePanelDetailsActionsTransfer
                            employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
                            setCurrentAction={setCurrentAction}
                            BACK_END_URL={BACK_END_URL}
                            fetchDB={fetchDB}
                            selectedCompany={selectedCompany}
                            selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                        />;
            case "Duplicate Employee":
                return  <DetailsPagePanelDetailsActionsDuplicate
                            employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
                            setCurrentAction={setCurrentAction}
                            BACK_END_URL={BACK_END_URL}
                            fetchDB={fetchDB}
                            selectedCompany={selectedCompany}
                            selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                        />;
            case "Create User Login":
                return <DetailsPagePanelDetailsActionsCreateUser
                            BACK_END_URL={BACK_END_URL}
                            setCurrentAction={setCurrentAction}
                            selectedCompany={selectedCompany}
                            selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                        />;
            case "Enable/Disable User":
                return <DetailsPagePanelDetailsActionsEnableDisableUser
                            BACK_END_URL={BACK_END_URL}
                            setCurrentAction={setCurrentAction}
                            selectedCompany={selectedCompany}
                            selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                        />;
            default: 
                return null;
        }
    }

    return(
        <div className="DetailsPageContainer">
            <DetailsPagePanelTree
                employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
                selectedCompany={selectedCompany}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                BACK_END_URL={BACK_END_URL}
                history={history}
            />
            <DetailsPagePanelDetails
                BACK_END_URL={BACK_END_URL}
                currentAction={currentAction} setCurrentAction={setCurrentAction}
                selectedEmployee={selectedEmployee}
                selectedCompany={selectedCompany}
                setSelectedEmployee={setSelectedEmployee}
                employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
            />
            {renderSwitch()}
        </div>
    )
}

export default DetailsPageContainer