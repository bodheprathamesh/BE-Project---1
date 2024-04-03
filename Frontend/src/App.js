import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Csv from './components/Csv';
import Form from './components/Form';
import Body from './components/Body';
import UpdateNavbar from './components/UpdateNavbar';
import Success from './components/Success';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import Sample from './components/Sample';

function App() {
  const loginPath = "/login"
  const registerPath = "/register"
  // const navigate = useNavigate();
  const [ id1, setId1 ] = useState("0");

  useEffect(()=>{
    console.log("in app ", id1);
  }, [id1])

  const[auth , setAuth] = useState(false);
  
  const loginHandler = () => {
    setAuth(!auth);
  };

  const toggle = () =>{
    setAuth(!auth);
  };



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar login = {loginHandler} status = {auth}/><Body/></>}></Route>
        <Route exact path="/fill-a-form" element={<><UpdateNavbar/><Form id1={id1} setId1={setId1} /></>}></Route>
        <Route exact path="/upload-csv-file" element={<><UpdateNavbar/><Csv/></>}></Route>
        <Route exact path="/success" element={<><Success/></>}></Route>
        <Route exact path="/login" element={<><Navbar path = {loginPath} login = {loginHandler} status = {auth}/><Login id1={id1} setId1={setId1}/></>}></Route>
        <Route exact path="/register" element={<><Navbar path = {registerPath} login = {loginHandler} status = {auth} /><Register toggle = {toggle}/></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
