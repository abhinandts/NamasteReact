
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";

const Body = () => {

    let [resListSV, setResListSV] = useState(resList);

    return (
        <div className='body'>
            <div className='search' >
                <button className="search-btn"
                    onClick={() =>
                        resListSV = setResListSV(resListSV.filter(res => res.starRating > 4.4))
                    }>
                    Top Restaurants
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