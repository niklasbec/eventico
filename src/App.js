import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import {Home, CreateEvent} from './components/home';
import SignUp from './components/signUp';
import { Route } from 'react-router-dom'
import CreateEvents from './components/createEvents'

function App() {

  const [showSignUp, setShowSignUp] = useState(false)
  const [toggleSign, setToggleSign] = useState(true)
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
    firstName: ""
  })

  const toggle = () => {
    setShowSignUp(!showSignUp)
  }


  return (
    <div className="App">
      <Route exact path="/" render={(props) => <Home {...props} toggle={toggle} />} />
      {
        showSignUp ? 
        <SignUp formValues={formValues} setFormValues={setFormValues} toggleSign={toggleSign} setToggleSign={setToggleSign} toggle={toggle}/>
        : null
      }
      <Route exact path="/create" render={(props) => <CreateEvents {...props} formValues={formValues} setFormValues={setFormValues} />}  />
    </div>
  );
}

export default App;
