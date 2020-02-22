import React from 'react';
import styled from 'styled-components'

const SignUpButtonSecondary = styled.a`
  margin-right: 5vw;
  padding: 10px 15px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 1.3rem;
  color: #9326ff;
  cursor: pointer;
  float: right;
  margin-top: 30px;
  color: white;
`

function SecondaryHeader(props) {

    return (
      <div id='header-secondary' className="header-secondary">
        <SignUpButtonSecondary className='pulse-min' onClick={props.toggle}>Sign In / Sign Up</SignUpButtonSecondary>
      </div>
    );
  }
  


  export default SecondaryHeader;
  