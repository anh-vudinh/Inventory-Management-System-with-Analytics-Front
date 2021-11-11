import React from 'react'
import DetailPagePanelDetails from './DetailPagePanelDetails'
import DetailPagePanelTree from './DetailPagePanelTree'

function DetailPageContainer({selectedCompany}){

    return(
        <div className="DetailPageContainer">
            <DetailPagePanelTree
                selectedCompany={selectedCompany}
            />
            <DetailPagePanelDetails/>
        </div>
    )
}

export default DetailPageContainer