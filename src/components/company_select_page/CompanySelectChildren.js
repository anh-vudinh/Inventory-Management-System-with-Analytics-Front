import React from 'react'

function CompanySelectChildren({selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>

            <div className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
            </div>
            
        </div>
    )
}

export default CompanySelectChildren