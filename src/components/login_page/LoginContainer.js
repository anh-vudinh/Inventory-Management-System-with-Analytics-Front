import React from 'react'
import LoginPanelForm from './LoginPanelForm'
import LoginPanelImage from './LoginPanelImage'

function LoginContainer({loginErrorMessage, setLoginErrorMessage, history, isLoggedIn, setIsLoggedIn, BACK_END_URL, currentUser, setCurrentUser}){

    return(
        <div className="LoginContainer">
            <LoginPanelImage/>
            
            <LoginPanelForm
                BACK_END_URL={BACK_END_URL}
                currentUser={currentUser} setCurrentUser={setCurrentUser}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                history={history}
                loginErrorMessage={loginErrorMessage} setLoginErrorMessage={setLoginErrorMessage}
            />
        </div>
    )
}

export default LoginContainer