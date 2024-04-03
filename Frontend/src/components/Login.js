import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export let id = 0;
export default function Login(props) {

    useEffect(()=>{
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
        const body = {username,password}
        try {
          const response = await axios.post(endpoint, body);
          if(response.request.status === 400){
            
          }
        //   setTimeout(3000)
        //   id = response.data.id
        //   console.log(id)
        console.log("id -->", response.data.id);
          props.setId1(response.data.id)
          console.log("id in login ", props.id1);
          navigate("/");
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
            <div className="container my-5" >
                <form>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={handleUserChange} placeholder="Enter Username" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={handlePassChange} placeholder="Password" />
                    </div>
                    <div class="form-group form-check" style={{ width: "30%", margin: "0 auto" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="form-group my-3" style={{ width: "5%", margin: "0 auto" }}>
                        <button type="button" class="btn btn-primary my-4" onClick={handleSendData}>Login</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
