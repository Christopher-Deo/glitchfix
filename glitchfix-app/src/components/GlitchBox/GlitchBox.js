// React imports
import React, { useState, useEffect } from 'react'

// Material UI / Other Dependencies imports
import Box from '@mui/material/Box';

import IssueForm from '../IssueForm/IssueForm';
// Local imports




const GlitchBox = () => {
  return (
    <div className='glitchBox'>
        <Box className="test" sx={{
            backgroundColor: '#FDFFFC',
            borderRadius: '0.5rem',
            border: '2px solid #C1292E',
            boxShadow: '0 0 0 1px #161925, 0 4px 11px 0 #161925',
            color: '#161925',
            margin: '1rem',
            // display: 'flex',
            // flexDirection: 'column',
            //   justifyContent: 'space-around',
          }}>
            <div className='glitchBoxContent'> 
                <span className='glitchId' data-text='ID: 123456789'
                    style={{ padding: '5px', color: '#161925' }}>ID: {/*${Glitch.id}`*/}</span>
                <span className="glitchStatus"><button className="statusBtn"
                    style={{
                        backgroundColor: '#F1D302',
                        border: '2px solid #C1292E',
                        borderRadius: '0.25rem',
                        marginTop: '.25rem',
                    }}>Open</button>
                </span>
            </div>
            <div className='glitchBoxContent'>
                <div className='glitchName' data-text='Project Name: GlitchFix'
                    style={{
                        padding: '5px',
                        color: '#161925',
                        marginTop: '.5rem'
                    }}>
                    Project Name: {/*${Glitch.name}`*/}
                </div>
                    <span className='glitchDate' data-text='Date Found: 10/10/2021'>Date Opened:11/29/2022</span>
              
              
              </div>
                  
      </Box>
    </div>
  )
}

export default GlitchBox
