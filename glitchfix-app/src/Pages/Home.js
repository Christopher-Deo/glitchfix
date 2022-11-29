//React imports
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Material UI imports


// Local imports
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IssueForm from '../components/IssueForm/IssueForm';



const Home = () => {
    return (
        <div className='homeContent mt-3'>
            <IssueForm />
        </div>
    )
}

export default Home
