import React from 'react'
import { useState } from 'react';

export default function Register() {
    // const endpoint = "http://127.0.0.1:8000/register/";
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPass(event.target.value)
    }
    const handleCpasChange = (event) => {
        setCpass(event.target.value)
    }
    return (
        <>
            <div className="container my-5" style={{ top: "40%" }}>
                <form>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUserChange} placeholder="Enter Username" required/>
                    </div>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={pass} onChange={handlePassChange}  placeholder="Password" />
                    </div>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={cpass} onChange={handleCpasChange}  placeholder="Confirm Password" />
                    </div>
                    <div class="form-group form-check" style={{ width: "30%", margin: "0 auto" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="form-group my-3" style={{ width: "5%", margin: "0 auto" }}>
                        <button type="button" class="btn btn-primary my-4">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
