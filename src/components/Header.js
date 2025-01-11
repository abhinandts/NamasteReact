
import { LOGO_URL } from "../utils/constants";

import { useState } from "react";

const Header = () => {

    let btnName = "Log In";

    let [superBtnName,setSuperBtnName] = useState("Log In");

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