import React, {useEffect, useState} from 'react'

function DetailsPagePanelEmployees({employeesArray, setEmployeesArray, history, BACK_END_URL, handleSubCategoryClick, selectedSubCategory, selectedCompany, selectedEmployee, setSelectedEmployee}){

    useEffect(()=>{
        if(selectedCompany.name === "") return;
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const employeesList = 
        employeesArray.sort(function(a,b){
            if(a.last_name.toLowerCase() <
            b.last_name.toLowerCase()) return -1;
            if(a.last_name.toLowerCase() >
            b.last_name.toLowerCase()) return 1;
            return 0;
        }).map(employee =>

        <div key={employee.id} className={`DetailsPagePanelEmployeeName ${employee.id === selectedEmployee.id ? "DPPSelected" : ""}`} onClick={()=>handleSelectedEmployeeClick(employee)}>
            <p>{`${employee.last_name.toUpperCase()}, ${employee.first_name.toUpperCase()}`}</p>    
        </div>
    )

    function handleSelectedEmployeeClick(employee){
        if (employee.id !== selectedEmployee.id){
            setSelectedEmployee(employee)
        }else{
            setSelectedEmployee({id: 0})
        }
    }

    return(
        <div className={`DetailsPagePanelEmployees ${selectedSubCategory === "Employees"? "DetailsPagePanelShow" : "" }`}>
            <div className={`DetailsPagePanelEmployeesTitle ${selectedSubCategory === "Employees"? "DPPSelected" : ""}`} onClick={()=> handleSubCategoryClick("Employees")}>
                <p>{`Employees (${employeesArray.length})`}</p>
            </div>
            <div className="DetailsPagePanelEmployeesList">
                <div className="DetailsPagePanelAddEmployeeName" onClick={()=>history.push("/applicants")}>
                    <p>ADD EMPLOYEE</p>    
                </div>
                {employeesList}
            </div>
        </div>
    )
}

export default DetailsPagePanelEmployees