import React from 'react'
import { Link ,useLocation,useNavigate} from "react-router-dom"
// import {Nav , NavDropDown} from 'react-router-dom'

export default function Navbar(props) {
    const navigate = useNavigate()
    console.log(navigate)
    const location = useLocation();
    const currentUrl = location.pathname;
    console.log(currentUrl)
    const handleLogout=()=>{
        props.setId1(0);
        props.setAuth(false);

    }
    return (
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand container">Credit Checker</Link>
                        {/* <Link style={{color:"white"}}className="container nav-link active " aria-current="page" to="/fill-a-form"> Fill-a-form</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {(currentUrl === "/register") && (<li className="nav-item">
                                    <Link className="nav-link active " aria-current="page" to="/login" onClick={props.loginHandler}> 
                                        Login
                                    </Link>
                                </li>)}
                                {(currentUrl === "/login" || currentUrl === "/" )&& (<li className="nav-item">
                                    <Link className="nav-link active" to="/register">Register</Link>
                                </li>)}
                                {currentUrl !== "/register" && currentUrl !== "/login" && currentUrl !== "/" && currentUrl !== "/logout"  &&(<li className="nav-item">
                                    <Link className="nav-link active" to="/logout" onClick={handleLogout}>Logout</Link>
                                </li>)}
                                {currentUrl === "/logout" &&(<li className="nav-item">
                                    <Link className="nav-link active" to="/register">Register</Link>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

}
