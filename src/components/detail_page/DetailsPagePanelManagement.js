import React from 'react'
import DetailsPagePanelProducts from './DetailsPagePanelProducts'
import DetailsPagePanelEmployees from './DetailsPagePanelEmployees'

function DetailsPagePanelManagement({history, BACK_END_URL, selectedMainCategory, setSelectedMainCategory, selectedSubCategory, setSelectedSubCategory, selectedEmployee, setSelectedEmployee, selectedCompany}){

    function handleMainCategoryClick(){
        if(selectedMainCategory === "Management"){
            setSelectedMainCategory("")
        }else{
            setSelectedMainCategory("Management")
        }
    }

    function handleSubCategoryClick(category){
        if(selectedSubCategory === "" || category !== selectedSubCategory){
            setSelectedSubCategory(`${category}`)
        }else{
            setSelectedSubCategory("")
        }
    }

    return(
        <div className={`DetailsPagePanelManagement ${selectedMainCategory === "Management"? "DetailsPagePanelShow" : ""}`}>
            <div className={`DetailsPagePanelManagementTitle ${selectedMainCategory === "Management"? "DPPSelected" : "" }`} onClick={handleMainCategoryClick}>
                <p>Management</p>
            </div>
            <DetailsPagePanelEmployees
                selectedCompany={selectedCompany}
                selectedSubCategory={selectedSubCategory}
                handleSubCategoryClick={handleSubCategoryClick}
                BACK_END_URL={BACK_END_URL}
                selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                history={history}
            />
            <DetailsPagePanelProducts
                selectedCompany={selectedCompany}
                selectedSubCategory={selectedSubCategory}
                handleSubCategoryClick={handleSubCategoryClick}
                BACK_END_URL={BACK_END_URL}
            />
        </div>
    )
}

export default DetailsPagePanelManagement