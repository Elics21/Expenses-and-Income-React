import React from "react";
import trashImg from "../../../../assets/trash.png";
import penImg from "../../../../assets/pen.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HistoryTableItem = ({ operation, onDelete }) => {
    const navigate = useNavigate();
    const renderTitle = (typeOperation) => {
        if (typeOperation === "income") {
            return "Доходы";
        }
        if (typeOperation === "bills") {
            return "Счета";
        }
        if (typeOperation === "expenses") {
            return "Расходы";
        }
    };
    const handleEdit = () => {
        navigate(`${operation.id}/edit`);
    };
    return (
        <div className="history-table-item">
            <div className="history-table-item-title">{operation.title}</div>
            <div className="history-table-item-value">{operation.value}</div>
            <div className="history-table-item-type">
                {renderTitle(operation.type)}
            </div>
            <div className="history-table-item-descr">{operation.comment}</div>
            <div className="history-table-item-buttons">
                <button className="history-table-item-btn" onClick={handleEdit}>
                    <img src={penImg} alt="" />
                </button>
                <button
                    className="history-table-item-btn"
                    onClick={() => onDelete(operation.id)}
                >
                    <img src={trashImg} alt="" />
                </button>
            </div>
        </div>
    );
};

HistoryTableItem.propTypes = {
    operation: PropTypes.object.isRequired,
    onDelete: PropTypes.func
};

export default HistoryTableItem;
