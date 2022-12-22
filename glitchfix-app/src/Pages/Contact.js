// React imports
import React, { useState, useRef } from 'react';
// Material UI imports
import Box from '@mui/material/Box';
// other dependencies
import emailjs from 'emailjs-com';
// Local imports



const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_0gh03rd',
            'template_f41vctq',
            form.current,
            'Gv10ftwMF--cCn9mU')
            .then((result) => {   
            console.log("success ", result.text);
                alert('SUCCESS!')
            }, (error) => {
                console.log('error ', error.text);
                alert('TRANSMISSION FAILED...')
            });
    };


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
                <p className='mb-4'>If you'd like to connect on social media, click on an icon at the bottom of the screen to be taken to my profile pages.</p>
                <form
                    ref={form}
                    style={{
                    border: '2px solid #C1292E',
                    borderRadius: '0.5rem',
                    padding: '2rem',
                    }}
                    onSubmit={sendEmail}
                >
                    {/* <!-- name --> */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="enter your name"
                        />
                    </div>

                    {/* <!-- email --> */}
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="enter your email"
                        />
                    </div>

                    {/* <!-- subject --> */}
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            className="form-control"
                            id="subject"
                            placeholder="enter email subject"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_body">Message</label>
                        <textarea
                            className="form-control"
                            id="email_body"
                            rows="5"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>

            </Box>
        </div>
    )
}

export default Contact
