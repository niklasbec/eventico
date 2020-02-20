import React from 'react';
import styled from 'styled-components'

const CreateEvent = styled.a`
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    font-size: 2rem;
    padding: 15px 100px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 8px;
    &:hover {
        background-position: right center;
    }
`

function Home() {

    return (
      <div id='home' className="home">
        <h1 className='big-logo'>EVENTICO</h1>
        <p className='sub-text'>Invite friends for a get together. No sign up. No strings attached.</p>
        <CreateEvent className='pulse'>Create Event</CreateEvent>
        <div className='lower-path'>
            <div><p>1. Create a Link</p></div>
        </div>
      </div>
    );
  }
  
  export {Home, CreateEvent};
  