import React from 'react'
import CompanySelectCardActions from './CompanySelectCardActions'

function CompanySelectCard({history, setSelectedParentName, BACK_END_URL, setSelectedParentCategory, company, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray}){
    const {name, logo, location, description, is_parent, structure, organization, industry, employees, children} = company

    const genericLogo = "https://istvankocsis.gallerycdn.vsassets.io/extensions/istvankocsis/reactcodesnippets/3.1/1582843313592/Microsoft.VisualStudio.Services.Icons.Default"
    const objectAssociations = [
        {"For-Profit": "https://www.logolynx.com/images/logolynx/40/40ab0511b81a7ca4faf68c02dd4411eb.png"},
        {"Non-Profit": "https://designups.com/wp-content/uploads/2020/01/non-profit-icon.png"},
        {"Not-For-Profit" : "https://asruw.com.au/wp-content/uploads/2017/02/icon-not-for-profit.png"},
        {"Sole Proprietorship": "SP"},
        {"Partnership": "P"},
        {"S Corporation": "SC"},
        {"Corporation": "C"},
        {"Limited Liability Company": "LLC"}
        
    ]

    const companyOrganization = objectAssociations.find(object => Object.keys(object)[0] === organization)
    const companyStructure = objectAssociations.find(object => Object.keys(object)[0] === structure)

    const companyDetailsNameArrayA = ["Industry", "Location"]
    const companyDetailsValueArrayA = [industry, location]

    const companyDetailsA = companyDetailsNameArrayA.map((detail, index) => 
        <div className="CompanySelectDetailsSubText" key={`${detail}${index}`}>
            <p>{`${detail} :`}</p>
            <p>{companyDetailsValueArrayA[index]}</p>
        </div>
    )

    const companyDetailsNameArrayB = ["Employees", "Children"]
    const companyDetailsValueArrayB = [employees, children]

    const companyDetailsB = companyDetailsNameArrayB.map((detail, index) => 
        <div className="CompanySelectDetailsSubText" key={`${detail}${index}`}>
            <p>{`${detail} :`}</p>
            <p>{companyDetailsValueArrayB[index]}</p>
        </div>
    )

    return(
        <div className="CompanySelectCardContainer">
            <div className="CompanySelectCard">
                <div className="CompanySelectCardTitle">
                    <div className="CompanySelectCardTitleText">
                        <p>{name}</p>
                    </div>
                    <div className="CompanySelectCardImage">
                        <img src={!logo? genericLogo : logo} alt="name"/>
                    </div>
                </div>

                <div className="CompanySelectSnapshot">
                    <div className="CompanySelectSnapshotTitle"> 
                        <p> $1,000,000 (placeholder)</p>
                    </div>
                    <div className="CompanySelectSnapshotAsset">
                        <p>Assets:</p>
                    </div>
                    <div className="CompanySelectSnapshotLiability">
                        <p>Liabilities:</p>
                    </div>
                    <div className="CompanySelectSnapshotEquity">
                        <p>Equity:</p>
                    </div>
                </div>
                <div className="CompanySelectDetails">
                    <div className="CompanySelectDetailsTextContainer">
                        <div className="CompanySelectDetailsTextA">
                            {companyDetailsA}
                        </div>
                        <div className="CompanySelectDetailsTextB">
                            {companyDetailsB}
                        </div>
                    </div>

                    <div className="CompanySelectDetailsIcons">
                        <img src={Object.values(companyOrganization)[0]} alt={organization} title={organization}/>
                        <p title={structure}>{Object.values(companyStructure)[0]}</p>
                    </div>
                </div>
            </div>

            <CompanySelectCardActions
                history={history}
                company={company}
                BACK_END_URL={BACK_END_URL}
                setSelectedParentCategory={setSelectedParentCategory}
                setSelectedParentName={setSelectedParentName}
                selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
                childCompanyArray={childCompanyArray} setChildCompanyArray={setChildCompanyArray}
            />
        </div>
        
    )
}

export default CompanySelectCard