import './App.css';
import React, {useState} from 'react';
import LoginContainer from './components/loginpage/LoginContainer';

function App() {

  const BACK_END_URL = "http://localhost:9292"
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <LoginContainer
        isLoggedIn={isLoggedIn} setIsLoggedIN={setIsLoggedIn}
        BACK_END_URL={BACK_END_URL}
      />
    </div>
  );
}

export default App;
