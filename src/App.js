import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import {Home} from './components/home';
import SignUp from './components/signUp';

function App() {

  const [showSignUp, setShowSignUp] = useState(false)
  const [toggleSign, setToggleSign] = useState(true)
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: ""
  })

  const toggle = () => {
    setShowSignUp(!showSignUp)
  }


  return (
    <div className="App">
      <Header toggle={toggle} />
      <Home />
      {
        showSignUp ? 
        <SignUp formValues={formValues} setFormValues={setFormValues} toggleSign={toggleSign} setToggleSign={setToggleSign} toggle={toggle}/>
        : null
      }
    </div>
  );
}

export default App;
