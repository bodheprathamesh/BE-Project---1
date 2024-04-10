import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Csv from './components/Csv';
import Form from './components/Form';
import Body from './components/Body';
import Success from './components/Success';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import Logout from './components/Logout';
import Notfound from './components/Notfound';
// import { useNavigate } from "react-router-dom";
// import Sample from './components/Sample';

function App() {
  const registerPath = "/register"
  // const navigate = useNavigate();
  const [ id1, setId1 ] = useState("0");

  const[auth , setAuth] = useState(false);
  
  const loginHandler = () => {
    setAuth(!auth);
  };

  // const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={props =>
  //       isAuthenticated ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  //       )
  //     }
  //   />
  // );
  
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar path = {registerPath} login = {loginHandler} auth = {auth} id1={id1} /><Login id1={id1} setId1={setId1} setAuth={setAuth} auth={auth}/></>}></Route>
        <Route exact path="/home" element={<><Navbar path = {registerPath} login = {loginHandler} auth = {auth} id1={id1} /><Body auth={auth}/></>}></Route>
        <Route exact path="/fill-a-form" element={<><Navbar path = {registerPath} login = {loginHandler} auth = {auth} id1={id1} /><Form id1={id1} setId1={setId1} auth={auth} /></>}></Route>
        <Route exact path="/upload-csv-file" element={<><Navbar path = {registerPath} login = {loginHandler} auth={auth} id1={id1} /><Csv auth={auth}/></>}></Route>
        <Route exact path="/success" element={<><Success/></>}></Route>
        <Route exact path="/login" element={<><Navbar login = {loginHandler} id1={id1} auth={auth}/><Login id1={id1} setId1={setId1} setAuth={setAuth} auth={auth}/></>}></Route>
        <Route exact path="/register" element={<><Navbar path = {registerPath} login = {loginHandler} auth={auth} id1={id1} /><Register auth={auth}/></>}></Route>
        <Route exact path="/logout" element={<><Navbar login = {loginHandler} status = {auth} id1={id1} auth={auth}/><Logout/><Login id1={id1} setId1={setId1} setAuth={setAuth} auth={auth}/></>}></Route>
        <Route  exact path="/not-found" element={Notfound}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
