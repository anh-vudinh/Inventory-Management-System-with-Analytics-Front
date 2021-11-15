import React from 'react'
import DetailsPagePanelAnalytics from './DetailsPagePanelAnalytics'
import DetailsPagePanelManagement from './DetailsPagePanelManagement'

function DetailsPagePanelTree({BACK_END_URL, selectedCompany, selectedMainCategory, setSelectedMainCategory, selectedSubCategory, setSelectedSubCategory, selectedUser, setSelectedUser}){

    return(
        <div className="DetailsPagePanelTree">
            <div className="DetailsPagePanelTreeTitle">
                <p>{selectedCompany.name}</p>
            </div>
            <DetailsPagePanelManagement
                selectedCompany={selectedCompany}
                selectedMainCategory={selectedMainCategory} setSelectedMainCategory={setSelectedMainCategory}
                selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
                selectedUser={selectedUser} setSelectedUser={setSelectedUser}
                BACK_END_URL={BACK_END_URL}
            />
            <DetailsPagePanelAnalytics/>
        </div>
    )
}

export default DetailsPagePanelTree