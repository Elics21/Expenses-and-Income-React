import React from "react";
import AddingItem from "./addingItem";

const Adding = () => {
    return (
        <div className="adding">
            <AddingItem typeItem={"income"} />
            <AddingItem typeItem={"bills"} />
            <AddingItem typeItem={"expenses"} />
        </div>
    );
};

export default Adding;
