import React, {useEffect, useState} from 'react'

function DetailsPagePanelEmployees({BACK_END_URL, handleSubCategoryClick, selectedSubCategory, selectedCompany}){

    const [employeesArray, setEmployeesArray] = useState([])

    useEffect(()=>{
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BACK_END_URL}/api/get_employees/${selectedCompany.id}`, headers)
        .then(resp => resp.json())
        .then(data => setEmployeesArray(data))
    },[])


    const employeesList = employeesArray.map(employee => 
        <p>{`${employee.first_name.toUpperCase()} ${employee.middle_name.toUpperCase()} ${employee.last_name.toUpperCase()}`}</p>    
    )

    return(
        <div className={`DetailsPagePanelEmployees ${selectedSubCategory === "Employees"? "DetailsPagePanelShow" : "" }`}>
            <div className="DetailsPagePanelEmployeesTitle" onClick={()=> handleSubCategoryClick("Employees")}>
                <p>Employees</p>
            </div>
            <div className="DetailsPagePanelEmployeesList">
                {employeesList}
            </div>
        </div>
    )
}

export default DetailsPagePanelEmployees