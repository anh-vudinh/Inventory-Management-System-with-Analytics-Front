import React, {useState} from 'react'
import Overlay from '../../Overlay'

function DetailsPagePanelDetailsActionsCreateUser({selectedEmployee, setSelectedEmployee, selectedCompany, setCurrentAction, BACK_END_URL}){

    const [formData, setFormData] = useState({
        username: "", 
        password: "", 
        confirm_password: ""
    })

    const [errorMessage, setErrorMessage] = useState("")
    
    function handleInputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(){
        if(selectedEmployee.id === 0) return;
        if(formData.username === "") return setErrorMessage("Username Cannot Be Blank");
        if(formData.password === "") return setErrorMessage("Password Cannot Be Blank");
        if(formData.password !== formData.confirm_password) return setErrorMessage("Passwords Not Matching");
        setErrorMessage("")

        const dataToSend = {
            employee_id: selectedEmployee.id,
            company_id: selectedCompany.id,
            username: formData.username,
            password: formData.password
        }

        const headers = {
            method: "POST",
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }

        fetch(`${BACK_END_URL}/api/users`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setCurrentAction("")
                })
            }else{
                resp.json().then(message => setErrorMessage(message.error))
            }
        })
    }

    return(
        <>
            <Overlay
                setCurrentAction={setCurrentAction}
            />
            <div className="DetailsPagePanelDetailsActionsCreateUserContainer">
                <div className="DetailsPagePanelDetailsActionsCreateUser">
                    <div className="DetailsPagePanelDetailsActionsCreateUserForm">
                        <form>
                            <input type="text" name="username" value={formData.username} placeholder="Username" onChange={handleInputChange}/>
                            <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleInputChange}/>
                            <input type="password" name="confirm_password" value={formData.confirm_password} placeholder="Confirm Password" onChange={handleInputChange}/>
                        </form>
                    </div>
                    <div className="DetailsPagePanelDetailsActionsCreateUserError">
                        <p>{errorMessage}</p>
                    </div>
                    <div className="DetailsPagePanelDetailsActionsCreateUserSubmit">
                        <button onClick={handleSubmit}>CREATE USER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPagePanelDetailsActionsCreateUser