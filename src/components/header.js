import React from 'react';
import styled from 'styled-components'

const SignUpButton = styled.a`
  margin-right: 5vw;
  padding: 10px 15px;
  border: 2px solid #9326ff;
  border-radius: 5px;
  font-size: 1.3rem;
  color: #9326ff;
  cursor: pointer;
  float: right;
  margin-top: 30px;
`

function Header(props) {

    return (
      <div id='header' className="header">
        <SignUpButton className='pulse-min' onClick={props.toggle}>Sign In / Sign Up</SignUpButton>
      </div>
    );
  }
  
  export default Header;
  