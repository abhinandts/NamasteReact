
import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRes, setFilteredRes] = useState(resList);

    useEffect(() => console.log("useEffect called"), []);

    const [searchText, setSearchText] = useState("");

    return (
        <div className='body'>
            <div className='filter' >

                <div className="search-div">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />

                    <button onClick={() => {

                        const filteredData = listOfRestaurants.filter(res => res.restaurantName.toLowerCase().includes(searchText.toLowerCase()))

                        setFilteredRes(filteredData);

                    }}>Search</button>

                </div>

                <button className="filter-btn"
                    onClick={() => {
                        const filtered = filteredRes.filter(res => res.starRating > 4.5);
                        setFilteredRes(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>

            </div>
            <div className='res-container'>

                {
                    filteredRes.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant} />)
                }

            </div>
        </div>
    )
}

export default Body;