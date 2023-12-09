import React from "react";
import userPng from "../../assets/user.png";

const NavBar = () => {
    return (
        <ul className="nav">
            <li>Главнвя</li>
            <li>История</li>
            <li className="user-name">Username</li>
            <li>
                <img className="user-img" src={userPng} />
            </li>
        </ul>
    );
};

export default NavBar;
