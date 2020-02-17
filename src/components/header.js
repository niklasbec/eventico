import React from 'react';
import styled from 'styled-components'

const SignUpButton = styled.a`
  margin-right: 5vw;
  padding: 10px 20px;
  border: 3px solid #9326ff;
  border-radius: 5px;
  font-size: 25px;
  color: #9326ff;
  cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
  float: right;
  margin-top: 30px;
`

function Header() {

    return (
      <div className="header">
        <SignUpButton>Sign In / Sign Up</SignUpButton>
      </div>
    );
  }
  
  export default Header;
  