import '../App.css';
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import ProductHome from './ProductHome';
import User from './User';
import CryptoPage from './CryptoPage';


// our absolute top level component.
function App() {
const [auth, setAuth] = useState(false);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [home, setHome] = useState(true);
const [about, setAbout] = useState(false);
const [table, setTable] = useState([]);
// HERE YOU NEED TO CHANGE THIS CALL TO COINGEKO API

// You can make a call to your db json with a static coingeko result to satisfy requirement if you have to.
// We can get the FULL LIST OF THEIR TOKENS (with ID) with https://api.coingecko.com/api/v3/coins/list
// This is a nested array by # of things.
// For your infinite scroll you COULD use this, but it wouldn't really be relevant since its alphabetical.

// NOTES SECTION
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max
  // This historical data goes back to april 2013
  // default chart display 1d chart, then use the below fetch to display specific date range depending on what is chosen
  
  
  // MOST INTERESTING SECTION OF NOTES:
  // to fetch by specific date convert to UNIX at 12am GMT for whatever the date is to query api.
  // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2020
  // this lets you query the history on a per-coin level. Would need to ping 30 times to get 1 month worth of data on a coin.
  // Can set this up to continuously ping, moniter success etc. We could legitimately build out a DB of valuable info like this
  // Gives us dev + social data, etc. Is there an easier way for us to get this information?
  // It would only take you one day of continuous querying (assuming they don't rate limit us) to get 1 month worth of  data for EVERY coin available
  // Other option for this is to try and source direct (probably not crazy)
  
  // Specifically: I think somewhere between data provider (pure) and a anywhere between a "retail trader/institutional HF" platform.
  // this is the market leader for this type of company, and it seems they aren't even really a raw data provider
  // https://www.thetie.io/
    // They leverage twitter firehose for real time API data (there are two exclusive providers: distributors of the Firehose (GNIP or Datasift))
    // this seems like their only "alpha" besides time. they have 3y of historical data from having this service for more time.
    // API only launched 5 months ago.
  // When I search "blockchain Data" I'm not finding many companies.
    // What would be valuable? 
    // Github developer data by project
    // Social media data:
    // reddit posts, twitter mentions, facebook (?)
    // content creator info:
    // https://socialblade.com/
    // google searches (google trends aren't good since thhey dont give exact)
    // 

  // This returns top 7 searched coins on their site. kind of interesting
  // https://api.coingecko.com/api/v3/search/trending
  // worth using this to display at least.

  //global endpoint gives you snapshot of the # of currencies, total market cap, total volume, # of markets, # of onvoing / upcoming ICO's and when it was updated.
  
  // THIS IS SUPER INTERESTING -- it provides status updates that also lists the Coin ID
  // https://api.coingecko.com/api/v3/status_updates
  // can only filter by proj type (coin or market) or category of update.

  //they also have a derivatives DB


useEffect(() => {

  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
  // This returns you bitcoin's historical market cap, price and volume data
  // set this to 250 max 1p size
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250
  // this creates a nested array with 100 in each. 
  // for now keep 100 for simplicity sake.
  .then(r=>r.json())
  .then(data=> setTable(data))
  .catch(error=> {
    // incorporate legitimate error handling so you know what happens if things go wrong here.
    // let you know if server isnt running, etc.
    console.log(error)})
},[])

// Check if user is logged in, displays the homepage if so
return (
 <Router>
    <NavBar auth={auth} name={name} email={email} setAbout={setAbout} about={about} home={home} setHome={setHome}/>
      <Routes>  
      {/* Bottom level application with all core functionality */}
      <Route path="/app" element={<CryptoPage name={name} table={table}/>}/>

      {/* This is the user input form */}
      <Route path="/user" element={<User name={name} setName={setName} email={email} setEmail={setEmail} setAuth={setAuth}/>}/>

      {/* This is the about page */}
      <Route path='/about' element={<About/>}/>      
      
      {/* This is our "homepage"*/}
        <Route path="/" element={<ProductHome home={home} about={about} setHome={setHome} setAbout={setAbout}/>}/>
      </Routes>
      {/* Routes replaces Switch in react-router-dom v6. */}
  </Router>  
  );
}
export default App;
