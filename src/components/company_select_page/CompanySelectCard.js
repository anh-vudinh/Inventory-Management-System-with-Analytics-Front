import React from 'react'

function CompanySelectCard({company}){
    const {name, image, location, description, is_parent, company_structure, company_type, company_model} = company
    
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
                <p className="CompanySelectSnapshotTitle"> Snapshot</p>

            </div>
            <div className="CompanySelectDetails">
                <div className="CompanySelectDetailsText">
                    <p>{`Location: ${location}`}</p>
                    <p>{`Industry: ${company_model}`}</p>
                    <p>{`Type: ${company_type}`}</p>
                    <p>{`Structure: ${company_structure}`}</p>
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