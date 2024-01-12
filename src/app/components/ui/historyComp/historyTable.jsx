import React, { useEffect, useState } from "react";
import api from "../../../api";
import HistoryTableItem from "./historyTableItem";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import PropTypes from "prop-types";

const HistoryTable = ({ filterType, currentPage, onChangePage }) => {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        api.operations.fetchAll().then((operation) => setOperations(operation));
    }, []);

    if (operations.length === 0) {
        return "loading...";
    }

    const handeleDelete = (id) => {
        setOperations(operations.filter((user) => user.id !== id));
    };

    const pageSize = 5;

    const operationsFitred =
        filterType !== ""
            ? operations.filter((operation) => operation.type === filterType)
            : operations;

    const operationCrop = paginate(operationsFitred, currentPage, pageSize);
    const countOperation = operationsFitred.length;

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
                    onChangePage={onChangePage}
                />
            </div>
        </>
    );
};

HistoryTable.propTypes = {
    filterType: PropTypes.string,
    currentPage: PropTypes.number,
    onChangePage: PropTypes.func
};

export default HistoryTable;
