import React from 'react'
import { Link } from "react-router-dom"

export default function UpdateNavbar() {
    return (
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Credit Checker</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/fill-a-form">Fill a form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/upload-csv-file">Upload CSV file</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
