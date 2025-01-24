
import { LOGO_URL } from "../utils/constants";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    let [superBtnName, setSuperBtnName] = useState("Log In");

    useEffect(() => console.log("useEffect invoked"), [superBtnName]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='nav-links'>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/about" >About Us</Link >
                    </li>
                    <li>Cart</li>
                    <li>
                        <button className="login"
                            onClick={() => {
                                setSuperBtnName("Log Out");
                                console.log(superBtnName);
                            }}
                        >{superBtnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;