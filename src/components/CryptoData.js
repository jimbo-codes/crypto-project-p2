// import {useEffect} from "react";
import { Link } from 'react-router-dom';
// child of Dashboard
// this is the individual card level component for rendering a row of the table.

function CryptoData({name,price,dodChg, mktCap, mktCapRank, id, maxSupply, volume, index, image, setSelected, selected}) {

// formatting numbers.
mktCap = mktCap.toLocaleString("en-US");
if(price>100){
   price = Math.round(price,0)
}else if(price>2){
    price = price.toFixed(2)
}else if(price===1){
    price=price.toFixed(1)
}else if(price<0.001){
    price = price.toFixed(6)
}
else if(price>0){
    price = price.toFixed(4)
}
price = price.toLocaleString("en-US");
volume = volume.toLocaleString('en-US');
dodChg = dodChg.toFixed(2)
if(maxSupply){
    maxSupply = Math.round(maxSupply)
    maxSupply = maxSupply.toLocaleString("en-US")
}

// ternary for red's in the initial render

// can you format these things up here?

// do we like the supply centered or not?
// do we want the name of coin to look like a hyperlink?
return (      
          <tr className="hover:bg-white">
              {/* Set the name data to have image */}
      <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index}.</td>
      <td className="px-0 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img className="float-left w-6 pr-1" src={image} alt={name}/><Link to={`/app/${id}`} onClick={()=>window.scrollTo(0, 0)}>{name}</Link></td>
      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{price}</td>
      {/* conditional formatting based on the band of price, ex how many decimals to show. */}

      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900" style={dodChg<0?{color: "red",}:{color: 'green'}}>{dodChg}%</td>
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mktCap}</td>
      
      {/* style={{textAlign: 'center'}} */}
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">{maxSupply?maxSupply:"N/A"}</td>
      
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{volume}</td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{mktCapRank}</td>
      <td><Link to={`/app/${id}`} onClick={()=>window.scrollTo(0, 0)} className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Inspect</Link></td>

      
      {/* <td>{vegetarian?"Yep!":"Nope!"}</td> */}
      {/* <td> */}
        {/* <button type="button" onClick={edit} className="btn btn-primary"> */}
        {/* </button> */}
      {/* </td> */}
    </tr>
      );
    }
    
export default CryptoData;