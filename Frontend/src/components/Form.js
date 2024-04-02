import React, { useState } from 'react'
import axios from 'axios'
// import Success from './Success';
// import { useNavigate ,Link} from 'react-router-dom';

export default function Form() {
  // let navigate = useNavigate();
  const [postData1, setPostData1] = useState('');

  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');

  const [jan, setJan] = useState(10000);
  const [feb, setFeb] = useState(11000);
  const [mar, setMar] = useState(10500);
  const [apr, setApr] = useState(9000);
  const [may, setMay] = useState(10200);
  const [jun, setJun] = useState(8000);
  const [jul, setJul] = useState(12000);
  const [aug, setAug] = useState(9600);
  const [sep, setSep] = useState(8500);
  const [oct, setOct] = useState(10000);
  const [nov, setNov] = useState(12000);
  const [dec, setDec] = useState(11000);

  const [cibil, setCibil] = useState('');
  const [age, setAge] = useState(30);
  // const [duration, setDuration] = useState(9);
  const [transaction_count, setTransaction_count] = useState(150);

  const endpoint = "http://127.0.0.1:8000/creditapi/"

  const postData = async () => {
    const body = { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, age, transaction_count }
    try {
      const response = await axios.post(endpoint, body);
      // Update the state with the response data
      setPostData1(response.data);
      setTimeout(3000)
      console.log(postData1)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  const handleSendData = async () => {
    const newData = await postData();
    console.log(newData)
    // let path = `/success`;
    // navigate(path);
  }


  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value)
  }
  const handleBusinessTypeChange = (event) => {
    setBusinessType(event.target.value)
  }
  const handleJanChange = (event) => {
    setJan(event.target.value)
  }
  const handleFebChange = (event) => {
    setFeb(event.target.value)
  }
  const handleMarChange = (event) => {
    setMar(event.target.value)
  }
  const handleAprChange = (event) => {
    setApr(event.target.value)
  }
  const handleMayChange = (event) => {
    setMay(event.target.value)
  }
  const handleJunChange = (event) => {
    setJun(event.target.value)
  }
  const handleJulChange = (event) => {
    setJul(event.target.value)
  }
  const handleAugChange = (event) => {
    setAug(event.target.value)
  }
  const handleSepChange = (event) => {
    setSep(event.target.value)
  }
  const handleOctChange = (event) => {
    setOct(event.target.value)
  }
  const handleNovChange = (event) => {
    setNov(event.target.value)
  }
  const handleDecChange = (event) => {
    setDec(event.target.value)
  }
  const handleCibilChange = (event) => {
    setCibil(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }
  // const handleDurationChange = (event) => {
  //   setDuration(event.target.value)
  // }
  const handleTransactionCountChange = (event) => {
    setTransaction_count(event.target.value)
  }

  const mystyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#7CFC00",
    color: "black",
    padding: "60px",
    borderRadius: "100%",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0.7, 0.7)"
  }
  return (

    <>
      {!postData1 && (<div className='contianer my-3'>
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Fill out the form to check your credit eligibility</h3>
        </div>

        <form action="">
          <div className="container">
            <div className="row g-3 my-5">
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={name} onChange={handleNameChange} />
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">Business Name</label>
                <input type="text" className="form-control" placeholder="Business Name" aria-label="Last name" value={businessName} onChange={handleBusinessNameChange} />
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">Business type</label>
                <input type="text" className="form-control" placeholder="Business type" aria-label="First name" value={businessType} onChange={handleBusinessTypeChange} />
              </div>
            </div>
            <div className="container my-3">
              <h5 style={{ textAlign: "center" }}>Provide total income for below finacial months</h5>

              <div className="row g-3 my-2">
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">January</label>
                  <input type="number" className="form-control" placeholder="Jan Income" aria-label="First name" value={jan} onChange={handleJanChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">February</label>
                  <input type="number" className="form-control" placeholder="Feb Income" aria-label="Last name" value={feb} onChange={handleFebChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">March</label>
                  <input type="number" className="form-control" placeholder="Mar Income" aria-label="First name" value={mar} onChange={handleMarChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">April</label>
                  <input type="number" className="form-control" placeholder="Apr Income" aria-label="First name" value={apr} onChange={handleAprChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">May</label>
                  <input type="number" className="form-control" placeholder="May Income" aria-label="First name" value={may} onChange={handleMayChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">June</label>
                  <input type="number" className="form-control" placeholder="Jun Income" aria-label="First name" value={jun} onChange={handleJunChange} required />
                </div>
              </div>
              <div className="row g-3 my-2">
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">July</label>
                  <input type="number" className="form-control" placeholder="July Income" aria-label="First name" value={jul} onChange={handleJulChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">August</label>
                  <input type="number" className="form-control" placeholder="Aug Income" aria-label="Last name" value={aug} onChange={handleAugChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">September</label>
                  <input type="number" className="form-control" placeholder="Sep Income" aria-label="First name" value={sep} onChange={handleSepChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">October</label>
                  <input type="number" className="form-control" placeholder="Oct Income" aria-label="First name" value={oct} onChange={handleOctChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">November</label>
                  <input type="number" className="form-control" placeholder="Nov Income" aria-label="First name" value={nov} onChange={handleNovChange} required />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">December</label>
                  <input type="number" className="form-control" placeholder="Dec Income" aria-label="First name" value={dec} onChange={handleDecChange} required />
                </div>
              </div>
            </div>
            <div className="container my-5">
              <h5 style={{ textAlign: "center" }}>Additional Details</h5>

              <div className="row g-3 my-2">
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">CIBIL score</label>
                  <input type="number" className="form-control" placeholder="CIBIL score" aria-label="First name" value={cibil} onChange={handleCibilChange} />
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Your Age</label>
                  <input type="number" className="form-control" placeholder="Age" aria-label="Last name" value={age} onChange={handleAgeChange} required />
                </div>
                {/* <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Credit Duration</label>
                  <input type="number" className="form-control" placeholder="Duration" aria-label="First name" value={duration} onChange={handleDurationChange} required />
                </div> */}
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Transaction count</label>
                  <input type="number" className="form-control" placeholder="Count" aria-label="First name" value={transaction_count} onChange={handleTransactionCountChange} required />
                </div>
              </div>
            </div>
            <div className="container d-grid gap-2 col-1 mx-auto">
              {/* <Link to="/success"> */}
              <button className="btn btn-primary" onClick={handleSendData} type="button">Submit</button>
              {/* </Link> */}
            </div>
          </div>
        </form>
        {/* <form action="">
          <div className="container">
            <div className="container my-5 row g-2 my-2">
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">Enter Amount</label>
                <div class="col-sm-10">
                  <input type="number" min={0} max={postData1["msg"]} className="form-control" placeholder="Amount" aria-label="First name" value={cibil} onChange={handleCibilChange} />
                </div>
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput" className="form-label">Duration In Months</label>
                <div class="col-sm-10">
                  <input type="number" className="form-control" placeholder="Duration" aria-label="Last name" value={age} onChange={handleAgeChange} required />
                </div>
              </div>
            </div>
            <div className="container d-grid gap-2 col-1 mx-auto">
              <button className="btn btn-primary" onClick={handleSendData} type="button">Apply</button>
            </div>
          </div>
        </form> */}
      </div>)}

      {postData1 && (
        <div className='container my-5'>

          <div className="success-message" style={mystyle}>
            <h1 style={{ fontWeight: 900, fontSize: '4em' }}>Success</h1>
            <h2 style={{ fontWeight: 500 }}>Congratulations </h2>
            <h2 style={{ fontWeight: 400 }}>Your Credit Eligibility is:</h2>
            <h2 style={{ fontWeight: 800 }}>{JSON.stringify(postData1["msg"])}</h2>
          </div>
          <form action="">
            <div className="container">
              <div className="container my-5 row g-2 my-2">
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Enter Amount</label>
                  <div class="col-sm-10">
                    <input type="number" min={0} max={postData1["msg"]} className="form-control" placeholder="Amount" aria-label="First name" value={cibil} onChange={handleCibilChange} />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Duration In Months</label>
                  <div class="col-sm-10">
                    <input type="number" className="form-control" placeholder="Duration" aria-label="Last name" value={age} onChange={handleAgeChange} required />
                  </div>
                </div>
              </div>
              <div className="container d-grid gap-2 col-1 mx-auto">
                <button className="btn btn-primary" onClick={handleSendData} type="button">Apply</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* {postData1 && (<Success sentData={postData1} />)} */}
    </>
  )
}
