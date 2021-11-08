import React from 'react'
import LoginPanelForm from './LoginPanelForm'
import LoginPanelImage from './LoginPanelImage'
import TreeIcon from '../../assets/TreeIcon.png'

function LoginContainer({isLoggedIn, setIsLoggedIn, BACK_END_URL}){

    return(
        <div className="LoginContainer">
            {/* <div className="LoginPanelFormLogoSec">
                <div className="LoginPanelFormLogo">
                    <img src={TreeIcon} alt="loginLogo"/>
                </div>
                <div className="LoginPanelFormTitle">
                    <p>Management</p>
                    <p>Solutions</p>
                </div>
            </div> */}

            <LoginPanelImage
                isLoggedIn={isLoggedIn}
            />
            <LoginPanelForm
                BACK_END_URL={BACK_END_URL}
            />
        </div>
    )
}

export default LoginContainer