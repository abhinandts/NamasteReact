
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className='body'>
            <div className='filter' >
                <button className="filter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(res => res.starRating > 4.5);
                        setListOfRestaurants(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>

                {
                    listOfRestaurants.map((restaurant, index) => <RestaurantCard key={index} resData={restaurant} />)
                }

            </div>
        </div>
    )
}

export default Body;