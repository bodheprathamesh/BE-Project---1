import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Notfound from './Notfound';

export let id = 0;
export default function Login(props) {

    useEffect(() => {
        console.log("id in login ", props.id1);
    }, [props.id1])
    const endpoint = "http://127.0.0.1:8000/login/";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }
    const postData = async () => {
        const body = { username, password }
        try {
            const response = await axios.post(endpoint, body);
            if (response.request.status === 400) {
            }
            props.setId1(response.data.id)
            props.setAuth(true);
            navigate("/home");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleSendData = async () => {
        const newData = await postData();
        console.log(newData);
    }



    return (
        <>
            {!props.auth && (<div className="container my-5" >
                <form>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUserChange} placeholder="Enter Username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassChange} placeholder="Password" />
                    </div>
                    <div className="form-group form-check" style={{ width: "30%", margin: "0 auto" }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="form-group my-3" style={{ width: "5%", margin: "0 auto" }}>
                        <button type="button" className="btn btn-primary my-4" onClick={handleSendData}>Login</button>
                    </div>

                </form>
            </div>)}
            {props.auth && (<div className="container my-5">
                <Notfound />
            </div>)}
        </>
    )
}
