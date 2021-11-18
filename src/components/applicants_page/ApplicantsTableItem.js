import React from 'react'

function ApplicantsTableItem({applicant, index, parseDateTime, parseDate, hireApplicant}){
    const {created_at, first_name, middle_name, last_name, street_address, city, state, zipcode, dob, age, gender, phone_number, highest_education, is_felon, interview_date, interview_rating} = applicant
    
    return(
        <div className={`ApplicantsTableItem ${index%2 === 0? "" : "atiAlt"}`}>
            <div className="ApplicantsTableItemApplicationDate">
                <p>{parseDateTime(created_at)}</p>
            </div>
            <div className="ApplicantsTableItemApplicationName">
                <p>{`${last_name.toUpperCase()}, ${first_name.toUpperCase()} ${middle_name !== ""? `, ${middle_name.charAt(0).toUpperCase()}` : ""}`}</p>
            </div>
            <div className="ApplicantsTableItemApplicationLocation">
                <p>{`${street_address},`}</p>
                <p>{`${city},`}</p>
                <p>{`${state}, ${zipcode.slice(0,5)}`}</p>
            </div>
            <div className="ApplicantsTableItemApplicationDOB">
                <p>{parseDate(dob)}</p>
            </div>
            <div className="ApplicantsTableItemApplicationAge">
                <p>{age}</p>
            </div>
            <div className="ApplicantsTableItemApplicationGender">
                <p>{gender.charAt(0)}</p>
            </div>
            <div className="ApplicantsTableItemApplicationPhone">
                <p>{phone_number}</p>
            </div>
            <div className="ApplicantsTableItemApplicationEducation">
                <p>{highest_education}</p>
            </div>
            <div className="ApplicantsTableItemApplicationFelon">
                <p>{is_felon? "Yes" : "No"}</p>
            </div>
            <div className="ApplicantsTableItemApplicationInterviewDate">
                <p>{!interview_date? "" : parseDate(interview_date)}</p>
            </div>
            <div className="ApplicantsTableItemApplicationInterviewRating">
                <p>{!interview_date? "" : interview_rating}</p>
            </div>
            <div className="ApplicantsTableItemApplicationActionButtons">
                <button>Interview</button>
                <button onClick={()=>hireApplicant(applicant)}>Hire</button>
                <button>Reject</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default ApplicantsTableItem