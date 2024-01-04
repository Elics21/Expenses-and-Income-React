import React, { useState } from "react";
import "./loginForm.scss";
import TextField from "../../common/form/textField";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handleSubmit = (event) => {
        event.preventDefault();
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
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
            />
            <button type="submit" className="form-btn">
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
