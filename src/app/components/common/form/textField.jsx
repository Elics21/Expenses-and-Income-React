import React from "react";
import "./textField.scss";
import PropTypes from "prop-types";

const TextField = ({ label, type, placeholder, name, value, onChange }) => {
    return (
        <div className="form-text">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className="login-form-text"
            />
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default TextField;
