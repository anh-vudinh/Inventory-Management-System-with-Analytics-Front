import React from 'react'
import DetailPagePanelDetails from './DetailPagePanelDetails'
import DetailPagePanelTree from './DetailPagePanelTree'

function DetailPageContainer({history, selectedCompany}){

    function handleGoBackClick(){
        history.goBack()
    }

    return(
        <div className="DetailPageContainer">
            <div className="CreateCompanyBack" onClick={handleGoBackClick}>
                <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Replay_Reverse-512.png" alt="back button" title="Go Back"/>
            </div>
            <DetailPagePanelTree
                selectedCompany={selectedCompany}
            />
            <DetailPagePanelDetails/>
        </div>
    )
}

export default DetailPageContainer