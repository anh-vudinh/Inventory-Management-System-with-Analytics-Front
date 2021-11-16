import React from 'react'

function DetailsPagePanelDetailsExtra({employeeFullDetails}){

    const {street_address, city, state, zipcode, phone_number, email, dob, age, gender, start_hire, end_hire, is_citizen, citizenship_type, is_felon, is_veteran, highest_education, emergency_contact_name, emergency_contact_relation, emergency_contact_info} = employeeFullDetails

    const extraDetailsArray = [
        {"Location": `${street_address}, ${city}, ${state}, ${zipcode}`}, 
        {"Phone Number": phone_number},
        {"Email": email},
        {"D.O.B": dob},
        {"Age": age},
        {"Gender": gender},
        {"Hire Date": start_hire},
        {"Last Date": end_hire},
        {"Citizen": is_citizen},
        {"Citizenship Type": citizenship_type},
        {"Felon": is_felon},
        {"Veteran": is_veteran},
        {"Highest Education Level": highest_education},
        {"Emergency Contact Name":  emergency_contact_name},
        {"Emergency Contact Relationship": emergency_contact_relation},
        {"Emergency Contact": emergency_contact_info}  
    ]

    const extraDetails = extraDetailsArray.map(obj => 
        
        <div key={Object.keys(obj)[0]} className="DetailsPagePanelDetailsExtraItem">
            <p>{`${Object.keys(obj)[0]}: `}</p>
            <p>{Object.values(obj)[0]}</p>
        </div>  
    )

    return(
        <div className="DetailsPagePanelDetailsExtra">
            <div className="DetailsPagePanelDetailsExtraBox">
                {extraDetails}
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsExtra