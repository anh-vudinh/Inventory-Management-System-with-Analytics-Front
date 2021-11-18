import React from 'react'

function CompanySelectHeader({currentUser}){
    
    return(
        <div className="CompanySelectHeader">
            <div className="CompanySelectHeaderTitle">
                <p>{`${currentUser.toUpperCase()}'S COMPANIES`}</p>
            </div>
        </div>
    )
}

export default CompanySelectHeader