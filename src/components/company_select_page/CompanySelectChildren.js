import React from 'react'
import CompanySelectCardsContainer from './CompanySelectCardsContainer'

function CompanySelectChildren({history, selectedParentName, setSelectedParentName, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray, selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>

            <div className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
                <p>{selectedParentName === ""? "": `(${selectedParentName})`}</p>
            </div>

            <CompanySelectCardsContainer
                history={history}
                cardContainerArray={childCompanyArray}          //cardContainerArray converts childCompanyArray to general variable before passing to CardContainer
                setChildCompanyArray={setChildCompanyArray}
                setSelectedParentCategory={setSelectedParentCategory}
                setSelectedCompany={setSelectedCompany}
                setSelectedParentName={setSelectedParentName}
            />
        </div>
    )
}

export default CompanySelectChildren