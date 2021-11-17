import React, { useEffect, useState } from 'react'
import DetailsPagePanelActions from './DetailsPagePanelDetailsActions'
import DetailsPagePanelExtra from './DetailsPagePanelDetailsExtra'
import DetailsPagePanelMain from './DetailsPagePanelDetailsMain'

function DetailsPagePanelDetails({selectedEmployee, BACK_END_URL}){

    const [employeeFullDetails, setEmployeeFullDetails] = useState({id: "", image: "", first_name: "", middle_name: "", last_name: ""})

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

    return(
        <div className="DetailsPagePanelDetails">
            <DetailsPagePanelMain
                employeeFullDetails={employeeFullDetails}
            />
            <DetailsPagePanelExtra
                employeeFullDetails={employeeFullDetails}
            />
            <DetailsPagePanelActions
                employeeFullDetails={employeeFullDetails}
            />
        </div>
    )
}

export default DetailsPagePanelDetails