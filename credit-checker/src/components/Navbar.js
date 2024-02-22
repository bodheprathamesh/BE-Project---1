import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Credit Checker</Link>
                </div>
            </nav>
            </div>

        </>
    )

}
