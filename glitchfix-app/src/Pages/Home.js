//React imports
import React, { useState, useEffect,} from 'react'
import { useNavigate } from 'react-router-dom'

// Material UI / Other Dependencies imports
import { v4 as uuidv4 } from 'uuid'
// Local imports
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IssueForm from '../components/IssueForm/IssueForm';
import GlitchBox from '../components/GlitchBox/GlitchBox';
import useScrollBlock from '../hooks/useScrollBlock';

class Issue {
    constructor(name, error, description, date, severity, assignedTo, status, id) {
        this.name = document.getElementById('projectName').value;
        this.error = document.getElementById('errorMsg').value;
        this.description = document.getElementById('errorDesc').value;
        this.date = document.getElementById('dateFound').value;
        this.severity = document.getElementById('severity').value;
        this.assignedTo = document.getElementById('assignedTo').value;
        this.status = status;
        this.id = uuidv4();
    }

    //write function to get form data and create new issue object
    
    getFormData() {



       
    }

}


const Home = () => {
    const [issues, setIssues] = useState([]);
    const [blockScroll, allowScroll] = useScrollBlock();
    useEffect(() => {
        window.scroll(0, 0);
       
        // eslint-disable-next-line
    }, [issues])
    
    return (
        <div className='homeContent mt-3'>
            <IssueForm />
            <GlitchBox />
        </div>
    )
}

export default Home
