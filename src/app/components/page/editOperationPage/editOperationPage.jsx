import React, { useEffect, useState } from "react";
import "./editOperationPage.scss";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import api from "../../../api";
import PropTypes from "prop-types";
import TextAreaField from "../../common/form/textAreaField";
import { useNavigate, useParams } from "react-router-dom";

const EditOperationPage = () => {
    const { operationId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState();
    const [operation, setOperation] = useState();
    const [data, setData] = useState({
        type: "",
        title: "",
        value: 0,
        comment: ""
    });
    useEffect(() => {
        setIsLoading(true);
        api.operations.getById(operationId).then((operation) => {
            setOperation(operation);
            setData((prevState) => ({
                ...prevState,
                type: operation.type,
                title: operation.title,
                value: operation.value,
                comment: operation.comment
            }));
        });
    }, []);
    useEffect(() => {
        if (operation) {
            setIsLoading(false);
        }
    }, [operation]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        api.operations
            .update(operationId, data)
            .then((data) => navigate("/history"));
    };

    const operationTypes = [
        {
            label: "Доходы",
            value: "income"
        },
        {
            label: "Счета",
            value: "bills"
        },
        {
            label: "Расходы",
            value: "expenses"
        }
    ];
    return (
        <div>
            {!isLoading ? (
                <form onSubmit={handleSubmit} className="edit-form">
                    <TextField
                        label="Заголовок"
                        type="text"
                        value={data.title}
                        name="title"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Стоимость"
                        type="number"
                        value={data.value}
                        name="value"
                        onChange={handleChange}
                    />
                    <SelectField
                        label="Выберите тип: "
                        options={operationTypes}
                        value={data.type}
                        defaultOption="Выберите..."
                        onChange={handleChange}
                        name="type"
                    />
                    <TextAreaField
                        label="Комментарий"
                        type="text"
                        value={data.comment}
                        name="comment"
                        onChange={handleChange}
                    />
                    <button type="submit" className="form-btn">
                        Обновить
                    </button>
                </form>
            ) : (
                "loading"
            )}
        </div>
    );
};

EditOperationPage.propTypes = {
    operationId: PropTypes.string
};
export default EditOperationPage;
