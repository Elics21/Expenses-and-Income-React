import React from "react";
import "./form.scss";
import PropTypes from "prop-types";

const TextAreaField = ({
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    InputClassName
}) => {
    const handeleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="form-text">
            <label htmlFor={name}>{label}</label>
            <textarea
                type={type}
                id={name}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handeleChange}
                className={InputClassName}
            ></textarea>
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    InputClassName: PropTypes.string
};

export default TextAreaField;
