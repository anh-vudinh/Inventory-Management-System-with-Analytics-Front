import React, {useState} from 'react'
import { Redirect } from "react-router-dom";

function CompanySelectCardActions({BACK_END_URL, company, setSelectedParentCategory, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray}){

    const {id} = company
    const [showDetailPage, setShowDetailPage] = useState(false)
    const actionsBtnsArray =  ["Go to", "See Children"]
    const actionsBtnImageArray = [
        "https://image.flaticon.com/icons/png/128/865/865496.png",
        "https://www.austintxgaragedoorsolutions.com/wp-content/uploads/2015/07/two-people-icon-01-01-150x150.png"
    ]
    

    const actionsBtns = actionsBtnsArray.map((btn, index) => {

        if(btn === "See Children" && company.children < 1) return null;

        return (
            <div className="CompanySelectCardActionsBtn" key={btn} onClick={handleBtnClick}>
                <img src={actionsBtnImageArray[index]} alt={btn} title={btn}/>
            </div>
        )
    })

    if(showDetailPage) {
        return <Redirect to={`/detail_page/${id}`}/>
    }

    function handleBtnClick(e){
        if(e.target.title === actionsBtnsArray[0]){
            //setCompanyDetails redirect to new page with full company details
            setSelectedCompany(company)
            setShowDetailPage(true)
            
        } else {
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