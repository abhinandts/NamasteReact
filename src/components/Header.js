
import { LOGO_URL } from "../utils/constants";

import { useState,useEffect } from "react";

const Header = () => {

    let [superBtnName,setSuperBtnName] = useState("Log In");

    useEffect(()=>console.log("useEffect invoked"),[superBtnName]);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
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