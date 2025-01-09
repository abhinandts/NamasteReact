
import ReactDOM from 'react-dom/client'

const HeadingComponent = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg' />
            </div>

            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
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

const resList = [
    {
        "restaurantName": "Spice Villa",
        "cuisine": "Indian",
        "starRating": 4.5,
        "deliveryTime": "30 mins"
    },
    {
        "restaurantName": "Pasta Paradise",
        "cuisine": "Italian",
        "starRating": 4.2,
        "deliveryTime": "25 mins"
    },
    {
        "restaurantName": "Sushi Central",
        "cuisine": "Japanese",
        "starRating": 4.8,
        "deliveryTime": "35 mins"
    },
    {
        "restaurantName": "Burger Haven",
        "cuisine": "American",
        "starRating": 4.3,
        "deliveryTime": "20 mins"
    },
    {
        "restaurantName": "Green Delight",
        "cuisine": "Vegan",
        "starRating": 4.7,
        "deliveryTime": "40 mins"
    },
    {
        "restaurantName": "Taco Fiesta",
        "cuisine": "Mexican",
        "starRating": 4.1,
        "deliveryTime": "30 mins"
    },
    {
        "restaurantName": "Dragon Wok",
        "cuisine": "Chinese",
        "starRating": 4.6,
        "deliveryTime": "25 mins"
    },
    {
        "restaurantName": "The French Table",
        "cuisine": "French",
        "starRating": 4.9,
        "deliveryTime": "45 mins"
    }
]


const Body = () => {
    return (
        <div className='body'>
            <div className='search' >
                <h3>Search</h3>
            </div>
            <div className='res-container'>

                {
                    resList.map((restaurant,index) => <RestaurantCard key={index} resData={restaurant} />)
                }

z
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <HeadingComponent />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);