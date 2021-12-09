import React,{useState} from "react";
import SearchBar from "./SearchBar";
import ProjectDetail from "./ProjectDetail";
import CryptoList from './CryptoList';
import { Route, Routes } from "react-router";
import TopMovers from "./TopMovers";

function CryptoPage({name, table, global }) {
    const [detail, setDetail] = useState([]);
    const [searchContent, setSearch] = useState('');
    return (      
        <div>
            <SearchBar searchContent={searchContent} setSearch={setSearch}/>
            <Routes>
                <Route path=":id" element={<ProjectDetail detail={detail} setDetail={setDetail}/>} />
            </Routes>
            {/* <TopMovers/> */}
            <CryptoList table={table}/>
        </div>
      );
    }
export default CryptoPage;