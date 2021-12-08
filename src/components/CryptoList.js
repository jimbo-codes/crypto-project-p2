// render the full list of data returned from App level fetch
// .map across the array to populate the table.
import React,{useState} from "react";
import CryptoData from "./CryptoData";

function CryptoList({table}) {
console.log(table)
// const first = [table[1],table[2]];
//first={first}
    return (      
        <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">24H Change</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
      {table.map((coin)=>{
          return <CryptoData 
          name={coin.id}
          price={coin.current_price}
        //   List out what else you want
          />
          })}
      </tbody>
    </table>
   
      );
    }
    
export default CryptoList;