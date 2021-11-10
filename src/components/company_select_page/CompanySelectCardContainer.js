import React from 'react'
import CompanySelectCard from './CompanySelectCard'

function CompanySelectCardContainer({cardContainerArray}){

    const companyCardsList = cardContainerArray.map(company => 
        <CompanySelectCard
            key={company.name}
            company={company}
        />
    )

    return(
        <div className="CompanySelectCardContainer">
            {companyCardsList}
        </div>
    )
}

export default CompanySelectCardContainer