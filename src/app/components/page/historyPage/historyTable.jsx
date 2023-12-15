import React, { useEffect, useState } from "react";
import api from "../../../api";
import HistoryTableItem from "./historyTableItem";
import Pagination from "./pagination";
import { paginate } from "../../../utils/paginate";
import PropTypes from "prop-types";

const HistoryTable = ({ filter }) => {
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

    const operationsFitred =
        filter !== ""
            ? operations.filter((operation) => operation.type === filter)
            : operations;

    const operationCrop = paginate(operationsFitred, currentPage, pageSize);

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

HistoryTable.propTypes = {
    filter: PropTypes.string
};

export default HistoryTable;
