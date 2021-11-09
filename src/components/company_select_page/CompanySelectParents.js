import React from 'react'


function CompanySelectParents({selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectParents ${selectedParentCategory? "csExpand" : ""}`}>
            
            <div className="CompanySelectParentsTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory? MinusIcon : PlusIcon} alt="-/+"/>
                <p>Parent Companies</p>
            </div>

        </div>
    )
}

export default CompanySelectParents