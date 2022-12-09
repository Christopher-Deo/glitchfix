// React imports
import React, { useState, useEffect } from 'react';
// Axios and other dependency imports
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';

// Local imports
import Severity from '../../components/Severity';
import '../../components/IssueForm/IssueForm.css';
// global variables
const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';




const IssueForm2 = (props) => {
    // setting state for the form
    const [projectName, setProjectName] = useState('');
    const [message, setMessage] = useState(false); //listing of the error message from project's code
    const [description, setDescription] = useState(''); //description of the error (how, where, when, etc.)
    const [severity, setSeverity] = useState(''); // low, medium, high, critical
    const [status, setStatus] = useState(''); //open, closed, in progress
    const [assignment, setAssignment] = useState(''); //assigned to who
    const [date, setDate] = useState(''); //date issue discovered
    const [id, setId] = useState(''); // unique uuid for each issue

    // setting up the POST request
    const postFormData = async () => {
        const newIssue = {
            name: projectName,
            error: message,
            description: description,
            severity: severity,
            assignment: assignment,
            status: status,
            date: date,
            message: message,
            id: { uuidv4 },
        };
        // making the POST request
        const { data } = await axios.post(endpoint + 'issues', newIssue);
        console.log('endpoint data for POST = ', data);
        props.getAllIssues();
    };

    // setting up the GET request
    const fetchIssues = async () => {
        const { data } = await axios.get(endpoint + 'issues');
        console.log('endpoint data = ', data);
    };
    
    return (
        <Box className='issueForm'>
            <h2>Enter Glitch Details</h2>
          
            <Form >
              <input type="date" name="date" id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)} />
              <label htmlFor="date">Date</label>

            <label htmlFor="projectName">Project Name</label>
            <input type="text" name="projectName" id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)} />
              
            <label htmlFor="message">Error Message</label>
              <input type="text" name="Error" id="Error"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} />
              
                {/* <label htmlFor="severity">Severity</label>
              <input type="radio" name="Low" id="low"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)} />
              <label htmlFor="severity">Low</label>
              <input type="radio" name="Medium" id="medium"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)} />
              <label htmlFor="severity">Medium</label>
              <input type="radio" name="High" id="high"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)} />    
              <label htmlFor="severity">High</label>  
              <input type="radio" name="Critical" id="critical"    
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)} />    
    <label htmlFor="severity">Critical</label> */}
                
                <Severity />
              
              <label htmlFor="status">Status</label>
              <input type="radio" name="open" id="open"             
                  value={status}
                  onChange={(e) => setStatus(e.target.value)} />
              <label htmlFor="status">Open</label>
              <input type="radio" name="In Progress" id="inProgress"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)} />
              <label htmlFor="status">In Progress</label>
              <input type="radio" name="Closed" id="closed"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)} />
              <label htmlFor="status">Closed</label>        
            
              <label htmlFor="assignment">Assignment</label>
              <input type="radio" name="development" id="development"
                  value={assignment}
                  onChange={(e) => setAssignment(e.target.value)} />
              <label htmlFor="assignment">Development</label>
              <input type="radio" name="Testing" id="testing"
                  value={assignment}
                  onChange={(e) => setAssignment(e.target.value)} />
              <label htmlFor="assignment">Testing/QA</label>
              <input type="radio" name="production" id="production"
                  value={assignment}
                  onChange={(e) => setAssignment(e.target.value)} />
              <label htmlFor="assignment">Production</label>
              <input type="radio" name="other" id="other"
                  value={assignment}
                  onChange={(e) => setAssignment(e.target.value)} />
              <label htmlFor="assignment">Other</label>

              <label htmlFor="date">Date</label>
              
              <Button variant="primary" type="button" onClick={postFormData}>
                  Submit
              </Button>
              
                  
              
                
              

              
        </Form>          
    </Box>
  )
}

export default IssueForm2
