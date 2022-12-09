import Form from 'react-bootstrap/Form';

function Severity() {
    return (
        <Form.Select aria-label="Severity"size="sm">
            <option>Select level of severity</option>
            <option value="1">Low</option>
            <option value="2">Med</option>
            <option value="3">High</option>
            <option value="4">Critical</option>
        </Form.Select>
    );
}

export default Severity;