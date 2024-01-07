import React from "react";
import Main from "./layouts/main";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import History from "./layouts/history";
import UserLogin from "./layouts/userLogin";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/history/" element={<History />} />
                <Route path="/user-login/:type?" element={<UserLogin />} />
            </Routes>
        </>
    );
}

export default App;
