import React,{useState} from "react";
import SearchBar from "./SearchBar";
import ProjectDetail from "./ProjectDetail";
import CryptoList from './CryptoList';
import { Route, Routes } from "react-router";

function CryptoPage({name, table, global}) {
    const [selected, setSelected] = useState(false)
    const [detail, setDetail] = useState([]);
    const [searchContent, setSearch] = useState('');
    return (      
        <div>
            <SearchBar searchContent={searchContent} setSearch={setSearch}/>
            <Routes>
                <Route path=":id" element={<ProjectDetail selected={selected}detail={detail} setDetail={setDetail}/>} />
            </Routes>
            <CryptoList selected={selected} setSelected={setSelected} table={table}/>
        </div>
      );
    }
    
export default CryptoPage;