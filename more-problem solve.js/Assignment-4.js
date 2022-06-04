// problem-1(ana To Vori)

function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please enter a valid number';
    }
    else if (ana < 0) {
        return 'Enter the valid number ';
    }
    //1 ana=0.0625 vori
    let vori = ana * 0.0625;
    return vori;
}
let totalAna = anaToVori(16);
console.log(totalAna);

// // problem-2 (order of food)
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'input the valid quantity';
    }
    else if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please, input the valid quantity';
    }
    //per price of food
    const perSingaraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;

    // price calculation 
    const singaraPriceQuantity = singaraQuantity * perSingaraPrice;
    const somuchaPriceQuantity = somuchaQuantity * perSomuchaPrice;
    const jilapiPriceQuantity = jilapiQuantity * perJilapiPrice;

    // total price calculation
    const totalPrice = singaraPriceQuantity + somuchaPriceQuantity + jilapiPriceQuantity;
    return totalPrice;
}
const orderPrice = pandaCost(3, 2, 1);
console.log(orderPrice);

// //problem-3(Picnic Budget of all persons)

function picnicBudget(totalPerson) {
    if (typeof totalPerson != 'number') {
        return 'Enter the valid person';
    }
    else if (totalPerson < 0) {
        return 'Enter the valid person';
    }
    //picnic budget of amount
    const first100Amount = 5000;
    const second100Amount = 4000;
    const restAmount = 3000;
    //calculation of picnicBudget
    if (totalPerson <= 100) {
        let count = totalPerson * first100Amount;
        return count;

    }
    else if (totalPerson <= 200) {
        let firstTotalCost = 100 * first100Amount;
        let remainingPerson = totalPerson - 100;
        const secondTotalCost = remainingPerson * second100Amount;
        let amount = firstTotalCost + secondTotalCost;
        return amount;

    }
    else {
        let firstTotalCost = 100 * first100Amount;
        let secondTotalCost = 100 * second100Amount;
        let restPerson = (totalPerson - 200);
        let lastTotalCost = restPerson * restAmount;
        let cost = (firstTotalCost + secondTotalCost + lastTotalCost)
        return cost;
    }
}
const result = picnicBudget(101);
console.log(result);

//problem-4(oddfriends)
function oddFriend(friends) {
    if (typeof friends != 'object') {
        return 'Please enter a valid array';
    }

    for (let i = 0; i < friends.length; i++) {

        let element = friends[i];

        if (element.length % 2 == 1) {

            return element;
            break;
        }
    }

}
let friendsName = ['Kamrul', 'Protham', 'Samiha', 'Anik', 'Sumon', 'Sajid'];
let friend = oddFriend(friendsName);
console.log(friend);