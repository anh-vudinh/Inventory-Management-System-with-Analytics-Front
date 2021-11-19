import React from 'react'
import LoadingCircle from '../LoadingCircle'
import ApplicantsTableItem from './ApplicantsTableItem'

function ApplicantsTableContainer({applicantsArray, hireApplicant, isLoading}){

    const titlesArray = ["Application Date", "Name", "Address", "DOB", "Age", "Gender", "Phone Number", "Education", "Felon", "Last Interview", "Rating", "Action Buttons"]

    const titles = titlesArray.map(title => 
        <div key={title} className={`${title.replaceAll(" ","_")}`}>
            <p>{title}</p>
        </div>
    )

    const listItem = applicantsArray.map((applicant, index) => 
        <ApplicantsTableItem 
            key={applicant.id}
            applicant={applicant}
            index={index}
            parseDateTime={parseDateTime}
            parseDate={parseDate}
            hireApplicant={hireApplicant}
        />    
    )

    function parseDateTime(dateTime){
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric'
          };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(dateTime)).replace(",", " - ")
    }

    function parseDate(date){
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric'
          };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(date)).replace(",", " - ")
    }

    return(
        <div className="ApplicantsTableContainer">
            <div className="ApplicantsTable">
                <div className="ApplicantsTableHeaders">
                    {titles}
                </div>
                <div className="ApplicantsTableList">
                    {isLoading? 
                        <LoadingCircle/>
                    :
                        listItem
                    }
                </div>
            </div>
        </div>

    )
}

export default ApplicantsTableContainer