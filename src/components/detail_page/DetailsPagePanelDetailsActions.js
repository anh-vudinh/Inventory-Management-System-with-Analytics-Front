import React from 'react'

function DetailsPagePanelDetailsActions({employeeFullDetails, setCurrentAction}){

    const actionBtnsArray = [
        {"Update Information": "https://cdn.onlinewebfonts.com/svg/img_515158.png"}, 
        {"Performance Report": "https://cdn1.iconfinder.com/data/icons/line-design-business-set-4/21/report-512.png"},
        {"Time Clock": "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-013_time_clock-512.png"},
        {"Time Schedule": "https://cdn.onlinewebfonts.com/svg/img_563113.png"},
        {"Payment Information": "https://3dprint.com/wp-content/uploads/2015/03/payment_icon2-1.png"},
        {"Send Email": "https://cdn.onlinewebfonts.com/svg/img_501721.png"},
        {"Write Memo": "https://cdn.onlinewebfonts.com/svg/img_486548.png"},
        {"Write Warning Report": "https://cdn0.iconfinder.com/data/icons/report-6/25/clipboard-report-warning-512.png"},
        {"Create User Login": "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-112_user_add_new-512.png"},
        {"Enable/Disable User": "https://cdn1.iconfinder.com/data/icons/users-and-groups/32/user-lock-512.png"},
        {"Duplicate Employee": "https://cdn4.iconfinder.com/data/icons/users-15/60/duplicate_man-512.png"},
        {"Transfer Employee": "https://cdn2.iconfinder.com/data/icons/interview-8/56/replace__transfer__user__employee__exchange-512.png"},
        {"Change Security Level": "https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/item_game_ui_key_lock_security_safe_unlock-512.png"},
        {"Monitor Employee": "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/find-512.png"}
    ]

    const actionBtns = actionBtnsArray.map(obj => 
        <div key={Object.keys(obj)[0]} className="DetailsPagePanelDetailsActionsItem">
            <div className="DetailsPagePanelDetailsActionsItemImage" onClick={()=>setCurrentAction(Object.keys(obj)[0])}>
                <img src={Object.values(obj)[0]} alt={Object.values(obj)[0]}/>
            </div>
            <p>{`${Object.keys(obj)[0]} `}</p>
        </div>  
    )


    return(
        <div className="DetailsPagePanelDetailsActions">
            <div className="DetailsPagePanelDetailsActionsTitle">
                <p>Action Buttons</p>
            </div>
            <div className="DetailsPagePanelDetailsActionsBtnsContainer">
                {actionBtns}
            </div>
        </div>
    )
}

export default DetailsPagePanelDetailsActions