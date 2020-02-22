import React from 'react';
import styled from 'styled-components'
import Header from './header';
import { Link } from 'react-router-dom'

const CreateEvent = styled.a`
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    font-size: 2rem;
    padding: 15px 100px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 8px;
    &:hover {
        background-position: right center;
    }
`

function Home(props) {

  console.log(props.toggle)

    return (
      <div id='home' className="home">
        <Header toggle={props.toggle} />
        <h1 className='big-logo'>EVENTICO</h1>
        <p className='sub-text'>Invite friends for a get together. No sign up. No strings attached.</p>
        <Link to="/create">
        <CreateEvent className='pulse'>Create Event</CreateEvent>
        </Link>
        <div className='lower-path'>
            <div><p>1. Create a Link</p></div>
        </div>
      </div>
    );
  }
  
  export {Home, CreateEvent};
  