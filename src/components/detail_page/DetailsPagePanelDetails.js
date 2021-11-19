import React, { useEffect, useState } from 'react'
import DetailsPagePanelDetailsActions from './DetailsPagePanelDetailsActions'
import DetailsPagePanelDetailsActionsTransfer from './DetailsPagePanelDetailsActionsTransfer'
import DetailsPagePanelExtra from './DetailsPagePanelDetailsExtra'
import DetailsPagePanelMain from './DetailsPagePanelDetailsMain'

function DetailsPagePanelDetails({employeesArray, setEmployeesArray, setSelectedEmployee, selectedEmployee, BACK_END_URL, selectedCompany}){

    const [employeeFullDetails, setEmployeeFullDetails] = useState({id: "", image: "", first_name: "", middle_name: "", last_name: ""})
    const [currentAction, setCurrentAction] = useState("")

    useEffect(()=>{
        if(selectedEmployee.id === 0) return;
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BACK_END_URL}/api/employees/${selectedEmployee.id}`, headers)
        .then(resp => resp.json())
        .then(data => {
            setEmployeeFullDetails(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedEmployee])

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

    return(
        <div className="DetailsPagePanelDetails">
            <DetailsPagePanelMain
                employeeFullDetails={employeeFullDetails}
            />
            <DetailsPagePanelExtra
                employeeFullDetails={employeeFullDetails}
            />
            <DetailsPagePanelDetailsActions
                employeeFullDetails={employeeFullDetails}
                setCurrentAction={setCurrentAction}
            />

            {currentAction === "Transfer Employee"?
                <DetailsPagePanelDetailsActionsTransfer
                    employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
                    setCurrentAction={setCurrentAction}
                    BACK_END_URL={BACK_END_URL}
                    fetchDB={fetchDB}
                    selectedCompany={selectedCompany}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                />
            :
                null
            }
        </div>
    )
}

export default DetailsPagePanelDetails