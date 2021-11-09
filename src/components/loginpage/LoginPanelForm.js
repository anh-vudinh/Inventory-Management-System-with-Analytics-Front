import React, { useState } from 'react'
import PersonIcon from '../../assets/PersonIcon.png'
import LoginPanelFormFooter from './LoginPanelFormFooter'
import Cookies from 'universal-cookie';

function LoginPanelForm({BACK_END_URL, currentUser, setCurrentUser}){

    const formDataDefault = {
        company: "",
        username: "",
        password: "",
        remember: false
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [errorMessage, setErrorMessage] = useState("")

    function onChangeFormInput(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function onClickLoginSubmit(){
        if(formData.company === "" || formData.username === "" || formData.password === "") return setErrorMessage("Fill Out All Empty Fields");
        
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
                resp.json()
                .then(user=> {
                    console.log(user)
                    setCurrentUser(user)
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
                        <input type="text" placeholder="COMPANY" name="company" onChange={onChangeFormInput}/>
                        <input type="text" placeholder="USERNAME" name="username" onChange={onChangeFormInput}/>
                        <input type="password" placeholder="PASSWORD" name="password" onChange={onChangeFormInput}/>
                        <div className="RememberMe">
                            <input type="checkbox" name="remember"/> 
                            <label>Remember Me</label>   
                        </div>
                    </form>
                    <button className="LoginPanelFormSubmit" onClick={onClickLoginSubmit}>LOGIN</button>
                    <div className="LoginPanelFormErrors">
                        <p>{errorMessage}</p>
                    </div>
                </div>
            </div>

            <LoginPanelFormFooter/>
        </div>
    )
}

export default LoginPanelForm