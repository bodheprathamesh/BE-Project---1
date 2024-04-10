import React from 'react'

export default function Logout(props) {
    return (
        <>
            {!props.auth && (<div className="container my-5">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <h4 style={{ textAlign: "center" }}> You have been logged out</h4>
                </div>
            </div>)}
        </>
    )
}
