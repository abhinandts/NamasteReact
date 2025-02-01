
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { MENU_API } from "../utils/constants";

const Menu = () => {

    const [resDetails, setResDetails] = useState({});

    const { menuid } = useParams();

    useEffect(() => {
        const getMenu = async () => {
            console.log("get Menu is workinggggggggggg");
            const data = await fetch(MENU_API + menuid);
            const json = await data.json();

            setResDetails(json);
        }
        getMenu()
    }, []);

    return (
        <div>
            This is the menu of the Restaurant...
            <h1>{resDetails.title}</h1>
            <h1>{resDetails.price}</h1>
            <h2>{resDetails.description}</h2>

        </div>
    )
}

export default Menu;