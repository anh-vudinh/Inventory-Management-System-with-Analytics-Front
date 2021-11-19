import React, { useEffect, useState } from 'react'
import ApplicantsError from './ApplicantsError'
import ApplicantsHeader from './ApplicantsHeader'
import ApplicantsSuccess from './ApplicantsSuccess'
import ApplicantsTableContainer from './ApplicantsTable'

function ApplicantsContainer({BACK_END_URL, selectedCompany, history, isLoggedIn, currentPage, setCurrentPage}){

    const bgImage = "https://assets.transunion.com/resources/preemployment/img/blogs/content/B-verify-job-applicant-identity-content-D-082517.png"
    const [applicantsArray, setApplicantsArray] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if(!isLoggedIn) return history.push("/");
        if(selectedCompany.name === "") return history.push("/company_select");
        setCurrentPage({page_name:"Applicants", endpoint: "/applicants"})
        setIsLoading(true)
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`${BACK_END_URL}/api/applicants`, headers)
        .then(resp => resp.json())
        .then(data => {
            setApplicantsArray(data)
            setIsLoading(false)
        })
    },[])

    function hireApplicant(applicant){
        if(selectedCompany.name === "") return;
        const headers = {
            method: "POST",
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({applicant_id: applicant.id, company_id: selectedCompany.id})
        }
        fetch(`${BACK_END_URL}/api/employees`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(()=>
                    setSuccessMessage(`Applicant (${applicant.last_name}, ${applicant.first_name}) hired at ${selectedCompany.name}.`)
                )
            }else{
                resp.json().then(message =>
                    setErrorMessage(message.error)
                )
            }
        })
    }

    return(
        <div className="ApplicantsContainer">
            <div className="ApplicantsContainerBGImage">
                <img src={bgImage} alt="background"/>
            </div>
            <ApplicantsHeader/>

            <ApplicantsTableContainer
                applicantsArray={applicantsArray}
                hireApplicant={hireApplicant}
                isLoading={isLoading}
            />

            <ApplicantsError
                errorMessage={errorMessage} setErrorMessage={setErrorMessage}
            />
            <ApplicantsSuccess
                successMessage={successMessage} setSuccessMessage={setSuccessMessage}
            />
        </div>
    )
}

export default ApplicantsContainer