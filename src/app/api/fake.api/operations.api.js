const operations = [
    {
        id: 1,
        type: "income",
        value: 1500,
        title: "Зарплата"
    },
    {
        id: 2,
        type: "bills",
        value: 300,
        title: "Оплата электричества"
    },
    {
        id: 3,
        type: "expenses",
        value: 1000,
        title: "Покупка монитора"
    },
    {
        id: 4,
        type: "income",
        value: 3500,
        title: "Премия"
    }
];

const fetchAllOperations = () => {
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(operations);
        }, 1000);
    });
};

export default {
    fetchAllOperations
};
