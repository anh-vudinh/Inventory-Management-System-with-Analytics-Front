import React from 'react'

function DetailsPagePanelDetailsMainEmployement({employeeFullDetails}){

    const {employment_status} = employeeFullDetails
   
    return(
        <div className="DetailsPagePanelDetailsMainEmployement">
            <div className="DetailsPagePanelDetailsMainEmployementCurrentStatus">
                <p>Employment Status</p>
                <p>{!employment_status? "(no info)" : employment_status}</p>
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsMainEmployement