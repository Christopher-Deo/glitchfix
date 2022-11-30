// React imports
import React, { useState, useEffect } from 'react'
// Material UI imports
import Box from '@mui/material/Box';
// Local imports
import BottomNav from '../components/BottomNav/BottomNav';


const Instructions = () => {
  return (
      <>
        <Box sx={{
          // width: '50rem',
          // height: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // position: 'fixed',
          // zIndex: 100,
          backgroundColor: '#FDFFFC',
          borderRadius: '1rem',
          border: '3px solid #C1292E',
          boxShadow: '5px 5px 10px #161925',
          margin: '1rem 2rem',
          color: '#161925',
          padding: '1rem',
                
          }}>
              <h1>Instructions</h1>
              <p className='instructions' >
                  Welcome to GlitchFix! This is a simple app that allows you to submit a bug report to a developer for investigation and resolution.</p>
        <p className='instructions' >          
                  To get started, simply fill out the "Enter Glitch Details" form on the home page and click the submit button.
                  A new issue will be created and shown on the "View Glitches" page. From there, you can click on the issue to 
          view additional details as well as update, delete, or close the issue. </p>
        <p className='instructions' >
          Click the "Get Started" button to continue.
        </p>
        <button type='button' className='btn btn-primary'>Get Started</button>
            </Box>
         
      </>
  )
}

export default Instructions
