import React from 'react'

export default function Csv() {
  return (
    <>
      <div className='container my-5'>
        <form action="">
          <div className="container">
            <label for="formFileLg" classNmae="form-label"><h2 className='choose-title'>Select CSV file from PC</h2></label>
            <input classNmae="form-control form-control-lg my-3" id="formFileLg" type="file" accept=".csv" required/>
            <button type="submit" classNmae="btn btn-primary my-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
