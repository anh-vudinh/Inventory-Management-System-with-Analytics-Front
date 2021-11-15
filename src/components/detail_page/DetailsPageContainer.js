import React, {useState } from 'react'
import DetailsPagePanelDetails from './DetailsPagePanelDetails'
import DetailsPagePanelTree from './DetailsPagePanelTree'

function DetailsPageContainer({BACK_END_URL, selectedCompany}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState({})

    return(
        <div className="DetailsPageContainer">
            <DetailsPagePanelTree
                selectedCompany={selectedCompany}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedEmployees={selectedEmployee} setSelectedEmployees={setSelectedEmployee}
                BACK_END_URL={BACK_END_URL}
            />
            <DetailsPagePanelDetails
                BACK_END_URL={BACK_END_URL}
            />
        </div>
    )
}

export default DetailsPageContainer