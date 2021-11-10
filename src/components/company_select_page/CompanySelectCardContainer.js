import React from 'react'
import CompanySelectCard from './CompanySelectCard'

function CompanySelectCardContainer({childCompanyArray, setChildCompanyArray, cardContainerArray, selectedCompany, setSelectedCompany}){

    const companyCardsList = cardContainerArray.map(company => 
        <CompanySelectCard
            key={company.name}
            company={company}
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