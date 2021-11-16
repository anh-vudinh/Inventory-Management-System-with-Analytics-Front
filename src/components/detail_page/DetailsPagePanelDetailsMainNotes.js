import React from 'react'

function DetailsPagePanelDetailsMainNotes({employeeFullDetails}){

    const {notes} = employeeFullDetails

    return(
        <div className="DetailsPagePanelDetailsMainNotes">
            <div className="DetailsPagePanelDetailsMainNotesMessage">
                {notes}
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsMainNotes