import React from 'react'

export default function Csv() {
  return (
    <>
      <div className='container my-5'>
        <form action="">
          <div className="container">
            <label for="formFileLg" class="form-label"><h2 className='choose-title'>Select CSV file</h2></label>
            <input class="form-control form-control-lg my-3" id="formFileLg" type="file" accept=".csv" required/>
            <button type="submit" class="btn btn-primary my-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
