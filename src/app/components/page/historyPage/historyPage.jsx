import React from "react";
import HistoryList from "../../ui/historyComp/historyList";
import { useParams } from "react-router-dom";
import EditOperationPage from "../editOperationPage";

const HistoryPage = () => {
    const { operationId, edit } = useParams();
    if (operationId !== undefined && edit !== undefined) {
        return <EditOperationPage operationId={operationId} />;
    }
    return <HistoryList />;
};

export default HistoryPage;
