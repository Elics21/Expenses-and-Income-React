import React from "react";
import PropTypes from "prop-types";
import "./form.scss";

const SelectField = ({
    label,
    options,
    name,
    value,
    defaultOption,
    onChange
}) => {
    const handeleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;
    return (
        <div className="form-select">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handeleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length > 0 &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
