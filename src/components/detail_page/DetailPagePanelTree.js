import React from 'react'

function DetailPagePanelTree({selectedCompany}){


    return(
        <div className="DetailPagePanelTree">
            <div className="DetailsPagePanelTreeTitle">
                <p>{selectedCompany.name}</p>
            </div>
        </div>
    )
}

export default DetailPagePanelTree