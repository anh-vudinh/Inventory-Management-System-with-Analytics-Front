import React from 'react'
import DetailsPagePanelAnalytics from './DetailsPagePanelAnalytics'
import DetailsPagePanelManagement from './DetailsPagePanelManagement'

function DetailsPagePanelTree({BACK_END_URL, selectedCompany, selectedMainCategory, setSelectedMainCategory, selectedSubCategory, setSelectedSubCategory, selectedEmployee, setSelectedEmployee}){

    return(
        <div className="DetailsPagePanelTree">
            <div className="DetailsPagePanelTreeTitle">
                <p>{selectedCompany.name}</p>
            </div>
            <DetailsPagePanelManagement
                selectedCompany={selectedCompany}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                BACK_END_URL={BACK_END_URL}
            />
            <DetailsPagePanelAnalytics
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
            />
        </div>
    )
}

export default DetailsPagePanelTree