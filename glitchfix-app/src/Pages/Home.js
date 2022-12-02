//React import & Axios import
import React, { useState, useEffect,} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// Material UI / Other Dependencies imports
import { v4 as uuidv4 } from 'uuid'
// Local imports
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IssueForm from '../components/IssueForm/IssueForm';
import GlitchBox from '../components/GlitchBox/GlitchBox';






const Home = () => {
    const [issues, setIssues] = useState([]);
        
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
        // eslint-disable-next-line
    }, []);

    

    return (
        <div className='homeContent' style={{
            paddingBottom: '100px',paddingTop: '20px',}}>
       
            <IssueForm />
            <GlitchBox />
        </div>
    )
}

export default Home
