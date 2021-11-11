import React from 'react'
import CompanySelectCard from './CompanySelectCard'

function CompanySelectCardContainer({BACK_END_URL, setSelectedParentCategory, childCompanyArray, setChildCompanyArray, cardContainerArray, selectedCompany, setSelectedCompany}){

    const companyCardsList = cardContainerArray.map(company => 
        <CompanySelectCard
            key={company.id}
            BACK_END_URL={BACK_END_URL}
            company={company}
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

export default CompanySelectCardContainer