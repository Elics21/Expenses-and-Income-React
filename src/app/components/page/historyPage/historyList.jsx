import React from "react";
import addingImg from "../../../../assets/plus.png";
import HistoryTable from "./historyTable";

const HistoryList = () => {
    return (
        <div className="history">
            <div className="history-menu">
                <h2>История операций</h2>
                <div className="history-menu-btn">
                    <button className="history-filtred">Фильтры</button>
                    <button className="history-add-op">
                        Добавить операцию
                        <img src={addingImg} alt="" />
                    </button>
                </div>
            </div>
            <HistoryTable />
        </div>
    );
};

export default HistoryList;
