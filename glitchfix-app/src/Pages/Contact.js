// React imports
import React from 'react'
// Material UI imports
import Box from '@mui/material/Box';
// import { display } from '@mui/system';

// Local imports
// import './Pages/Contact.css';


const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }


    return (
        <div className='contactForm'>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FDFFFC',
                border: '2px solid #C1292E',
                borderRadius: '0.5rem',
                padding: '1rem',
                margin: '1rem',
                marginTop: '1rem',
                boxShadow: '5px 5px 8px 0 #161925',
            }}>
                <h1 className="contactTitle mb-3 display-1">Let's Connect!</h1>
                <p className='mt-1'>If you'd like to discuss this or any other project, Please fill out the form below.</p>
                <p className='mb-4'>If you'd like to connect on social media, simply click on an icon at the bottom of the screen to be taken to my profile page.</p>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn " type="submit"
                        style={{
                            boxShadow: '3px 3px 3px 0 #161925',
                            backgroundColor: '#F1D302',
                            border: '2px solid #C1292E',
                        }}>
                        {formStatus}
                    </button>
                </form>

            </Box>
        </div>
    )
}

export default Contact
