// React imports
import React, { useState, useEffect } from 'react';
// Axios and other dependency imports
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Local imports
import GlitchBox from '../GlitchBox/GlitchBox';
import '../../components/IssueForm/IssueForm.css';

// setting the api key to a global variable --- will need to change this to a .env file pre-build
const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';



function IssueForm() {   
    const [projectName, setProjectName] = useState('');
    const [message, setMessage] = useState(false); //listing of the error message from project's code
    const [description, setDescription] = useState(''); //description of the error (how, where, when, etc.)
    const [severity, setSeverity] = useState(''); // low, medium, high, critical
    const [status, setStatus] = useState(''); //open, closed, in progress
    const [assignment, setAssignment] = useState(''); //assigned to who
    const [date, setDate] = useState(''); //date issue discovered
    const [id, setId] = useState(''); // unique uuid for each issue


    // useEffect for verification of api calls
    useEffect(() => {
        fetchIssues();
        createGlitchBox();
       // eslint-disable-next-line
    }, [projectName, message, description, severity, status, assignment, date, id]);

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
            id: uuidv4(),
        };        
        const { data } = await axios.post(endpoint + 'issues', newIssue);
        console.log('endpoint data for POST = ', data);
        createGlitchBox();
    };

    const fetchIssues = async () => {
        const { data } = await axios.get(endpoint + 'issues');
        console.log('endpoint data = ', data);
    };

    const createGlitchBox = async ( ) => {
        
    };

    return (
        <div className='issue-form mt-1'>
            <h2>Enter Glitch Details</h2>
            <Form className="glitchForm">
                <Form.Group className="mb-1 formComponent" controlId="projectName">
                    <Form.Label className='formLabel'>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Project Name" onChange={
                        (e) => setProjectName(e.target.value)}
                        value={projectName} />
                </Form.Group>

                <Form.Group className="mb-1 formComponent" controlId="message">
                    <Form.Label className='formLabel'>Enter Error Message</Form.Label>
                    <Form.Control type="text" placeholder="Error Message"
                        onChange={
                            (e) => setMessage(e.target.value)}
                            value={message} />
                </Form.Group>

                <Form.Group className="mb-1 formComponent" controlId="description">
                    <Form.Label className='formLabel'>Error Description</Form.Label>
                    <Form.Control type="text" placeholder="What/When/How"
                        onChange={
                            (e) => setDescription(e.target.value)}
                        value={description} /> 
                </Form.Group>

                <Form.Group className="mb-1 mt-2 formComponent" controlId="date">
                    <Form.Label className='formLabel'>Date Discovered</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy"
                        onChange={
                            (e) => setDate(e.target.value)}
                        value={date} /> 
                </Form.Group>

                <Form.Group className="mb-1 formComponent" controlId="severity">
                    <Form.Label className='formLabel'>Severity Level</Form.Label>
                    <Form.Control type="text" placeholder="Low/Med/High"
                        onChange={
                            (e) => setSeverity(e.target.value)}
                        value={severity} />
                </Form.Group>

                <Form.Group className="mb-1 formComponent" controlId="assignment">
                    <Form.Label className='formLabel'>Assigned To:</Form.Label>
                    <Form.Control type="text" placeholder="Name / Department"
                        onChange={
                            (e) => setAssignment(e.target.value)}
                        value={assignment} />
                </Form.Group>

                {/* <Form.Group className="mb-1 formComponent" controlId="status">
                    <Form.Label className='formLabel'>Status</Form.Label>
                    <Form.Control type="text" placeholder="Open/Closed/In Progress"
                        onChange={
                            (e) => setStatus(e.target.value)}
                        value={status} />
                </Form.Group> */}

                <Button className="issueSubmitBtn" variant="primary" type="button" onClick={postFormData}> 
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default IssueForm;