import React, { useEffect, useState } from 'react'
import DetailsPagePanelDetailsActions from './DetailsPagePanelDetailsActions'
import DetailsPagePanelExtra from './DetailsPagePanelDetailsExtra'
import DetailsPagePanelMain from './DetailsPagePanelDetailsMain'

function DetailsPagePanelDetails({currentAction, setCurrentAction, employeesArray, setEmployeesArray, setSelectedEmployee, selectedEmployee, BACK_END_URL, selectedCompany}){

    const [employeeFullDetails, setEmployeeFullDetails] = useState({company_employee: {created_at: ""}, employee:{id: "", image: "", first_name: "", middle_name: "", last_name: ""}})
    
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

        fetch(`${BACK_END_URL}/api/employees/${selectedCompany.id}/${selectedEmployee.id}`, headers)
        .then(resp => resp.json())
        .then(data => {
            setEmployeeFullDetails(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedEmployee])

    return(
        <div className="DetailsPagePanelDetails">
            <DetailsPagePanelMain
                employeeFullDetails={employeeFullDetails.employee}
            />
            <DetailsPagePanelExtra
                employeeFullDetails={employeeFullDetails.employee}
                employeeCE={employeeFullDetails.company_employee}
            />
            <DetailsPagePanelDetailsActions
                employeeFullDetails={employeeFullDetails.employee}
                employeeCE={employeeFullDetails.company_employee}
                setCurrentAction={setCurrentAction}
            />

        </div>
    )
}

export default DetailsPagePanelDetails