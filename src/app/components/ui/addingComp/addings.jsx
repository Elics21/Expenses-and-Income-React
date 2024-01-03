import React from "react";
import AddingItem from "./addingItem";

const Addings = () => {
    return (
        <div className="adding">
            <AddingItem typeItem={"income"} />
            <AddingItem typeItem={"bills"} />
            <AddingItem typeItem={"expenses"} />
        </div>
    );
};

export default Addings;
