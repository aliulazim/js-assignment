/*__________________Problem One__________________*/

// kilometerToMeter

function kilometerToMeter(kilometer) {
    let meter = kilometer * 1000; //1 kilometer = 1000 meter.
    return meter;
}
const convertToMeter = kilometerToMeter();
console.log(convertToMeter);




/*__________________Problem two__________________*/

// budgetCalculator

function budgetCalculator(watch, phone, laptop) {  
    let totalWatch = watch * 50; // 1 Watch buy need 50 taka.
    let totalPhone = phone * 100; // 1 Phone buy need 100 taka.
    let totalLaptop = laptop * 500; // 1 Laptop buy need 500 taka.

    const totalProduct = totalWatch + totalPhone + totalLaptop;
    return totalProduct;
}
const totalCost = budgetCalculator();
console.log(totalCost);



/*__________________Problem Three__________________*/

// hotelCost


function hotelCost(days){
    let cost = 0;
    if (days >= 1 && days <= 10 ){
        cost = days * 100;
    }
    else if (days >= 11 && days <= 20){
        firstTenDays = 10 * 100;
        remainingDays = days - 10;
        secondTenDays = remainingDays * 80;
        cost = firstTenDays + secondTenDays;
    }
    else if (days >= 21){
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        remainingDays = days - 20;
        lastDays = remainingDays * 50;
        cost = firstTenDays + secondTenDays + lastDays;
    }
    else if (days <= 0) {
        cost = "Please Input a valid Number";
    }
    return cost;
}
const totolCost = hotelCost();
console.log(totolCost);





/*__________________Problem Four__________________*/


// megaFriend

function  megaFriend(name) {
    let friendName = name[0]; // Array 1st element index 0.

    for (let i = 0; i < name.length; i++) {
        const currentName = name[i];
        if (currentName.length > friendName.length) {
            friendName = currentName;
            
        }
    }
    return friendName;

}
const longestName = megaFriend([]);
console.log(longestName);







