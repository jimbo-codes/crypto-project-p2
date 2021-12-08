import React,{useState} from "react";


// child of Dashboard
// this is the individual card level component for rendering a row of the table.

function CryptoData({name,price,dod}) {
  console.log(price)

// `${data.market_data.price_change_percentage_7d} %`;
//   Set your formatting for the numbers that you put in here (can do it above the JSX I think?)

// ternary for red's in the initial render
    return (      
          <tr>
      <td>{name}</td>
      <td>{price}</td>
      
      {/* <td>{vegetarian?"Yep!":"Nope!"}</td> */}
      {/* <td> */}
        {/* <button type="button" onClick={edit} className="btn btn-primary"> */}
        {/* </button> */}
      {/* </td> */}
    </tr>
      );
    }
    
export default CryptoData;