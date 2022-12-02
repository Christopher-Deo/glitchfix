// React imports
import React, { useState, useEffect,} from 'react'
import { useNavigate } from 'react-router-dom'
// Material UI / Other Dependencies imports
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,} from 'mdb-react-ui-kit';
// Local imports


const MainNav = () => {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg'light  style={{
            backgroundColor: '#C1292E',
            height: '3em',
            borderBottom: '2px solid #161925',
        }}>
        
            <MDBContainer fluid>
                {/* <MDBNavbarNav href='#'></MDBNavbarNav> */}
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                > 
                    <MDBIcon icon='bars' fas style={{ backgroundColor: '#161925'}}/>
                 </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink active aria-current='page' href='/'>
                            Home
                        </MDBNavbarLink>
                        <MDBNavbarLink href='/instructions'>Instructions</MDBNavbarLink>
                        
                        <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
                        
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default MainNav;