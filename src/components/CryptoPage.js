// This is our top level actual application component. (A child of User?) it holds:
// portfolio
// mainHero (the top div, basically what we did for our P1 application)
// TopTable

// if making child of user, you could do some on page name based personalized rendering.

import React,{useState} from "react";
function CryptoPage({name}) {
    return (      
        <div>
        Hi {name} This is the Main parent component for our actual application
        </div>
      );
    }
    
export default CryptoPage;