import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <div className="">
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Credit Checker</Link>
                </div>
            </nav>
            </div>

        </>
    )
    
}
