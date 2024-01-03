import React, { useState } from "react";
import PropTypes from "prop-types";

const HistoryFilters = ({ filterType, onSelectFilter }) => {
    const [isActive, setActive] = useState(false);

    const handeleOpenFilters = () => {
        setActive(!isActive);
    };

    const renderClassName = (typeItem) => {
        const name =
            "history-filtred-item " +
            (isActive ? "active" : "") +
            (filterType === typeItem ? " selected" : "");
        return name;
    };
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
    filterType: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
};

export default HistoryFilters;
