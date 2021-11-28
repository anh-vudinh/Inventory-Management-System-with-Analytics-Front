import React, {useState, useEffect} from 'react'
import Overlay from '../../Overlay'

function DetailsPagePanelDetailsActionsEnableDisableUser({selectedEmployee, setSelectedEmployee, selectedCompany, setCurrentAction, BACK_END_URL}){

    const [userAccount, setUserAccount] = useState({is_disabled: false, username:""})

    const [errorMessage, setErrorMessage] = useState("")
    
    useEffect(()=>{
        const headers = {
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BACK_END_URL}/api/users/${selectedEmployee.id}`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setUserAccount(data)
                })
            }else{
                resp.json().then(message => setErrorMessage(message.error))
            }
        })
    },[])

    function handleSubmit(){
        if(selectedEmployee.id === 0) return;
        setErrorMessage("")
    
        const dataToSend = {
            employee_id: selectedEmployee.id,
            company_id: selectedCompany.id,
            is_disabled: !userAccount.is_disabled
        }

        const headers = {
            method: "PATCH",
            withCredentials: true,
            credentials: 'include',
            redirect: 'follow',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }

        fetch(`${BACK_END_URL}/api/users/${selectedEmployee.id}`, headers)
        .then(resp => {
            if(resp.ok){
                resp.json().then(data => {
                    setCurrentAction("")
                    setUserAccount(data)
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
            <div className="DetailsPagePanelDetailsActionsEnableDisableUserContainer">
                <div className="DetailsPagePanelDetailsActionsEnableDisableUser">
                    <div className="DetailsPagePanelDetailsActionsEnableDisableUserError">
                        {userAccount.username === ""?
                            <p>{errorMessage}</p>
                        : 
                            <p>{`${selectedEmployee.first_name}'s account ( ${userAccount.username} ) is currently ${userAccount.is_disabled? "Disabled" : "Enabled"}`}</p>
                        }
                    </div>
                    <div className="DetailsPagePanelDetailsActionsEnableDisableUserSubmit">
                        {errorMessage === ""? 
                            <button onClick={handleSubmit}>{userAccount.is_disabled? "Enable Account" : "Disable Account"}</button>
                        :
                            <button onClick={()=>setCurrentAction("Create User Login")}>CREATE USER</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsPagePanelDetailsActionsEnableDisableUser