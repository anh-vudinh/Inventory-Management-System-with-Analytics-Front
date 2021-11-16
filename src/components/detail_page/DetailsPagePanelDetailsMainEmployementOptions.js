import React from 'react'

function DetailsPagePanelDetailsMainEmployementOptions({employeeFullDetails}){

    // const {employment_status} = employeeFullDetails
    const statuses = ["Trial", "Hired", "Paid-Leave", "Unpaid-Leave", "Suspended", "Fired", "Quit", "Retired"]

    const statusList = statuses.map(status => 
        <div key={status}>
            <input type="checkbox" name="employement_status" value={status}/>
            <label>{status}</label>
        </div>    
    )

    return(
        <div className="DetailsPagePanelDetailsMainEmployementOptions">
            {statusList}
        </div>
    )
}

export default DetailsPagePanelDetailsMainEmployementOptions