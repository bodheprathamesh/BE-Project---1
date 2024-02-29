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
// import Sample from './components/Sample';


function App() {
  const loginPath = "/login"
  const registerPath = "/register"
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar/><Body /></>}></Route>
        <Route exact path="/fill-a-form" element={<><UpdateNavbar/><Form /></>}></Route>
        <Route exact path="/upload-csv-file" element={<><UpdateNavbar/><Csv/></>}></Route>
        <Route exact path="/success" element={<><Success/></>}></Route>
        <Route exact path="/login" element={<><Navbar path = {loginPath}/><Login/></>}></Route>
        <Route exact path="/register" element={<><Navbar path = {registerPath}/><Register/></>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
