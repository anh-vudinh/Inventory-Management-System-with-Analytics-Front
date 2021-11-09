import './App.css';
import React, {useState} from 'react';
import LoginContainer from './components/loginpage/LoginContainer';

function App() {

  const BACK_END_URL = "https://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  return (
    <div className="App">
      <LoginContainer
        isLoggedIn={isLoggedIn} setIsLoggedIN={setIsLoggedIn}
        currentUser={currentUser} setCurrentUser={setCurrentUser}
        BACK_END_URL={BACK_END_URL}
      />
    </div>
  );
}

export default App;
