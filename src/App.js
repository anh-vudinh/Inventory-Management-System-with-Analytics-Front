import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import LoginContainer from './components/login_page/LoginContainer';
import CompanySelectContainer from './components/company_select_page/CompanySelectContainer';

function App() {

  const BACK_END_URL = "https://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    const headers = {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      redirect: 'follow',
      mode: "cors",
      headers: {
          'Content-Type': 'application/json'
      }
  }

    fetch(`${BACK_END_URL}/api/auto_login`, headers)
    .then(resp => {
        if(resp.ok){
            resp.json().then(data => {
              if (data === null) return;
              console.log(data)
              setCurrentUser(data.username)
              setIsLoggedIn(true)
            })
        }
    })
  },[])
  

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <LoginContainer
            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
            currentUser={currentUser} setCurrentUser={setCurrentUser}
            BACK_END_URL={BACK_END_URL}
          />
        </Route>

        <Route path="/company_select">
          <CompanySelectContainer
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
          />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
