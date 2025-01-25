
import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [resListSV, setResListSV] = useState([]);

    const [searchInput, setSearchInput] = useState("");


    useEffect(() => fetchData(), []);

    const fetchData = async () => {

        const data = await fetch('http://localhost:5000/api/get-products');

        const gson = await data.json();

        console.log(gson);

        setTimeout(() => {
            setResListSV(gson)
            setRestaurants(gson)
        }, 1000)
    }

    return resListSV.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='tab' >

                <button className="filter-btn"
                    onClick={() =>
                        setResListSV(resListSV.filter(res => res.price > 10000))
                    }>
                    Top Restaurants
                </button>

                <input type="text" placeholder="title"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                ></input>

                <button className="search-btn"
                    onClick={() => {
                        let filtered = restaurants.filter(res => res.title.toLowerCase().includes(searchInput.toLowerCase()))
                        setResListSV(filtered)
                    }
                    }>
                    Search
                </button>

            </div>
            <div className='res-container'>
                {
                    resListSV.map(
                        (restaurant, index) =>
                            <RestaurantCard key={index} resData={restaurant} />
                    )
                }
            </div>
        </div>
    )
}

export default Body;