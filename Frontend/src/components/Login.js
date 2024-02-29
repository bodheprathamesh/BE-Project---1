import React from 'react'

export default function Login(props) {
    return (
        <>
            <div className="container my-5" >
                <form>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group my-3" style={{ width: "30%", margin: "0 auto" }}>
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check" style={{ width: "30%", margin: "0 auto" }}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div class="form-group my-3" style={{ width: "5%", margin: "0 auto" }}>
                        <button type="button" class="btn btn-primary my-4">Login</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
