import React from 'react'

function DetailsPagePanelDetailsExtra({employeeFullDetails, employeeCE}){

    const {street_address, city, state, zipcode, phone_number, email, dob, age, gender, start_hire, end_hire, is_citizen, citizenship_type, is_felon, is_veteran, highest_education, emergency_contact_name, emergency_contact_relation, emergency_contact_info} = employeeFullDetails

    const extraDetailsArray = [
        {"Location": `${!street_address? "" : `${street_address}`}${!city? "" : `, ${city}`}${!state? "" : `, ${state}`}${!zipcode? "" : `, ${zipcode}`}`}, 
        {"Phone Number": phone_number},
        {"Email": email},
        {"D.O.B": `${!dob? "" : parseDate(dob)}`},
        {"Age": age},
        {"Gender": gender},
        {"Hire Date": `${!employeeCE.created_at? "" : parseDate(employeeCE.created_at)}`},
        {"Last Date": `${!end_hire? "" : parseDate(end_hire)}`},
        {"Citizen": is_citizen},
        {"Citizenship Type": citizenship_type},
        {"Felon": is_felon? "Yes" : "No"},
        {"Veteran": is_veteran? "Yes" : "No"},
        {"Highest Education Level": highest_education},
        {"Emergency Contact Name":  emergency_contact_name},
        {"Emergency Contact Relationship": emergency_contact_relation},
        {"Emergency Contact": emergency_contact_info}  
    ]

    const extraDetails = extraDetailsArray.map((obj, index) => 
        
        <div key={Object.keys(obj)[0]} className={`DetailsPagePanelDetailsExtraItem ${index%2 === 0? "" : "atiAlt"}`}>
            <p>{`${Object.keys(obj)[0]}: `}</p>
            <p>{Object.values(obj)[0]}</p>
        </div>  
    )

    function parseDate(date){
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric'
          };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(date)).replace(",", " - ")
    }

    return(
        <div className="DetailsPagePanelDetailsExtra">
            <div className="DetailsPagePanelDetailsExtraBox">
                {extraDetails}
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsExtra