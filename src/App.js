import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route} from "react-router-dom";
import LoginContainer from './components/login_page/LoginContainer';
import CompanySelectContainer from './components/company_select_page/CompanySelectContainer';
import DetailPageContainer from './components/detail_page/DetailPageContainer';
import CreateCompanyContainer from './components/create_company_page/CreateCompanyContainer';

function App() {

  const BACK_END_URL = "https://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  const [selectedCompany, setSelectedCompany] = useState({name:""})

  useEffect(() => {
    const headers = {
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
              setCurrentUser(data.username)
              setIsLoggedIn(true)
            })
        }
    })
  },[])

  function logoutSession(){
    const headers = {
      method: 'DELETE',
      withCredentials: true,
      credentials: 'include',
      mode: "cors"
  }

    fetch(`${BACK_END_URL}/api/logout`, headers)
    .then(()=> {
      console.log("signout")
      setIsLoggedIn(false)
      setCurrentUser("")
    })
  }
  
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
            logoutSession={logoutSession}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            BACK_END_URL={BACK_END_URL}
            selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
          />
        </Route>

        <Route path="/detail_page/:id">
          <DetailPageContainer
            selectedCompany={selectedCompany}
          />
        </Route>

        <Route path="/create_company">
          <CreateCompanyContainer
            BACK_END_URL={BACK_END_URL}
            logoutSession={logoutSession}
            isLoggedIn={isLoggedIn}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
