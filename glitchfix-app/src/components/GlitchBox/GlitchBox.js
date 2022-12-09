// React imports
import React, { useState, useEffect } from 'react'
// Material UI / Other Dependencies imports
import axios from 'axios';
import Box from '@mui/material/Box';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-pen-to-square } from '@fortawesome/free-solid-svg-icons'
import IssueForm from '../IssueForm/IssueForm';
// Local imports


const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';

//this is the container for the details of each new issue

const GlitchBox = (props, Issue) => {

  useEffect(() => {
    console.log('props changed = ', props.Issue);

    // eslint-disable-next-line
  }, [props.update]);

  // let deleteIssue = (e) => {
  //   e.parentElement.parentElement.remove();
  //   data.splice(e.parentElement.parentElement.id, 1);
  //   console.log(data);
  // }

  const deleteIssues = async (e) => {
    const { data } = await axios.delete(endpoint + 'issues', { data: { id: props.Issue.id } });
    // console.log('endpoint data = ', data);
    e.parentElement.parentElement.remove();

  };



  return (
    <div className='glitchBox' key={props.Issue.id}>
      <Box className="test" sx={{
        backgroundColor: '#FDFFFC',
        borderRadius: '1rem',
        border: '2px solid #C1292E',
        boxShadow: '3px 3px 3px 3px #161925',
        color: '#161925',
        margin: '1rem 1rem 1rem 1rem',
        display: 'flexbox',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <div className='glitchBoxContent' style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '.25rem' }}>
          <span className='glitchId' data-text='ID: 123456789'
            style={{ padding: '5px', color: '#161925' }}>Id: {props.Issue.id}</span>

        </div>
        <div className='glitchBoxContent' style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '.5rem' }}>
          <span className='glitchName' data-text='Project Name: GlitchFix'
            style={{
              padding: '.25rem',
              color: '#161925',
              // marginTop: '.5rem'
            }}>
            Project: {props.Issue.name}
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
          <h5>Description</h5>
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
          <span className='glitchStatus' data-text='Status: Open'>Status: {props.Issue.status}</span>
          <span className='editBtn'><button size="sm" type="button">Edit</button></span>
          <span className='deleteBtn'><button size="sm" type="button" onClick={deleteIssues}>Delete</button></span>
        </div>
      </Box>
    </div>
  )

}

export default GlitchBox