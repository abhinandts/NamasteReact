const RestaurantCard = (props) => {

    const { resData } = props;
    const { restaurantName, cuisine, starRating, deliveryTime } = resData;

    return (
        <div className='res-card'>
            <div className='res-logo'>
                <img alt='not working' src='https://static.vecteezy.com/system/resources/previews/015/677/818/non_2x/chicken-biryani-icon-a-dish-of-indian-and-arabic-cuisine-illustration-in-flat-style-vector.jpg' />
            </div>
            <h3>{restaurantName}</h3>
            <h4>{cuisine}</h4>

            <div className='time-star'>
                <h4>{starRating} ⭐</h4>
                <h4>{deliveryTime} </h4>
            </div>

        </div>
    )
}

export default RestaurantCard;