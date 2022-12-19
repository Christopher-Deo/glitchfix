// React imports
import React, { useState } from 'react';
// Axios and other dependency imports
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Local imports
// import GlitchBox from '../GlitchBox/GlitchBox';
import '../../components/IssueForm/IssueForm.css';

// setting the api key to a global variable --- will need to change this to a .env file pre-build
const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';



function EditIssueForm(props) {
    const [projectName, setProjectName] = useState(props.Issue.projectName);
    const [message, setMessage] = useState(props.Issue.message); //listing of the error message from project's code
    const [description, setDescription] = useState(props.Issue.description); //description of the error (how, where, when, etc.)
    const [severity, setSeverity] = useState(props.Issue.severity); // low, medium, high, critical
    const [status, setStatus] = useState(props.Issue.status || ''); //open, closed, in progress
    const [assignment, setAssignment] = useState(props.Issue.assignment || ''); //assigned to who
    const [date, setDate] = useState(props.Issue.date); //date issue discovered
    const [id, setId] = useState(props.Issue.id || uuidv4()); // unique uuid for each issue
    const [isVisible, setIsVisible] = useState(true);

    const updateFormData = async () => {
        const newIssue = {
            name: projectName,
            message: message,
            description: description,
            severity: severity,
            assignment: assignment,
            status: status,
            date: date,
            
        };
        // console.log('newIssue = ', newIssue.id)
        const { data } = await axios.put(endpoint + 'issues', props.Issues);
        console.log('endpoint data for PUT = ', data);
        props.update();
        closeForm();
    };

    //creating the close button function
    function closeForm () {
        setIsVisible(current => !current);
        }

    const fetchIssues = async () => {
        const { data } = await axios.get(endpoint + 'issues');
        // console.log('endpoint data = ', data);
        // console.log(props.Issue.id);
    };

    return (
        <div className='issue-form mt-1' style={{ display: isVisible? 'flex' : 'none' }}>
            <h2>Edit Glitch Details</h2>
            <Form className="glitchForm">
                {/* <Form.Group className="mb-1 formComponent" controlId={uuidv4()}>
                    <Form.Label className='formLabel'>Id</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={
                        (e) => setId(e.target.value)}
                        value={id} />
                </Form.Group> */}

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

                <Form.Group className="mb-1 formComponent" controlId="status">
                    <Form.Label className='formLabel'>Status</Form.Label>
                    <Form.Control type="text" placeholder="Open/Closed/In Progress"
                        onChange={
                            (e) => setStatus(e.target.value)}
                        value={status} />
                </Form.Group> 

                <Button className="issueSubmitBtn"
                    variant="primary" type="submit"
                    onClick={updateFormData}>
                    Save
                </Button>

            </Form>
            <button className='closeBtn mt-3' type="button" onClick={closeForm}>Close</button>
            
        </div>
    );
}

export default EditIssueForm;