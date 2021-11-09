import React from 'react'

function LoginPanelImageIcon({image, index, currentImageIndex, onIconClick}){

    return(
        <img className={`LoginPanelImageIcon ${currentImageIndex === index? "enlarge" : ""}`} src={image} onClick={(()=>onIconClick(index))} alt={image}/>
    )
}

export default LoginPanelImageIcon