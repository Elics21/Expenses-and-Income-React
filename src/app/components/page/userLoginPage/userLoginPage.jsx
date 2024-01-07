import React from "react";
import LoginForm from "../../ui/userLoginComp/loginForm";
import { useParams } from "react-router-dom";
import RegisterFrom from "../../ui/userLoginComp/registerFrom";

const UserLoginPage = () => {
    const { type } = useParams();
    if (type === "register") {
        return <RegisterFrom />;
    }
    return <LoginForm />;
};

export default UserLoginPage;
