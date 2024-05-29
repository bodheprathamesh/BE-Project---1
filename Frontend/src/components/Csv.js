// import React from 'react'

// export default function Csv(props) {
//   return (
//     <>
//       <div className='container my-5'>

//       </div>
//     </>
//   )
// }

import React from 'react';

const endpoint4 = "http://127.0.0.1:8000/emi/"


const Csv = (props) => {
  return (
    <div className='container my-5'>
      {/* {!props.emiStatus && (
        <div className='container my-5'>
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <h4 style={{ textAlign: "center" }}>In Order to pay EMI Apply for loan</h4>
          </div>
        </div>
      )} */}
      {/* {props.emiStatus && ( */}
        <div className='container my-5'>
        <table className="table table-bordered my-5">
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
                <td>Your ID</td>
                <td>{props.message["id"]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Amount Paid</td>
                <td>{props.message["paid"]}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Amount Left</td>
                <td>{props.message["left"]}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Total Months Paid</td>
                <td>{props.message["months_paid"]}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Total Months Left</td>
                <td>{props.message["months_left"]}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Next EMI Amount</td>
                <td>{props.message["emi_amount"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      {/* )} */}
    </div>
  );
};

export default Csv;
