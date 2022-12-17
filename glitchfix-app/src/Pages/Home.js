//React import & Axios import
import React, { useState, useEffect,} from 'react'
import axios from 'axios';
// Material UI / Other Dependencies imports
// import { v4 as uuidv4 } from 'uuid'
// Local imports
import IssueForm from '../components/IssueForm/IssueForm';
import GlitchBox from '../components/GlitchBox/GlitchBox';

const endpoint = 'https://635b0bc46f97ae73a63c0775.mockapi.io/';

const Home = () => {
    const [glitchBoxUpdate, setGlitchBoxUpdate] = useState(false);
    const [issues, setIssues] = useState([]);

    const fetchIssues = async () => {
        const { data } = await axios.get(endpoint + 'issues');
        console.log('endpoint data = ', data);
        setIssues(data);
    };

    const getAllIssues = () => {
        // setGlitchBoxUpdate(Math.random());
        fetchIssues();
          }

        //   Fetching data from the API @ page load
    useEffect(() => {
        fetchIssues();
        // eslint-disable-next-line
    }, []);

    //  Updating the glitchbox with new data 
    useEffect(() => {
        console.log('glitchBoxUpdate = ', glitchBoxUpdate);
    }, [glitchBoxUpdate]);


    return (
        <div className='homeContent' style={{
            paddingBottom: '100px', paddingTop: '20px',
        }}>
            
        {/* //setting props into issue form and glitchbox */}
            <IssueForm update={getAllIssues} />
            {issues.map(issue => {
                return (
                    <GlitchBox Issue={issue} update={getAllIssues} />
                    
                )
            })}
            
        </div>
    )
}

export default Home
