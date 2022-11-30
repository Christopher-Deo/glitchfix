import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../components/IssueForm/IssueForm.css';


function IssueForm() {

    //write function to get form data and create new issue object
    
    return (
        <div className='issue-form mt-1'>
            <h2>Enter Glitch Details</h2>
            <Form className="glitchForm">
                <Form.Group className="mb-1 formComponent" controlId="projectName">
                    <Form.Label className='formLabel'>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Project Name" />
                </Form.Group>

                <Form.Group className="mb-1 formComponent" controlId="errorMsg">
                    <Form.Label className='formLabel'>Enter Error Message</Form.Label>
                    <Form.Control type="text" placeholder="Error Message" />
                </Form.Group>
                <Form.Group className="mb-1 formComponent" controlId="errorDesc">
                    <Form.Label className='formLabel'>Error Description</Form.Label>
                    <Form.Control type="text" placeholder="What/When/How" />
                </Form.Group>
                <Form.Group className="mb-1 mt-2 formComponent" controlId="dateFound">
                    <Form.Label className='formLabel'>Date discovered?</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" />
                </Form.Group>
                <Form.Group className="mb-1 formComponent" controlId="severity">
                    <Form.Label className='formLabel'>Severity Level</Form.Label>
                    <Form.Control type="text" placeholder="Low/Med/High" />
                </Form.Group>
                <Form.Group className="mb-1 formComponent" controlId="assignedTo">
                    <Form.Label className='formLabel'>Assigned To:</Form.Label>
                    <Form.Control type="text" placeholder="Assigned To:" />
                </Form.Group>

                <Button className="issueSubmitBtn" variant="primary" type="submit"> {/*add onClick and state to submit form */}
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default IssueForm;