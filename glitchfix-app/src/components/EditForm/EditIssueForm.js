// React imports
import React, { useState } from 'react';
// Axios and other dependency imports
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Local imports
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
    const [note, setNote] = useState(props.Issue.note); // unique uuid for each issue
    const [isVisible, setIsVisible] = useState(true);

    const updateFormData = async () => {
        const { data } = await axios.put(endpoint + 'issues/' + props.Issue.id,
            {
                name: projectName,
                message: message,
                description: description,
                severity: severity,
                assignment: assignment,
                status: status,
                date: date,
                note: note,
            })
        console.log('endpoint data for PUT = ', data)
        props.update();
        // .then(response => {
        //     console.log(response)

        // }).catch(error => {
        //     console.error(error);
        //     console.log('endpoint data for PUT = ', data);
        // })
    }


    //creating the close button function
    // function closeForm() {
    //     setIsVisible(current => !current);
    // }

    // const fetchIssues = async () => {
    //     const { data } = await axios.get(endpoint + 'issues');
    //     console.log('endpoint data = ', data);
    //     console.log(props.Issue.id);
    // };

    return (
        <div className='issueForm mt-1' style={{ display: isVisible ? 'flex' : 'none' }}>
            <h2>Edit Glitch Details</h2>
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
                    <Form.Control type="textarea" placeholder="What/When/How"
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

                <Form.Group className="mb-1 formComponent" controlId="description">
                    <Form.Label className='formLabel'>Progress Notes</Form.Label>
                    <Form.Control type="textarea" placeholder="What has been done?"
                        onChange={
                            (e) => setNote(e.target.value)}
                        value={note} />
                </Form.Group>

                <Button className="issueSubmitBtn"
                    type="button"
                    variant='primary'
                    onClick={updateFormData}>
                    Save
                </Button>
                {/* <Button className='closeBtn mt-3'
                    style={{
                        backgroundColor: "#C1292E",
                        color: "white",
                        borderRadius: "5px",
                        marginLeft: "10px",
                    }}
                    type="button"
                    onClick={closeForm}>Close</Button> */}
            </Form>


        </div>
    );
}

export default EditIssueForm;