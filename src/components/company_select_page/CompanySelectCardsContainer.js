import React from 'react'
import CompanySelectCard from './CompanySelectCard'

function CompanySelectCardsContainer({history, setSelectedParentName, BACK_END_URL, setSelectedParentCategory, childCompanyArray, setChildCompanyArray, cardContainerArray, selectedCompany, setSelectedCompany}){

    const companyCardsList = cardContainerArray.map((company, index) => 
        <CompanySelectCard
            history={history}
            key={`${company.name}${index}`}
            BACK_END_URL={BACK_END_URL}
            company={company}
            setSelectedParentName={setSelectedParentName}
            setSelectedParentCategory={setSelectedParentCategory}
            selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
            childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
        />
    )

    return(
        <div className="CompanySelectCardsContainer">
            {companyCardsList}
        </div>
    )
}

export default CompanySelectCardsContainer