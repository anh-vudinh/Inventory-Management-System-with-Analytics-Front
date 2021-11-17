import React, {useState, useEffect} from 'react'
import DetailsPagePanelDetails from './DetailsPagePanelDetails'
import DetailsPagePanelTree from './DetailsPagePanelTree'

function DetailsPageContainer({BACK_END_URL, selectedCompany, currentPage, setCurrentPage}){

    const [selectedMainCategory, setSelectedMainCategory] = useState("")
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const [selectedEmployee, setSelectedEmployee] = useState({id:0})

    useEffect(()=>{
        setCurrentPage({page_name: "Details Page", endpoint: `/detail_page/${selectedCompany.id}`})
    },[])

    return(
        <div className="DetailsPageContainer">
            <DetailsPagePanelTree
                selectedCompany={selectedCompany}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}
                BACK_END_URL={BACK_END_URL}
            />
            <DetailsPagePanelDetails
                BACK_END_URL={BACK_END_URL}
                selectedEmployee={selectedEmployee}
            />
        </div>
    )
}

export default DetailsPageContainer