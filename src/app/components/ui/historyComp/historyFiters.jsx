import React, { useState } from "react";
import PropTypes from "prop-types";

const HistoryFilters = ({ filter, onSelectFilter }) => {
    const [isActive, setActive] = useState(false);

    const handeleOpenFilters = () => {
        setActive(!isActive);
    };

    const renderClassName = (typeItem) => {
        const name =
            "history-filtred-item " +
            (isActive ? "active" : "") +
            (filter === typeItem ? " selected" : "");
        return name;
    };
    console.log(filter);
    return (
        <div className="history-filtred-wrapper">
            <button
                className={renderClassName("income")}
                onClick={() => onSelectFilter("income")}
            >
                Доходы
            </button>
            <button
                className={renderClassName("bills")}
                onClick={() => onSelectFilter("bills")}
            >
                Счета
            </button>
            <button
                className={renderClassName("expenses")}
                onClick={() => onSelectFilter("expenses")}
            >
                Раходы
            </button>
            <button
                className={renderClassName()}
                onClick={() => onSelectFilter("reset")}
            >
                Сбросить фильтры
            </button>
            <button className="history-filtred" onClick={handeleOpenFilters}>
                Фильтры
            </button>
        </div>
    );
};

HistoryFilters.propTypes = {
    filter: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
};

export default HistoryFilters;
