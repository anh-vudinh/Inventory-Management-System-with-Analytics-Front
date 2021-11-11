import React from 'react'
import CompanySelectCardContainer from './CompanySelectCardContainer'


function CompanySelectParents({BACK_END_URL, childCompanyArray, setChildCompanyArray, selectedCompany, setSelectedCompany, parentCompanyArray, selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){


    return(
        <div className={`CompanySelectParents ${selectedParentCategory? "csExpand" : ""}`}>
            
            <div className="CompanySelectParentsTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory? MinusIcon : PlusIcon} alt="-/+"/>
                <p>Parent Companies</p>
                <p>{`(${parentCompanyArray.length})`}</p>
            </div>

            <CompanySelectCardContainer
                BACK_END_URL={BACK_END_URL} 
                cardContainerArray={parentCompanyArray}
                setSelectedParentCategory={setSelectedParentCategory}
                selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
                childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
            />
        </div>
    )
}

export default CompanySelectParents