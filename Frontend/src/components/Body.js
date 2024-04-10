
import React from 'react'
import { Link } from "react-router-dom"
import Notfound from './Notfound';



export default function Body(props) {
    const mystyle = {
        color: "black",
        fontweight: "bold",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
    };
    return (
        <>

            {props.auth && (<div className="container my-3" style={mystyle}>
                <h1 className='my-5'>Welcome to credit checker</h1>
                <div className="container my-1 ">
                    <div className="container p-2">
                        <h4 className='my-5 px-5 mx-auto'>Welcome to our Credit Checker app, exclusively designed for small businesses
                            seeking to take control of their financial health and secure their future growth.
                            Our mission is to provide small business owners with powerful tools to assess their
                            creditworthiness and make informed financial decisions.
                        </h4>
                    </div>
                    <div className="container px-5 mx-auto">
                        <h4>At the core of our application is a robust algorithm tailored specifically for
                            small businesses, leveraging UPI (Unified Payments Interface) transactions to predict
                            credit accurately. UPI has transformed the landscape of digital payments in India,
                            and we harness its capabilities to offer small business owners a comprehensive understanding
                            of their financial standing.</h4>
                    </div>
                </div>
            </div>)}
            {props.auth && (<div>
                <div className="d-grid gap-4 col-6 mx-auto">
                    <Link to="/fill-a-form" className="d-grid gap-3 col-3 mx-auto">
                        <button className="btn btn-primary btn-lg" type="button">Fill a Form</button>
                    </Link>
                    <Link to="/upload-csv-file" className="d-grid gap-3 col-3 mx-auto my-4">
                        <button className="btn btn-primary btn-lg" type="button">Upload CSV file</button>
                    </Link>
                </div>
            </div>)}
            {!props.auth && (<div className="container my-5">
                <Notfound/>
            </div>)}
            
        </>
    )

}
