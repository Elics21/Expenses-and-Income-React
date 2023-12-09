import React from "react";
import addingImg from "../../assets/plus.png";

const Adding = () => {
    return (
        <div className="adding-wrapper">
            <div className="adding">
                <div className="adding-title">Доходы</div>
                <img src={addingImg} alt="adding-img" className="adding-img" />
            </div>
            <div className="adding">
                <div className="adding-title">Счета</div>
                <img src={addingImg} alt="adding-img" className="adding-img" />
            </div>
            <div className="adding">
                <div className="adding-title">Расходы</div>
                <img src={addingImg} alt="adding-img" className="adding-img" />
            </div>
        </div>
    );
};

export default Adding;
