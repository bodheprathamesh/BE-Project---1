
import React from 'react'
import { Link } from "react-router-dom"


export default function Body() {
    const mystyle = {
        color: "black",
        fontweight : "bold",
        padding: "10px",
        fontFamily: "Arial",
        textAlign:"center"
    };
    return (
        <>
            <div className="container my-5" style={mystyle}>
                <h1 >Welcome to credit checker</h1>
                <div className="container my-5">
                    <h3>Information</h3>
                </div>
                
            </div>
            <div style={mystyle}>
                <div className="d-grid gap-4 col-6 mx-auto">
                    <Link to="/fill-a-form" className="d-grid gap-3 col-3 mx-auto">
                        <button className="btn btn-primary" type="button">Fill a Form</button>
                    </Link>
                    <Link to="/upload-csv-file" className="d-grid gap-3 col-3 mx-auto">
                        <button className="btn btn-primary" type="button">Upload CSV file</button>
                    </Link>
                </div>
            </div>
        </>
    )
    
}
