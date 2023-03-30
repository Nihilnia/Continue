const dayTime = {
    breakfast: "oatmeal",
    lunch: "butter lmao"
}

const nightTime = "mac and cheese";

const backpackingMeals = {
    dayTime,
    nightTime
}

console.log(backpackingMeals);
console.log("Daytime meals;")
console.log("Breakfast: " + backpackingMeals.dayTime.breakfast);
console.log("Lunch: " + backpackingMeals.dayTime.lunch);

console.log("Nighttime meal;")
console.log(backpackingMeals.nightTime);


//Using Spread Operator we can put em together at same level

const backpackingMeals_2 = {
    ...dayTime,
    nightTime
}

console.log(backpackingMeals_2);
console.log(backpackingMeals_2.breakfast);
console.log(backpackingMeals_2.lunch);
console.log(backpackingMeals_2.nightTime);