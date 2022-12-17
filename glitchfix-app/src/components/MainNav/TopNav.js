import React from 'react'
import { Link } from 'react-router-dom'
import '../MainNav/TopNav.css'


export default function TopNav() {
    // const path = window.location.pathname; 

    return (
        <nav className='nav'>
            <Link to="/">Home</Link>
            <ul>
                <CustomLink href="/instructions">Instructions</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
            </ul>
        </nav>

    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <Link to={href} {...props}>{children}</Link>
        </li>
    )
}