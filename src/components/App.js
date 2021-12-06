import '../App.css';
import React,{useState,useEffect, Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import ProductHome from './ProductHome';
// route here is not BrowserRouter, that is handled in the top level index.js
// absolute top level component.
function App() {
// fetch from DB.json (coingeko 50 coin api ping. We could change this to be a user DB instead)
useEffect(() => {
  fetch('http://localhost:3000/coins')
  .then(r=>r.json())
  .then(data=> console.log(data))
  .catch(error=> {
    // incorporate legitimate error handling so you know what happens if things go wrong here.
    // let you know if server isnt running, etc.
    console.log(error)})
},[])

// Check if user is logged in, displays the homepage if so
return (
 <Router>
   <Fragment>
    <NavBar/>
    <Routes>  

    {/* This is our "homepage" should in */}
    <Route path="/" element={<ProductHome/>}>
    {/* https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou */}
    {/* The top answer explains how to setup private route based on auth. maybe do for app? user. */}
    </Route>
    </Routes>
  </Fragment>
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
