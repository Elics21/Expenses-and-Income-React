import React, { useState } from "react";
import TextField from "../../common/form/textField";
import { Link } from "react-router-dom";

const RegisterFrom = () => {
    const [data, setData] = useState({ email: "", password: "", username: "" });
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = ({ target }) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Register</h1>
            <TextField
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
            />
            <TextField
                label="Username"
                type="text"
                name="username"
                onChange={handleChange}
                value={data.username}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
            />
            <button type="submit" className="form-btn">
                Зарегистрироваться
            </button>
            <p className="login-from-action">
                Есть аккаунт? <Link to="/user-login/login">Войти</Link>
            </p>
        </form>
    );
};

export default RegisterFrom;
