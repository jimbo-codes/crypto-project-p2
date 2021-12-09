import React, { useEffect } from "react";
import { Routes,Route,useParams } from "react-router";

function ProjectDetail({ detail,setDetail }) {

    // Declare variables
    
    const BASE_URL = 'https://api.coingecko.com/api/v3/coins'
    const params = useParams();
    console.log(params);

    // Fetch data on component Render

    useEffect(() => {
        fetch(`${BASE_URL}/${params.id}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }, [])

    return <h1>It is working</h1>
}

export default ProjectDetail;