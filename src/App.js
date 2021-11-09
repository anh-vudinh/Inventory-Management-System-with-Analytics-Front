import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import LoginContainer from './components/login_page/LoginContainer';
import CompanySelectContainer from './components/company_select_page/CompanySelectContainer';

function App() {

  const BACK_END_URL = "https://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

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
            currentUser={currentUser}
          />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
