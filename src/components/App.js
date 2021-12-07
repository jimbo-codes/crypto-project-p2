import '../App.css';
import React,{useState,useEffect, Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import ProductHome from './ProductHome';
import User from './User';
import CryptoPage from './CryptoPage';


// our absolute top level component.
function App() {
// fetch from DB.json (coingeko 50 coin api ping). Need to look into historical on this.
const [auth, setAuth] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');


// HERE YOU NEED TO CHANGE THIS CALL TO COINGEKO API
// useEffect(() => {
  
//   fetch('http://localhost:3000/coins')
//   .then(r=>r.json())
//   .then(data=> console.log(data))
//   .catch(error=> {
//     // incorporate legitimate error handling so you know what happens if things go wrong here.
//     // let you know if server isnt running, etc.
//     console.log(error)})
// },[])

// Check if user is logged in, displays the homepage if so
return (
 <Router>
    <NavBar auth={auth}/>
      <Routes>  

      {/* This is our bottom level application with all core functionality */}
      <Route path="/app" element={<CryptoPage name={name}/>}/>

        {/* https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
        {/* The top answer explains how to setup private route based on auth. maybe do for app? user. */}
{/* Add the conditional pathing, if the user state has been ste to true from form completion, then send it to app. */}
      {/* This is the user input form */}
      <Route path="/user" element={<User name={name} setName={setName} email={email} setEmail={setEmail} setAuth={setAuth}/>}/>

      {/* This is the about page */}
      <Route path="/about" element={<About/>}/>      
      
      {/* This is our "homepage"*/}
        <Route path="/" element={<ProductHome/>}/>

      </Routes>
      {/* Routes replaces Switch in react-router-dom v6. */}
  {/* 
      <Route path="/user">
      <User component={User}/>
    </Route> */}

    {/* <Route path="/about">
      <About element={<About/>}/>
    </Route> */}
</Router>

    
  
  );
}

export default App;
