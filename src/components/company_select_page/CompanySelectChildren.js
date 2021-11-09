import React from 'react'

function CompanySelectChildren({selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>
            <p className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
            </p>
        </div>
    )
}

export default CompanySelectChildren