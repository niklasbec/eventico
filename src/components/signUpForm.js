import React from 'react';
import styled from 'styled-components'

const SubmitButton = styled.a`
background: #8e2de2; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color: white;
font-size: 1rem;
padding: 6px 25px;
cursor: pointer;
font-weight: 600;
border-radius: 8px;
&:hover {
    background-position: right center;
}
`

function SignUpForm(props) {

    const handleChange = e => {
        props.setFormValues({
            ...props.formValues,
            [e.target.name]: e.target.value
          })
    }

    return (
      <div className="sign-up-form">
        <form>
            <label for="username">Username</label>
            <input onChange={handleChange} name="username" value={props.formValues.username} type="text" placeholder="Username" />
            <label for="password">Password</label>
            <input onChange={handleChange} name="password" value={props.formValues.password} type="password" placeholder="Password" />
            <label for="email">Email</label>
            <input onChange={handleChange} name="email" value={props.formValues.email} type="text" placeholder="Email" />
            <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </div>
    );
  }
  


  export {SignUpForm, SubmitButton};