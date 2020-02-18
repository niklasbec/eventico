import React from 'react';
import styled from 'styled-components'

function SignUp(props) {

    return (
      <div className='color-blur'>
      <div className="signup">
      <img onClick={props.toggle} className='close-form' src='https://image.flaticon.com/icons/svg/70/70287.svg' />
        <h1>Sign Up for Eventico</h1>
      </div>
      </div>
    );
  }
  
  export default SignUp;
