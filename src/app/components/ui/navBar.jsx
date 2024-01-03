import React from "react";
import userPng from "../../../assets/user.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const isPageActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <ul className="nav">
            <li className={isPageActive("/") ? "active" : ""}>
                <Link to="/">Главная</Link>
            </li>
            <li className={isPageActive("/history") ? "active" : ""}>
                <Link to="/history">История</Link>
            </li>
            <li className="user-name">Username</li>
            <li className={isPageActive("/user-login") ? "active" : ""}>
                <Link to="/user-login">
                    <img className="user-img" src={userPng} alt="user" />
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
