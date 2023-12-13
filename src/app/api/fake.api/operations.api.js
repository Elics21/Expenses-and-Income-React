const operations = [
    {
        id: 1,
        type: "income",
        value: 1500,
        title: "Зарплата",
        comment: "Поступление заработной платы в конце месяца."
    },
    {
        id: 2,
        type: "bills",
        value: 300,
        title: "Оплата электричества",
        comment: "Регулярная ежемесячная оплата за электроэнергию."
    },
    {
        id: 3,
        type: "expenses",
        value: 1000,
        title: "Покупка монитора",
        comment:
            "Приобретение нового монитора для повышения производительности."
    },
    {
        id: 4,
        type: "income",
        value: 3500,
        title: "Премия",
        comment: "Дополнительный доход в виде премии за успешную работу."
    },
    {
        id: 5,
        type: "bills",
        value: 200,
        title: "Оплата интернета",
        comment: "Ежемесячная оплата за высокоскоростной интернет."
    },
    {
        id: 6,
        type: "expenses",
        value: 500,
        title: "Покупка книг",
        comment: "Затраты на обновление домашней библиотеки."
    },
    {
        id: 7,
        type: "income",
        value: 1200,
        title: "Аренда квартиры",
        comment: "Поступление средств от сдачи в аренду жилья."
    },
    {
        id: 8,
        type: "expenses",
        value: 800,
        title: "Покупка одежды",
        comment: "Расходы на обновление гардероба."
    },
    {
        id: 9,
        type: "income",
        value: 2000,
        title: "Продажа старого ноутбука",
        comment: "Доход от продажи использованного ноутбука."
    },
    {
        id: 10,
        type: "expenses",
        value: 150,
        title: "Ресторан с друзьями",
        comment: "Расходы на ужин в ресторане с друзьями."
    },
    {
        id: 11,
        type: "income",
        value: 1800,
        title: "Консультация по проекту",
        comment: "Гонорар за консультацию по вопросам проекта."
    },
    {
        id: 12,
        type: "bills",
        value: 100,
        title: "Оплата мобильной связи",
        comment: "Ежемесячная оплата за мобильную связь."
    },
    {
        id: 13,
        type: "expenses",
        value: 700,
        title: "Путешествие на выходные",
        comment: "Расходы на короткое путешествие на выходных."
    },
    {
        id: 14,
        type: "income",
        value: 2500,
        title: "Продажа художественной работы",
        comment: "Доход от продажи собственной художественной работы."
    },
    {
        id: 15,
        type: "expenses",
        value: 1200,
        title: "Обучение новому курсу",
        comment: "Затраты на обучение новому профессиональному курсу."
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
