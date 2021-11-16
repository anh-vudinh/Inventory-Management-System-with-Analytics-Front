import React from 'react'

function DetailsPagePanelDetailsMainImage({employeeFullDetails}){
    
    const {image} = employeeFullDetails

    return(
        <div className="DetailsPagePanelDetailsMainImage">
            <img src={!image? "https://cdn0.iconfinder.com/data/icons/circles-2/100/sign-square-dashed-plus-512.png" : image} alt="employee pic"/>
        </div>
    )
}

export default DetailsPagePanelDetailsMainImage