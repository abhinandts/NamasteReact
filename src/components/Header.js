
import { useState } from 'react'
import { Link } from 'react-router';

import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [logBtn, setLogBtn] = useState('Login');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='nav-links'>
                <ul>
                    <li> <Link to={'/'} >Home</Link> </li>
                    <li> <Link to={'/about'} >About </Link> </li>
                    <li> <Link to={'/contact'} >Contact Us</Link> </li>

                    <li>
                        <button
                            onClick={
                                () => logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login")
                            }
                        >
                            {logBtn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;