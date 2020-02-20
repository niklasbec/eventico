import React from 'react';
import {SubmitButton} from './signUpForm'

function SignInForm(props) {

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = e => {
        props.setFormValues({
            ...props.formValues,
            [e.target.name]: e.target.value
          })
    }

    return (
      <div className="sign-in-form">
        
        <form onSubmit={handleSubmit}>
            <label for="username">Username</label>
            <input onChange={handleChange} name="username" value={props.formValues.username} type="text" placeholder="Username" />
            <label for="password">Password</label>
            <input onChange={handleChange} name="password" value={props.formValues.password} type="password" placeholder="Password" />
            <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </div>
    );
  }
  


  export default SignInForm;
  