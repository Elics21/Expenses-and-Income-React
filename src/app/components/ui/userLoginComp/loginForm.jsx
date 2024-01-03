import React, { useState } from "react";
import "./loginForm.scss";
import TextField from "../../common/form/textField";

const LoginForm = () => {
    const [data, setData] = useState({ userName: "" });
    const handleSubmit = (event) => {
        console.log(event);
    };
    const handleChange = ({ target }) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
            <TextField
                label="UserName"
                type="text"
                name="userName"
                onChange={handleChange}
                value={data.userName}
            />
        </form>
    );
};

export default LoginForm;
