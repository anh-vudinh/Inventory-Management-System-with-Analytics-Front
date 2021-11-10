import React from 'react'
import CompanySelectCardContainer from './CompanySelectCardContainer'

function CompanySelectChildren({selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>

            <div className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
            </div>

            {/* <CompanySelectCardContainer/> */}
        </div>
    )
}

export default CompanySelectChildren