import React from 'react'

function CompanySelectHeader({currentUser}){
    
    // const headerImage = "https://www.elomatic.com/en/assets/images/services/information-management/information-management.jpg"

    return(
        <div className="CompanySelectHeader">
            {/* <div className="CompanySelectHeaderImage">
                <img src={headerImage} alt="image banner"/>
            </div> */}
            <div className="CompanySelectHeaderTitle">
                <p>{`${currentUser.toUpperCase()}'S COMPANIES`}</p>
            </div>
        </div>
    )
}

export default CompanySelectHeader