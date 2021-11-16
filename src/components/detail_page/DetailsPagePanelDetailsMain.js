import React from 'react'
import DetailsPagePanelDetailsMainEmployementOptions from './DetailsPagePanelDetailsMainEmployementOptions'
import DetailsPagePanelDetailsMainEmployement from './DetailsPagePanelDetailsMainEmployment'
import DetailsPagePanelDetailsMainImage from './DetailsPagePanelDetailsMainImage'
import DetailsPagePanelDetailsMainName from './DetailsPagePanelDetailsMainName'
import DetailsPagePanelDetailsMainNotes from './DetailsPagePanelDetailsMainNotes'

function DetailsPagePanelDetailsMain({employeeFullDetails}){

    return(
        <div className="DetailsPagePanelDetailsMain">
            <DetailsPagePanelDetailsMainImage
                employeeFullDetails={employeeFullDetails}
            />
            <div className="DetailsPagePanelDetailsSub">
                <DetailsPagePanelDetailsMainName
                    employeeFullDetails={employeeFullDetails}
                />
                <DetailsPagePanelDetailsMainEmployement
                    employeeFullDetails={employeeFullDetails}
                />
            </div>
            
            <DetailsPagePanelDetailsMainEmployementOptions
                employeeFullDetails={employeeFullDetails}
            />

            <DetailsPagePanelDetailsMainNotes
                employeeFullDetails={employeeFullDetails}
            />
        </div>
    )
}

export default DetailsPagePanelDetailsMain