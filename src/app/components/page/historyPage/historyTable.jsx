import React, { useEffect, useState } from "react";
import api from "../../../api";
import HistoryTableItem from "./historyTableItem";
import Pagination from "./pagination";
import { paginate } from "../../../utils/paginate";

const HistoryTable = () => {
    const [operations, setOperations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    const pageSize = 5;

    const countOperation = operations.length;

    const operationCrop = paginate(operations, currentPage, pageSize);

    const handeleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="history-table">
                {operationCrop.map((operation) => (
                    <HistoryTableItem
                        key={operation.id}
                        operation={operation}
                        onDelete={handeleDelete}
                    />
                ))}
            </div>
            <div>
                <Pagination
                    currentPage={currentPage}
                    pageSize={pageSize}
                    count={countOperation}
                    onChagePage={handeleChangePage}
                />
            </div>
        </>
    );
};

export default HistoryTable;
