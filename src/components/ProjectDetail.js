import { info } from "autoprefixer";
import React, { useEffect } from "react";
import { Routes,Route,useParams } from "react-router";

function ProjectDetail({ detail,setDetail }) {

    // Declare variables

    const BASE_URL = 'https://api.coingecko.com/api/v3/coins'
    const params = useParams();

    // Helper function to create smaller data object

    function createObj(data) {

        let info = {};

        // Market 

        info['name'] = data.name;
        info['image'] = data.image.small;
        info['price'] = data.market_data.current_price.usd;
        info['market'] = data.market_data.market_cap.usd;
        info['volume'] = data.market_data.total_volume.usd;
        info['dod'] = data.market_data.price_change_24h_in_currency.usd;
        info['wow'] = `${data.market_data.price_change_percentage_7d} %`;
        info['dod'] = Math.floor(data.market_data.price_change_24h_in_currency.usd);
        info['wow'] = data.market_data.price_change_percentage_7d.toFixed(1);
        info['rank'] = data.market_cap_rank;

        // Social

        info['twitter'] = data.community_data.twitter_followers;
        info['reddit'] = data.community_data.reddit_subscribers;
        info['reddit-active-posts'] = data.community_data.reddit_average_posts_48h.toFixed(1);
        info['reddit-active-accounts'] = data.community_data.reddit_accounts_active_48h;

        // Dev

        info['subs'] = data.developer_data.subscribers;
        info['forks'] = data.developer_data.forks;
        info['stars'] = data.developer_data.stars;
        info['commits'] = data.developer_data.commit_count_4_weeks;

        return info;
    }

    // Fetch data on component Render
    useEffect(() => {
        fetch(`${BASE_URL}/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            const projectInfo = createObj(data);
            setDetail(projectInfo);
        })
    }, [detail])

    // JSX to display

    return <h1>{detail.name}</h1>
}

export default ProjectDetail;