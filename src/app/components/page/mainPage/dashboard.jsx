import React from "react";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-btns">
                <button className="dashboard-btn active">Доходы</button>
                <button className="dashboard-btn">Расходы</button>
            </div>
            <div className="graph"></div>
        </div>
    );
};

export default Dashboard;
