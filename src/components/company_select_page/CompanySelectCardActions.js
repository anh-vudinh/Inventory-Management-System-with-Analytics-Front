import React from 'react'

function CompanySelectCardActions({isActive, setIsActive, history, setSelectedParentName, BACK_END_URL, company, setSelectedParentCategory, selectedCompany, setSelectedCompany, childCompanyArray, setChildCompanyArray}){
    const {id} = company
    const actionsBtnsArray =  [
        "Go to",
        `${isActive? "Lock" : "Unlock"}`,
        "See Children"
    ]
    
    const actionsBtnImageArray = [
        "https://image.flaticon.com/icons/png/128/865/865496.png",
        `${isActive? "http://thestephaneandre.com/wp-content/uploads/2017/01/unlockYourProjectSimply_00.png" : "https://isssource.com/wp-content/uploads/2020/08/081020smart-lock.png"}`,
        "https://www.austintxgaragedoorsolutions.com/wp-content/uploads/2015/07/two-people-icon-01-01-150x150.png",
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
        if(e.target.title === "Go to"){
            //setCompanyDetails redirect to new page with full company details
            setSelectedCompany(company)
            history.push(`/detail_page/${id}`)
            
        } else if(e.target.title === "See Children"){
            //fetch children of company and set
            fetchFromDB(`/api/get_children/${id}`)
        } else if(e.target.title === "Lock" || e.target.title === "Unlock"){

            const headers = {
                method: "PATCH",
                withCredentials: true,
                credentials: 'include',
                redirect: 'follow',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({is_active: !isActive})
            }
          
            fetch(`${BACK_END_URL}/api/companies/${id}`, headers)
            .then(resp => {
                if(resp.ok){
                    resp.json().then(()=>
                        setIsActive(!isActive)
                    )
                }
            })
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