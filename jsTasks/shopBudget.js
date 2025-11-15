const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5,
        },
        {
            width: 15,
            length: 7,
        },
        {
            width: 20,
            length: 5,
        },
        {
            width: 8,
            length: 10,
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
};

function isBudgetEnough(data) {
    const mPerQube = data.shops.reduce((acc, item) => {
        return (acc += item.width * item.length * data.height);
    }, 0);
    return mPerQube * data.moneyPer1m3 < data.budget ? "Бюджета достаточно" : "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));
