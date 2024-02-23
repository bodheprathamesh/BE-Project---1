import React from 'react'

export default function Form() {
  return (
    <>
      <div className='contianer my-5'>
        <form action="">
          <div className="container">
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" class="btn btn-primary my-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
