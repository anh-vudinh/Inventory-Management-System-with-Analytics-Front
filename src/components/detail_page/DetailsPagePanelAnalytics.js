import React from 'react'

function DetailsPagePanelAnalytics({selectedMainCategory, setSelectedMainCategory, selectedSubCategory, setSelectedSubCategory}){

    function handleMainCategoryClick(){
        if(selectedMainCategory === "Analytics"){
            setSelectedMainCategory("")
        }else{
            setSelectedMainCategory("Analytics")
        }
    }

    return(
        <div className="DetailsPagePanelAnalytics">
            <div className={`DetailsPagePanelAnalyticsTitle ${selectedMainCategory === "Analytics"? "DPPSelected" : "" }`} onClick={handleMainCategoryClick}>
                <p>Analytics</p>
            </div>
        </div>
    )
}

export default DetailsPagePanelAnalytics