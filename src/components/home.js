import React from 'react';
import styled from 'styled-components'

const CreateEvent = styled.a`
    background-color: #9326ff;
    color: white;
    font-size: 2.4rem;
    padding: 25px 300px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 8px;
    &:hover {
        background-color: #7c00f2;
    }
`

function Home() {

    return (
      <div className="home">
        <h1 className='big-logo'>EVENTICO</h1>
        <p className='sub-text'>Invite friends for a get together. No sign up. No strings attached.</p>
        <CreateEvent>Create Event</CreateEvent>
        <div className='lower-path'>
            <div></div>
        </div>
      </div>
    );
  }
  
  export default Home;
  