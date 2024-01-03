import React, { useEffect, useState } from "react";
import addingImg from "../../../../assets/plus.png";
import PropTypes from "prop-types";
import api from "../../../api";

const AddingItem = ({ typeItem }) => {
    const [operations, setOperations] = useState([]);
    useEffect(() => {
        api.operations
            .fetchAllOperations()
            .then((operation) => setOperations(operation));
    }, []);

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

    // Создание массива определенного типа
    const operationsType = operations.filter(
        (operations) => operations.type === typeItem
    );

    // Рендер операций подходящего типа
    const renderOperations = () =>
        operationsType.map((operation) => (
            <div key={operation.id} className="adding-item-wrapper">
                <div className="adding-item-title">{operation.title}</div>
                <div className="adding-item-value">{operation.value}</div>
            </div>
        ));

    const handeleAddOperation = () => {
        console.log("hello");
    };

    return (
        <div className="adding-item">
            <div className="adding-item-wrapper">
                <div className="adding-title">{renderTitle(typeItem)}</div>
                <a onClick={handeleAddOperation}>
                    <img
                        src={addingImg}
                        alt="adding-img"
                        className="adding-img"
                    />
                </a>
            </div>
            {operations.length !== 0 ? renderOperations() : "loading..."}
        </div>
    );
};

AddingItem.propTypes = {
    typeItem: PropTypes.string.isRequired
};

export default AddingItem;
