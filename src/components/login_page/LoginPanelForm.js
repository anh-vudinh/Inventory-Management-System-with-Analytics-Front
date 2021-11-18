import React, { useState } from 'react'
import PersonIcon from '../../assets/PersonIcon.png'
import LoginPanelFormFooter from './LoginPanelFormFooter'

function LoginPanelForm({loginErrorMessage, setLoginErrorMessage, history, BACK_END_URL, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn}){

    const formDataDefault = {
        company: "",
        username: "",
        password: "",
        remember: false
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [errorMessage, setErrorMessage] = useState("")

    function onChangeFormInput(e){
        if (e.target.name === "remember") 
            return setFormData({...formData, [e.target.name]: e.target.checked});
        
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function onClickLoginSubmit(){
        setLoginErrorMessage("")
        if(formData.company === "" || formData.username === "" || formData.password === "") return setLoginErrorMessage("Fill Out All Empty Fields");

        const headers = {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        }

        fetch(`${BACK_END_URL}/api/login`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setCurrentUser(data.username)
                    setIsLoggedIn(true)
                    history.push("/company_select")
                })
            }else{
                resp.json().then(message => {
                    setLoginErrorMessage(message.error)
                })
            }
        })
    }

    return(
        <div className="LoginPanelForm">

            <div className="LoginPanelFormSecOuter">
                <div className="LoginPanelFormSecInner">
                    <div className="LoginPanelIcon">
                        <img src={PersonIcon} alt="person logo"/>
                    </div>
                    <form>
                        <input type="text" placeholder="COMPANY" name="company" value={formData.company} onChange={onChangeFormInput}/>
                        <input type="text" placeholder="USERNAME" name="username" value={formData.username} onChange={onChangeFormInput}/>
                        <input type="password" placeholder="PASSWORD" name="password" value={formData.password} onChange={onChangeFormInput}/>
                        <div className="RememberMe">
                            <input type="checkbox" name="remember" value={formData.remember} checked={formData.remember} onChange={onChangeFormInput}/> 
                            <label>Remember Me</label>   
                        </div>
                    </form>
                    <button className="LoginPanelFormSubmit" onClick={onClickLoginSubmit}>LOGIN</button>
                    <div className="LoginPanelFormErrors">
                        <p>{loginErrorMessage}</p>
                    </div>
                </div>
            </div>

            <LoginPanelFormFooter/>
        </div>
    )
}

export default LoginPanelForm