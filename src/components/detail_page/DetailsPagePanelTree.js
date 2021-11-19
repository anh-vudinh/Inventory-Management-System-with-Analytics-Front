import React from 'react'
import DetailsPagePanelAnalytics from './DetailsPagePanelAnalytics'
import DetailsPagePanelManagement from './DetailsPagePanelManagement'

function DetailsPagePanelTree({employeesArray, setEmployeesArray, history, BACK_END_URL, selectedCompany, selectedMainCategory, setSelectedMainCategory, selectedSubCategory, setSelectedSubCategory, selectedEmployee, setSelectedEmployee}){

    return(
        <div className="DetailsPagePanelTree">
            <div className="DetailsPagePanelTreeTitle">
                <p>{selectedCompany.name}</p>
            </div>
            <DetailsPagePanelManagement
                selectedCompany={selectedCompany}
                employeesArray={employeesArray} setEmployeesArray={setEmployeesArray}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                BACK_END_URL={BACK_END_URL}
                history={history}
            />
            <DetailsPagePanelAnalytics
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
            />
        </div>
    )
}

export default DetailsPagePanelTree