import React, { useState } from "react";
import addingImg from "../../../../assets/plus.png";
import HistoryTable from "./historyTable";
import HistoryFilters from "./historyFiters";

const HistoryList = () => {
    const [filter, setFilter] = useState("");
    const handeleSelectFilter = (type) => {
        if (type === "reset") {
            setFilter("");
            return;
        }
        setFilter(type);
    };
    return (
        <div className="history">
            <div className="history-menu">
                <h2>История операций</h2>
                <div className="history-menu-btn">
                    <HistoryFilters
                        filter={filter}
                        onSelectFilter={handeleSelectFilter}
                    />
                    <button className="history-add-op">
                        Добавить операцию
                        <img src={addingImg} alt="" />
                    </button>
                </div>
            </div>
            <HistoryTable filter={filter} />
        </div>
    );
};

export default HistoryList;
