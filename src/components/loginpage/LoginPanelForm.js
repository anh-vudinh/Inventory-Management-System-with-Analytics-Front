import React, { useState } from 'react'
import PersonIcon from '../../assets/PersonIcon.png'

function LoginPanelForm({BACK_END_URL}){

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
        if(formData.company === "" || formData.username === "" || formData.password === "") return setErrorMessage("Fill out All Empty Fields");
        // let bearer = 'Bearer ' + bearer_token;
        
        const headers = {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            agent: null,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': formData
            },
            timeout: 5000
        }

        fetch(`${BACK_END_URL}/sessions`, headers)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return(
        <div className="LoginPanelForm">
            <div className="LoginPanelFormSec">
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
                <div className="LoginPanelFormErrors">{errorMessage}</div>
            </div>
        </div>
    )
}

export default LoginPanelForm