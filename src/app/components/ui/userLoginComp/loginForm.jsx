import React, { useState } from "react";
import "./form.scss";
import TextField from "../../common/form/textField";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
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
            <p className="login-from-action">
                Нет аккаунта?{" "}
                <Link to="/user-login/register">Зарегистрироваться</Link>
            </p>
        </form>
    );
};

export default LoginForm;
