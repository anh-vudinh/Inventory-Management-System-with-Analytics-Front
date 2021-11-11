import React from 'react'
import CompanySelectCardContainer from './CompanySelectCardContainer'

function CompanySelectChildren({selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray, selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>

            <div className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
                <p>{selectedCompany.name === "" || !selectedCompany.is_parent? "": `(${selectedCompany.name})`}</p>
            </div>

            <CompanySelectCardContainer
                cardContainerArray={childCompanyArray}          //cardContainerArray converts childCompanyArray to general variable before passing to CardContainer
                setChildCompanyArray={setChildCompanyArray}
                setSelectedParentCategory={setSelectedParentCategory}
                setSelectedCompany={setSelectedCompany}
            />
        </div>
    )
}

export default CompanySelectChildren