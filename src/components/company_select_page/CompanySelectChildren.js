import React from 'react'
import CompanySelectCardsContainer from './CompanySelectCardsContainer'

function CompanySelectChildren({BACK_END_URL, history, selectedParentName, setSelectedParentName, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray, selectedParentCategory, setSelectedParentCategory, MinusIcon, PlusIcon}){

    return(
        <div className={`CompanySelectChildren ${selectedParentCategory? "" : "csExpand"}`}>

            <div className="CompanySelectChildrenTitle" onClick={()=>setSelectedParentCategory(selectedParentCategory => !selectedParentCategory)}>
                <img src={selectedParentCategory?  PlusIcon : MinusIcon} alt="-/+"/>
                <p>Child Companies</p>
                <p>{selectedParentName === ""? "": `(${selectedParentName})`}</p>
            </div>

            <CompanySelectCardsContainer
                history={history}
                BACK_END_URL={BACK_END_URL} 
                cardContainerArray={childCompanyArray} //cardContainerArray converts childCompanyArray to general variable before passing to CardContainer
                setSelectedParentName={setSelectedParentName}
                setSelectedParentCategory={setSelectedParentCategory}
                selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
                childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
            />
        </div>
    )
}

export default CompanySelectChildren