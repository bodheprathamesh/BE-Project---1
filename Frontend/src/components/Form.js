import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {id} from './Login.js'
// import Success from './Success';
// import { useNavigate ,Link} from 'react-router-dom';

export default function Form(props) {
  // let navigate = useNavigate();

  useEffect(() => {
    console.log("in form id1 ", props.id1);
  }, [props.id1])

  let msg;
  let msg1;
  let msg2;
  // let user1 = "user1"
  const [postData1, setPostData1] = useState('');
  const [applyData1, setApplyData1] = useState('');
  const [applyGet1, setGetData1] = useState('');

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

  const [cibil, setCibil] = useState();
  const [age, setAge] = useState(30);
  const [transaction_count, setTransaction_count] = useState(150);

  const [duration, setDuration] = useState(9);
  const [actualAmount, setactualAmount] = useState(35000);

  const [messg, setmessg] = useState(0);
  const [messg1, setmessg1] = useState(0);
  const [messg2, setmessg2] = useState(0);

  useEffect(() => {
    console.log("msg ", messg);
  }, [messg])

  const endpoint = "http://127.0.0.1:8000/creditapi/"
  const endpoint2 = "http://127.0.0.1:8000/loanrepay/"
  const endpoint3 = "http://127.0.0.1:8000/showemidetails/"

  const postData = async () => {
    const body = { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, age, transaction_count }
    try {
      const response = await axios.post(endpoint, body);
      // Update the state with the response data
      setPostData1(response.data);
      setTimeout(3000)
      msg = Math.round(response.data.msg);
      setmessg(msg)
      setTimeout(3000)
      console.log(msg)
      console.log(messg)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  const handleSendData = async () => {
    const newData = await postData();
    console.log(newData)
    // let path = /success;
    // navigate(path);
  }

  const postData2 = async () => {
    let id = props.id1
    const body = { actualAmount, duration, transaction_count, id }
    try {
      const response = await axios.post(endpoint2, body);
      // Update the state with the response data
      setApplyData1(response.data);
      setTimeout(3000)
      msg1 = Math.round(response.data.msg);
      setmessg1(msg1)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }
  const handleApplyData = async () => {
    if (actualAmount > parseInt(messg)) {
      alert("Actual amount cannot be greater than Credit amount")
    }

    const newData = await postData2();
    console.log(newData)
  }
  const postData3 = async () => {
    const body = props.id1;
    // console.log("id",id)
    try {
      console.log(body)
      const response = await axios.post(endpoint3, body);
      // Update the state with the response data
      setGetData1(response.data);
      setTimeout(3000)
      msg2 = response.data;
      setmessg2(msg2)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const handleGetData = async () => {
    const newData = await postData3();
    console.log(newData)
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
  const handleDurationChange = (event) => {
    setDuration(event.target.value)
  }
  const handleTransactionCountChange = (event) => {
    setTransaction_count(event.target.value)
  }
  const handleActualAmountChange = (event) => {
    setactualAmount(event.target.value)
  }

  // const mystyle = {
  //   position: "fixed",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   backgroundColor: "#7CFC00",
  //   color: "black",
  //   padding: "60px",
  //   borderRadius: "100%",
  //   textAlign: "center",
  //   boxShadow: "0px 4px 6px rgba(0, 0, 0.7, 0.7)"
  // }
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
      </div>)}

      {postData1 && !applyData1 && (
        <div className='container my-5'>
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 style={{textAlign:"center"}}> Success ! Congratulations Your Credit Eligibility is : {messg}</h4>
          </div>

          {/* <div className="success-message" style={mystyle}>
            <h1 style={{ fontWeight: 900, fontSize: '4em' }}>Success</h1>
            <h2 style={{ fontWeight: 500 }}>Congratulations </h2>
            <h2 style={{ fontWeight: 400 }}>Your Credit Eligibility is:</h2>
            <h2 style={{ fontWeight: 800 }}>{JSON.stringify(postData1["msg"])}</h2>
          </div> */}
          <form action="">
            <div className="container">
              <div className="container my-5 row g-2 my-2">
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Enter Amount</label>
                  <div className="col-sm-10">
                    <input type="number" min={0} max={messg} className="form-control" placeholder="Amount" aria-label="First name" value={actualAmount} onChange={handleActualAmountChange} />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Duration In Months</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" placeholder="Duration" aria-label="Last name" value={duration} onChange={handleDurationChange} required />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="formGroupExampleInput" className="form-label">Transaction count</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" placeholder="Duration" aria-label="Last name" value={transaction_count} onChange={handleTransactionCountChange} required />
                  </div>
                </div>

              </div>
              <div className="container d-grid gap-2 col-1 mx-auto">
                <button className="btn btn-primary" onClick={handleApplyData} type="button">Apply</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* {postData1 && (<Success sentData={postData1} />)} */}

      {applyData1 && (
        <div className='container my-5'>
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 style={{textAlign:"center"}}> Your monthly EMI will be : {messg1} for total amount of : {actualAmount}</h4>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleGetData}>See Your EMI Plans</button>
          {applyGet1 && (<table className="table table-bordered my-5">
            <thead>
              <tr>
                <th scope="col"><h3>Sr.no</h3></th>
                <th scope="col"><h3>Title</h3></th>
                <th scope="col"><h3>Data</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td scope="row">Your ID</td>
                <td scope="row">{messg2["id"]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td scope="row">Amount Paid</td>
                <td scope="row">{messg2["paid"]}</td>
              </tr>
              <tr>
                <td>3</td>
                <td scope="row">Amount Left</td>
                <td scope="row">{messg2["left"]}</td>
              </tr>
              <tr>
                <td>4</td>
                <td scope="row">Total Months Paid</td>
                <td scope="row">{messg2["months_paid"]}</td>
              </tr>
              <tr>
                <td>5</td>
                <td scope="row">Total Months Left</td>
                <td scope="row">{messg2["months_left"]}</td>
              </tr>
              <tr>
                <td>6</td>
                <td scope="row">Next EMI Amount</td>
                <td scope="row">{messg2["emi_amount"]}</td>
              </tr>
            </tbody>
          </table>
          )}
        </div>

      )}

    </>
  )
}