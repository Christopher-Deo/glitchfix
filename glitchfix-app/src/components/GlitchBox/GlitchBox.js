// React imports
import React, { useState, useEffect } from 'react'

// Material UI / Other Dependencies imports
import Box from '@mui/material/Box';

import IssueForm from '../IssueForm/IssueForm';
// Local imports


//this is the container for the details of each new issue

const GlitchBox = (props, Issue ) => {
  
  return (
    <div className='glitchBox'>
        <Box className="test" sx={{
            backgroundColor: '#FDFFFC',
            borderRadius: '1rem',
            border: '2px solid #C1292E',
            boxShadow: '3px 3px 3px 3px #161925',
            color: '#161925',
            margin: '1rem 1rem 1rem 1rem',
            display: 'flex',
            flexDirection: 'column',
              justifyContent: 'space-around',
          }}>
              <div className='glitchBoxContent' style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '.25rem' }}> 
          <span className='glitchId' data-text='ID: 123456789'
            style={{ padding: '5px', color: '#161925' }}>Id: {props.Issue.id}</span>
                
            </div>
            <div className='glitchBoxContent' style={{display:'flex', justifyContent:'space-evenly', marginTop:'.5rem'}}>
                <span className='glitchName' data-text='Project Name: GlitchFix'
                    style={{
                        padding: '.25rem',
                        color: '#161925',
                        // marginTop: '.5rem'
                      }}>
                    Project: {props.Issue.projectName}
                </span>
                    <span className='glitchDate' data-text='Date Found: 10/10/2021'><strong>Opened:</strong>11/29/2022</span>
            </div>
              <div className='glitchBoxContent' style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginTop: '.5rem'
              }}>
                  <h6>ErrorMessage</h6>
                <span className='glitchError' data-text='Error Message: Error: Cannot find module "react-router-dom"'>
                  {props.Issue.message}
                  </span>
                  <span className='glitchSeverity' data-text='Severity: High'>Severity: {props.Issue.severity}</span>
            </div>
            <div className='glitchBoxContent' style={{
                  display: 'block',
                  marginLeft: '.5rem',
                  justifyContent: 'center',
                  flexWrap: "wrap",
                  marginTop: '.5rem',
                  color: '#161925',
              }}>
                  <h6>Description</h6>
                <span className='glitchDescription' data-text='glitch description'>
                  {props.Issue.description}
                </span>
            </div>
              <div className='glitchBoxContent'
                style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '.5rem'
                }}>
                  <span className='glitchAssignedTo' data-text='Assigned To: John Doe'>Assigned To: {props.Issue.assignment}</span>
                  <span className='updateBtn' style={{ display: 'flex', justifyContent: 'flex-end' }}><button className='statusBtn' style={{
                    backgroundColor: '#F1D302',
                    border: '1px solid #161925',
                    borderRadius: '0.75rem',
                    marginBottom: '0.5rem',      
                      }}>Open</button></span>
              </div>    
      </Box>
    </div>
  )
}

export default GlitchBox
