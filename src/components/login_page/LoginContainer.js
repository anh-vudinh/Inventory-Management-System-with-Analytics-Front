import React from 'react'
import LoginPanelForm from './LoginPanelForm'
import LoginPanelImage from './LoginPanelImage'

function LoginContainer({isLoggedIn, setIsLoggedIn, BACK_END_URL, currentUser, setCurrentUser}){

    return(
        <div className="LoginContainer">
            <LoginPanelImage
                isLoggedIn={isLoggedIn}
            />
            <LoginPanelForm
                BACK_END_URL={BACK_END_URL}
                currentUser={currentUser} setCurrentUser={setCurrentUser}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default LoginContainer