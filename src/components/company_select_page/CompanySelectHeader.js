import React from 'react'

function CompanySelectHeader({currentUser}){

    return(
        <div className="CompanySelectHeader">
            <p className="CompanySelectHeaderTitle">
                {`${currentUser.toUpperCase()}'S COMPANIES`}
            </p>
        </div>
    )
}

export default CompanySelectHeader