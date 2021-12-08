import React,{useState} from "react";
import SearchBar from "./SearchBar";
import CryptoList from './CryptoList';
import SelectedData from "./SelectedData";

// This is our top level actual application component. (A child of User?) it holds:
// portfolio
// mainHero (the top div, basically what we did for our P1 application)
// TopTable

// if making child of user, you could do some on page name based personalized rendering.

// RE: Coingeko API - you can set # of things returned per page, and paginate through results

function CryptoPage({name, table}) {
    // cons
    // The full coin data gets passed down to render -> List, List does the Data & repeat
    const [selected, setSelected] = useState(false)
    return (      
        <div>
            <SearchBar/>
            <div>
                {selected?<SelectedData/>:null}
                {/* Set this "selected" state on search or button press. */}
                Hi {name}!! This is the Main parent component for our actual application
            </div>
            <CryptoList table={table}/>
        </div>
      );
    }
    
export default CryptoPage;