// React imports
import React, { useState, useEffect } from 'react'
import axios from 'axios';
// Material UI / Other Dependencies imports
import Box from '@mui/material/Box';

// Local imports
import EditIssueForm from '../EditForm/EditIssueForm';
import './GlitchBox.css';
import { grid } from '@mui/system';

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

    return (
        <div key={props.Issue.id}>
            <Box className='glitchbox' sx={{
                backgroundColor: '#FDFFFC',
                borderRadius: '1rem',
                border: '2px solid #C1292E',
                boxShadow: '3px 3px 3px 3px #161925',
                color: '#161925',
                margin: '1rem 1rem 1rem 1rem',
                display: grid,
                justifyContent: 'space-evenly',
            }}>

                <div className='glitchId mt-3'
                    data-text='ID: 123456789'
                    style={{
                        padding: '5px',
                        color: '#161925',
                    }}>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Id:
                    </h6>
                    {props.Issue.id}
                </div>

                <div className='projectName mt-3'
                    data-text='Project Name: GlitchFix'
                    style={{
                        padding: '.25rem',
                        color: '#161925',
                    }}>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Project:
                    </h6>
                    {props.Issue.name}
                </div>

                <div className='glitchDate mt-3'
                    data-text='Date Found: 10/10/2021'
                    style={{
                        padding: '.25rem',
                        color: '#161925',
                    }}>
                    <h6 style={{ textDecoration: 'underline' }}>Date:</h6> {props.Issue.date}
                </div>

                <div className='glitchSeverity mt-3'
                    data-text='Severity: High'>
                    <h6>Severity:</h6>
                    {props.Issue.severity}
                </div>

                <div className='glitchAssignedTo mt-3'
                    data-text='Assigned To: John Doe'>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Assigned To:</h6>
                    {props.Issue.assignment}
                </div>

                <div className='status mt-3'>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Status:
                    </h6>{props.Issue.status}
                </div>

                <div className='glitchError mt-3'
                    data-text='Error Message: Error: Cannot find module "react-router-dom"'>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Error Message:</h6>
                    {props.Issue.message}
                </div>
                <div className='glitchDescription mt-3'
                    data-text='glitch description'>
                    <h6 style={{
                        textDecoration: 'underline'
                    }}>
                        Error Description
                    </h6>
                    {props.Issue.description}
                </div>

                <div className='glitchNotes mt-3 mb-3'
                    data-text='Notes'>
                    <h6 style={{
                        textDecoration: 'underline',
                    }}>
                        Progress Notes:
                    </h6>
                    {props.Issue.note}
                </div>

                <div className='buttons mt-3'
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // justifyContent: 'space-between',
                        padding: '0.5rem',
                        margin: '0.5rem',
                    }}>
                    <span className='editBtn ' >
                        <button className='editBtn'
                            style={{
                                backgroundColor: '#235789',
                                color: 'whitesmoke',
                                border: '2px solid #C1292E',
                                borderRadius: '0.25rem',
                                // marginBottom: '0.5rem',
                                boxShadow: '2px 1px 1px 1px #161925',
                            }}
                            onClick={() =>
                                setIsEditing(!isEditing)
                            }>
                            Edit
                        </button>
                    </span>

                    <span>
                        <button className='deleteBtn mt-2' style={{
                            backgroundColor: '#C1292E',
                            color: 'whitesmoke',
                            border: '1px solid #F1D302',
                            borderRadius: '.25rem',
                            // marginBottom: '0.5rem',
                            boxShadow: '2px 1px 1px 1px #161925',
                        }}
                            onClick={deleteIssue}>
                            Delete
                        </button>
                    </span>
                </div>
            </Box>
            {isEditing && <EditIssueForm Issue={props.Issue} update={props.update} />}
        </div>
    )
}

export default GlitchBox
