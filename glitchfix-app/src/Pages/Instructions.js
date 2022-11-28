import React from 'react'
import Box from '@mui/material/Box';

import BottomNav from '../components/BottomNav/BottomNav';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const Instructions = () => {
  return (
      <>
        <Header />
            <Box sx={{
                width: '75%',
              height: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'fixed',
              zIndex: 100,
              backgroundColor: '#FDFFFC',
              borderRadius: '1rem',
              border: '1px solid #C1292E',
              boxShadow: '5px 5px 10px #161925',
              marginTop: '5rem',
              color: '#161925',
                
          }}>
              <h1>Instructions</h1>
              <p className='instructions mt-2' >
                  Welcome to GlitchFix! This is a simple app that allows
                  you to submit a bug report to a developer for investigation and resolution.
                  To get started, simply fill out the "Enter Glitch Details" form on the home page and click the submit button.
                  A new issue will be created and shown on the "View Glitches" page. From there, you can click on the issue to 
                  view additional details as well as update, delete, or close the issue.  Click the "Get Started" button to continue.
              </p>
            </Box>
            <Footer />
      </>
  )
}

export default Instructions
