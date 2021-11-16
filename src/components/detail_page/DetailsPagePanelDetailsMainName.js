import React from 'react'

function DetailsPagePanelDetailsMainName({employeeFullDetails}){

    const {first_name, middle_name, last_name} = employeeFullDetails

    return(
        <div className="DetailsPagePanelDetailsMainName">
            <div className="DetailsPagePanelDetailsMainFirstName">
                <p>First Name: </p>
                <p>{first_name}</p>
            </div>
            <div className="DetailsPagePanelDetailsMainMiddleName">
                <p>Middle Name: </p>
                <p>{middle_name}</p>
            </div>
            <div className="DetailsPagePanelDetailsMainLastName">
                <p>Last Name: </p>
                <p>{last_name}</p>
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsMainName