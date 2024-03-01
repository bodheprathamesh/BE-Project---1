import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function Register() {
    const endpoint = "http://127.0.0.1:8000/register/";
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setCpass] = useState('');

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    const handleCpasChange = (event) => {
        setCpass(event.target.value)
    }


    const postData = async () => {
        const body = { username ,email,password}
        try {
          const response = await axios.post(endpoint, body);
          console.log(response)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      const handleSendData = async () => {
        const newData = await postData();
        console.log(newData)
      }
    return (
        <>
            <div className="container my-5" style={{ top: "40%" }}>
                <form>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUserChange} placeholder="Enter Username" required/>
                    </div>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control my-1" id="exampleInputEmail2" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassChange}  placeholder="Password" />
                    </div>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" value={cpass} onChange={handleCpasChange}  placeholder="Confirm Password" />
                    </div>
                    <div className="form-group form-check" style={{ width: "30%", margin: "0 auto" }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="form-group my-3" style={{ width: "5%", margin: "0 auto" }}>
                        <button type="button" className="btn btn-primary my-4" onClick={handleSendData}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
