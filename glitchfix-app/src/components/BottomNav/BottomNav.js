// React imports
import React, { useState, useEffect } from 'react'
/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom' */
// Material UI imports
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
// local imports



export default function BottomNav() {
    const [value, setValue] = useState(0);
    // const history = useNavigate()

    useEffect(() => {
        // if (value === 0) history('https://github.com/Christopher-Deo');
        // else if (value === 1) history('');
        // else if (value === 2) history('');
        // else if (value === 3) history('');
        // else if (value === 4) history('');
        // else if (value === 5) history('');
        // else if (value === 6) history('');

    }, [value,]
    )

    return (
        <Box sx={{
            width: '100%',
            // height: '4rem',
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            position: 'fixed',
            zIndex: 100,
        }}>

            <BottomNavigation
                className='bottom-nav'
                style={{ backgroundColor: '#161925' }}
                showlabel = 'true'
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <a href="https://github.com/Christopher-Deo" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        label="github" icon={<GitHubIcon />} />
                </a>
                <a href="https://www.linkedin.com/in/christopherdeo/" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        label="linkedIn" icon={<LinkedInIcon />} />
                </a>
                <a href="https://twitter.com/webdevdeo" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{
                            color: 'whitesmoke'
                        }}
                        label="twitter" icon={<TwitterIcon />} />
                </a>

                {/* <BottomNavigationAction
                    style={{ color: 'whitesmoke' }}
                    label="Facebook" icon={<FacebookIcon />} /> */}
                <a href="https://christopherdeo.com/" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        label="portfolio" icon={<LanguageIcon />} />
                </a>
                <a href="mailto:chris@christopherdeo.com" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        label="contact" icon={<EmailIcon />} />
                </a>
            </BottomNavigation >
        </Box>
    );
}

