import React from 'react'
import CompanySelectCardContainer from './CompanySelectCardContainer'


function CompanySelectParents({parentCompanyArray, selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){


    return(
        <div className={`CompanySelectParents ${selectedParentCategory? "csExpand" : ""}`}>
            
            <div className="CompanySelectParentsTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory? MinusIcon : PlusIcon} alt="-/+"/>
                <p>Parent Companies</p>
            </div>

            <CompanySelectCardContainer 
                cardContainerArray={parentCompanyArray}
            />
        </div>
    )
}

export default CompanySelectParents