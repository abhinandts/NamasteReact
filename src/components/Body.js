
import { useState, useEffect } from "react";
import { Link } from "react-router";

import RestaurantCard from "./RestaurantCard";

import { PRODUCTS_API } from "../utils/constants";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [resListSV, setResListSV] = useState([]);

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchData = async () => {

            const data = await fetch(PRODUCTS_API);

            const json = await data.json();

            setResListSV(json);
            setRestaurants(json);
        }

        fetchData()
    }, []);


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
                        (restaurant) =>
                            <Link
                                key={restaurant.id}
                                to={"restaurants/" + restaurant._id}
                            >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;