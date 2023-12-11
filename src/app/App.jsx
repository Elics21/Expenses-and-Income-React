import React from "react";
import Main from "./components/layouts/main";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import History from "./components/layouts/history";
import UserLogin from "./components/layouts/userLogin";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/history/" element={<History />} />
                <Route path="/user-login/" element={<UserLogin />} />
            </Routes>
        </>
    );
}

export default App;
