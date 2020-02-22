import React from 'react'
import {SubmitButton} from './signUpForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SecondaryHeader from './SecondaryHeader'

const CEButton = styled.a`
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

function CreateEvents(props) {

    const handleChange = e => {
        props.setFormValues({
            ...props.formValues,
            [e.target.name]: e.target.value
          })
    }

    return (
      <div className="create-events">
        <SecondaryHeader />
        <form>
            <label for="firstName">First Name</label>
            <input onChange={handleChange} name="firstName" value={props.formValues.firstName} type="text" placeholder="First Name" />
            <label for="password">Password</label>
            <input onChange={handleChange} name="password" value={props.formValues.password} type="password" placeholder="Password" />
            <label for="email">Email</label>
            <input onChange={handleChange} name="email" value={props.formValues.email} type="text" placeholder="Email" />
            <div className="create-event-buttons">
              <Link to="/">
              <CEButton>Cancel</CEButton>
              </Link>
              <CEButton type="submit">Create</CEButton>
            </div>
        </form>
      </div>
    );
  }
  


  export default CreateEvents;