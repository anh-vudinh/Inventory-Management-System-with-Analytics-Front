import React from 'react'

function CompanySelectCardActions({history, setSelectedParentName, BACK_END_URL, company, setSelectedParentCategory, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray}){

    const {id} = company
    const actionsBtnsArray =  ["Go to", "See Children"]
    const actionsBtnImageArray = [
        "https://image.flaticon.com/icons/png/128/865/865496.png",
        "https://www.austintxgaragedoorsolutions.com/wp-content/uploads/2015/07/two-people-icon-01-01-150x150.png"
    ]
    

    const actionsBtns = actionsBtnsArray.map((btn, index) => {

        if(btn === "See Children" && company.children_count < 1) return null;

        return (
            <div className="CompanySelectCardActionsBtn" key={btn} title={btn} onClick={handleBtnClick}>
                <img src={actionsBtnImageArray[index]} alt={btn}/>
            </div>
        )
    })


    function handleBtnClick(e){
        if(e.target.title === actionsBtnsArray[0]){
            //setCompanyDetails redirect to new page with full company details
            setSelectedCompany(company)
            history.push(`/detail_page/${id}`)
            
        } else if(e.target.title === actionsBtnsArray[1]){
            //fetch children of company and set
            fetchFromDB(`/api/get_children/${id}`)
        }
    }

    function fetchFromDB(URL){
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
      
        fetch(`${BACK_END_URL}${URL}`, headers)
        .then(resp => resp.json())
        .then(data => {
            setChildCompanyArray(data)
            setSelectedCompany(company)
            setSelectedParentName(company.name)
            setSelectedParentCategory(false)
        })
    }

    return(
        <div className="CompanySelectCardActionsContainer">
            {actionsBtns}
        </div>
    )
}

export default CompanySelectCardActions