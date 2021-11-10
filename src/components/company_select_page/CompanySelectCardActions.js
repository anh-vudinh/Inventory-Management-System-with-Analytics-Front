import React from 'react'

function CompanySelectCardActions({company, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray}){

    const actionsBtnsArray =  ["Go to", "See Children"]
    const actionsBtnImageArray = [
        "https://image.flaticon.com/icons/png/128/865/865496.png",
        "https://www.austintxgaragedoorsolutions.com/wp-content/uploads/2015/07/two-people-icon-01-01-150x150.png"
    ]

    const actionsBtns = actionsBtnsArray.map((btn, index) =>
        <div className="CompanySelectCardActionsBtn" key={btn} onClick={handleBtnClick}>
            <img src={actionsBtnImageArray[index]} alt={btn} title={btn}/>
        </div>    
    )

    function handleBtnClick(e){
        if(e.target.title === actionsBtnsArray[0]){
            //setCompanyDetails redirect to new page with full company details
            setSelectedCompany(company)
            console.log(e.target.title)
        } else {
            //fetch children of company and set
            fetchNSetChildrenArray()
        }
        
    }

    function fetchNSetChildrenArray(){
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
      
        // fetch(`${BACK_END_URL}/api/companies`, headers)
        // .then(resp => resp.json())
        // .then(data => {
        //     setParentCompanyArray(data)
        // })
    }

    return(
        <div className="CompanySelectCardActionsContainer">
            {actionsBtns}
        </div>
    )
}

export default CompanySelectCardActions