import React from 'react';
import {SignUpForm} from './signUpForm';
import SignInForm from './signInForm';

function SignUp(props) {
  
  const toggleTrue = () => {
    props.setToggleSign(true)
    document.getElementById("signIn").style.color = "rgba(141, 3, 141)";
    document.getElementById("signUp").style.color = "black";
  }

  const toggleFalse = () => {
    props.setToggleSign(false)
    document.getElementById("signIn").style.color = "black";
    document.getElementById("signUp").style.color = "rgba(141, 3, 141)";
  }

    return (
      <div className='color-blur'>
      <div className="signup">
        <div className='flex-div'>
          <h3 className='sign-heading'>Sign Up for Eventico</h3>
          <img onClick={props.toggle} alt="an X to close" className='close-form' src='https://image.flaticon.com/icons/svg/70/70287.svg' />
        </div>
        <p>Signing in lets you access a list of all your events and easily manage them!</p>
        <div className="sign-up-in-select">
          <h3 id="signIn" onClick={toggleTrue} className='cursor-pointer'>Sign In</h3>
          <h3 id="signUp" onClick={toggleFalse} className='cursor-pointer'>Sign Up</h3>
        </div>
        {props.toggleSign === true ? 
          <SignInForm formValues={props.formValues} setFormValues={props.setFormValues}/> :
          <SignUpForm formValues={props.formValues} setFormValues={props.setFormValues}/>
      }
    
      </div>
      </div>
    );
  }
  
  export default SignUp;
