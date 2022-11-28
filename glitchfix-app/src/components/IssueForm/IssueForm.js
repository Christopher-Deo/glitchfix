import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../components/IssueForm/IssueForm.css';


function IssueForm() {
    return (
    <div className='issue-form mt-5'>
        <h2>Enter Glitch Details</h2>
            <Form className="mx-5 border border-solid">
            <Form.Group className="mb-3 formComponent" controlId="formProjectName">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" placeholder="Project Name" />
            </Form.Group>

                <Form.Group className="mb-3 formComponent" controlId="formErrorMessage">
                <Form.Label>Enter Error Message</Form.Label>
                <Form.Control type="text" placeholder="Error Message" />
            </Form.Group>
                <Form.Group className="mb-3 formComponent" controlId="formErrorDescription">
                <Form.Label>Error Description</Form.Label>
                <Form.Control type="text" placeholder="What/When/How" />
            </Form.Group>
                <Form.Group className="mb-3 formComponent" controlId="formDateOccurred">
                <Form.Label>When was issue discovered?</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
            </Form.Group>
            <Form.Group className="mb-3 formComponent" controlId="formSeverity">
                <Form.Label>Select Severity Level</Form.Label>
                <Form.Control type="text" placeholder="Low/Med/High" />
            </Form.Group>
                <Form.Group className="mb-3 formComponent" controlId="formAssignedTo">
                <Form.Label>Assigned To:</Form.Label>
                <Form.Control type="text" placeholder="Assigned To:" />
            </Form.Group>
            
            <Button className="issueSubmitBtn" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
    );
}

export default IssueForm;