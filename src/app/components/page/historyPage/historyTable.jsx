import React, { useEffect, useState } from "react";
import api from "../../api";
import HistoryTableItem from "./historyTableItem";

const HistoryTable = () => {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        api.operations
            .fetchAllOperations()
            .then((operation) => setOperations(operation));
    }, []);
    if (operations.length === 0) {
        return "loading...";
    }

    const handeleDelete = (id) => {
        setOperations(operations.filter((user) => user.id !== id));
    };

    return (
        <div className="history-table">
            {operations.map((operation) => (
                <HistoryTableItem
                    key={operation.id}
                    operation={operation}
                    onDelete={handeleDelete}
                />
            ))}
        </div>
    );
};

export default HistoryTable;
