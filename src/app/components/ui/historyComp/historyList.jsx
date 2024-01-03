import React, { useState } from "react";
import addingImg from "../../../../assets/plus.png";
import HistoryTable from "./historyTable";
import HistoryFilters from "./historyFiters";

const HistoryList = () => {
    const [filterType, setFilterType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const handeleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handeleSelectFilter = (type) => {
        if (type === "reset") {
            setFilterType("");
            return;
        }
        setCurrentPage(1);
        setFilterType(type);
    };
    return (
        <div className="history">
            <div className="history-menu">
                <h2>История операций</h2>
                <div className="history-menu-btn">
                    <HistoryFilters
                        filterType={filterType}
                        onSelectFilter={handeleSelectFilter}
                    />
                    <button className="history-add-op">
                        Добавить операцию
                        <img src={addingImg} alt="" />
                    </button>
                </div>
            </div>
            <HistoryTable
                filterType={filterType}
                currentPage={currentPage}
                onChangePage={handeleChangePage}
            />
        </div>
    );
};

export default HistoryList;
