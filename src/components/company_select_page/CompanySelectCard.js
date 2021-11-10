import React from 'react'

function CompanySelectCard({company}){
    const {name, image, location, description, is_parent, company_structure, company_type, company_model, employees, children} = company
    
    const genericLogo = "https://istvankocsis.gallerycdn.vsassets.io/extensions/istvankocsis/reactcodesnippets/3.1/1582843313592/Microsoft.VisualStudio.Services.Icons.Default"
    const objectAssociations = [
        {"For-profit": "https://www.logolynx.com/images/logolynx/40/40ab0511b81a7ca4faf68c02dd4411eb.png"},
        {"Non-profit": "https://designups.com/wp-content/uploads/2020/01/non-profit-icon.png"},
        {"Sole Proprietorship": "SP"},
        {"Partnership": "P"},
        {"S Corporation": "SC"},
        {"Corporation": "C"},
        {"Limited Liability Company": "LLC"}
    ]

    const companyType = objectAssociations.find(object => Object.keys(object)[0] === company_type)
    const companyStructure = objectAssociations.find(object => Object.keys(object)[0] === company_structure)

    const companyDetailsNameArrayA = ["Industry", "Location"]
    const companyDetailsValueArrayA = [company_model, location]

    const companyDetailsA = companyDetailsNameArrayA.map((detail, index) => 
        <div className="CompanySelectDetailsSubText" key={detail}>
            <p>{`${detail} :`}</p>
            <p>{companyDetailsValueArrayA[index]}</p>
        </div>
    )

    const companyDetailsNameArrayB = ["Employees", "Children"]
    const companyDetailsValueArrayB = [employees, children]

    const companyDetailsB = companyDetailsNameArrayB.map((detail, index) => 
        <div className="CompanySelectDetailsSubText" key={detail}>
            <p>{`${detail} :`}</p>
            <p>{companyDetailsValueArrayB[index]}</p>
        </div>
    )

    return(
        <div className="CompanySelectCard">
            <div className="CompanySelectCardTitle">
                <div className="CompanySelectCardTitleText">
                    <p>{name}</p>
                </div>
                <div className="CompanySelectCardImage">
                    <img src={!image? genericLogo : image} alt="name"/>
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
                    <img src={Object.values(companyType)[0]} alt={company_type} title={company_type}/>
                    <p title={company_structure}>{Object.values(companyStructure)[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default CompanySelectCard