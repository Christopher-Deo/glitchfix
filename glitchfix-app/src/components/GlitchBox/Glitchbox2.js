// React imports
import React, { useState, useEffect } from 'react'
import axios from 'axios';
// Material UI / Other Dependencies imports
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid'
// Local imports
import IssueForm from '../IssueForm/IssueForm';
import EditIssueForm from '../EditForm/EditIssueForm';
import './GlitchBox.css';
import { alignProperty } from '@mui/material/styles/cssUtils';
const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';


//this is the container for the details of each new issue
const GlitchBox = (props, Issue) => {
    //state variables for editing form
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        console.log('props changed = ', props.Issues);
        // eslint-disable-next-line
    }, [props.update]);

    //setting the delete function
    const deleteIssue = async () => {
        await axios.delete(endpoint + 'issues/' + props.Issue.id);
        props.update();
    };

    //setting the update function
    const updateIssue = async () => {
        await axios.put(endpoint + 'issues/' + props.Issue);
        props.update();
    };


    return (
        <div className='container' key={uuidv4()}>

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
        
                
                <div className='glitchId'
                    data-text='ID: 123456789'
                        style={{
                            padding: '5px',
                            color: '#161925'
                        }}>
                             <strong>Id:</strong> {props.Issue.id}
                    </div>
                
                        
                <div className='projectName'
                    data-text='Project Name: GlitchFix'
                        style={{
                            padding: '.25rem',
                            color: '#161925',
                            // marginTop: '.5rem'
                        }}>
                    <strong>Project:</strong>  
                </div>
        

                <div className='glitchDate'
                    data-text='Date Found: 10/10/2021'>
                    <strong>Opened:</strong>{props.Issue.date}
                </div>
                
                <div className='glitchError' 
                    data-text='Error Message: Error: Cannot find module "react-router-dom"'>
                        <strong>Error Message:</strong>{props.Issue.message}
                </div>

                <div className='glitchSeverity' 
                    data-text='Severity: High'>
                        <strong>Severity:</strong> {props.Issue.severity}
                </div>
                
                <div className='glitchDescription' 
                    data-text='glitch description'>
                        <strong>Description:</strong>    {props.Issue.description}
                    </div>
                
                    <div className='glitchAssignedTo' 
                        data-text='Assigned To: John Doe'>
                            <strong>Assigned To: </strong>{props.Issue.assignment}
                    </div>
        
                    <div className='status'>
                       <strong>Status: </strong> {props.Issue.status}
                    </div>
        
                    <div className='buttons'>
                    <span className='editBtn' style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <button className='editBtn' 
                            style={{
                             // backgroundColor: '#F1D302',
                                border: '1px solid #161925',
                                borderRadius: '0.75rem',
                                marginBottom: '0.5rem',
                                }}
                                    onClick={() =>
                                        setIsEditing(!isEditing)
                                    }>
                                    Edit
                        </button>
                    </span>

                    <span className='' style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <button className='deleteBtn' style={{
                            // backgroundColor: '#F1D302',
                            border: '1px solid #161925',
                            borderRadius: '0.75rem',
                            marginBottom: '0.5rem',
                        }} onClick={deleteIssue}>
                            Delete
                        </button>
                    </span>
                </div>
            </Box>
            {isEditing && <EditIssueForm Issue={props.Issue} update={props.update} />}
            </div>
            
        
            
    )
    // return null;
}

export default GlitchBox
