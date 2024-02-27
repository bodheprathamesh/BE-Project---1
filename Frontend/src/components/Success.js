import React from 'react'

export default function Success(props) {
  return (
    <>
    {/* <h1>HELLO</h1> */}
      {props.sentData && (
          <div>
            <h2>POST Request Data:</h2>
            <p>{JSON.stringify(props.sentData)}</p> {/* Displaying the POST data */}
          </div>
        )}
    </>
  )
}
