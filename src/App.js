import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory} from "react-router-dom";
import LoginContainer from './components/login_page/LoginContainer';
import CompanySelectContainer from './components/company_select_page/CompanySelectContainer';
import DetailPageContainer from './components/detail_page/DetailPageContainer';
import CreateCompanyContainer from './components/create_company_page/CreateCompanyContainer';
import LoadingPage from './components/LoadingPage';
import Toolbar from './components/Toolbar';

function App() {

  const BACK_END_URL = "https://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  const [selectedCompany, setSelectedCompany] = useState({name:""})
  const history = useHistory();


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
              history.push("/company_select")
            })
        }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setIsLoggedIn(false)
      setCurrentUser("")
      history.push("/")
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
            history={history}
          />
        </Route>

        <Route path="/company_select">
          <CompanySelectContainer
            logoutSession={logoutSession}
            setIsLoading={setIsLoading}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            BACK_END_URL={BACK_END_URL}
            selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany}
            history={history}
          />
        </Route>

        <Route path="/detail_page/:id">
          <DetailPageContainer
            selectedCompany={selectedCompany}
            history={history}
          />
        </Route>

        <Route path="/create_company">
          <CreateCompanyContainer
            BACK_END_URL={BACK_END_URL}
            setIsLoading={setIsLoading}
            logoutSession={logoutSession}
            isLoggedIn={isLoggedIn}
            history={history}
          />
        </Route>

      </Switch>

      {isLoggedIn? 
        <Toolbar
          history={history}
          logoutSession={logoutSession}
        />
      : null}

      <LoadingPage
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
