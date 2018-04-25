var meals = {};

//var meals = new Object();
//This method is NOT preffered. use {} when possible

var meals = { breakfast: "oatmeal" };
// var meals = new Object({breakfast: 'oatmeal' });
//Same code, but significantly more sloppy

//Breakfast is the KEY ; "oatmeal" is the VALUE

console.log(meals);
//logs: {breakfast: 'oatmeal'}


var meals = { 
  breakfast: "oatmeal",
  breakfast: "bacon",
  breakfast: "eggs"
};

console.log(meals);
//Logs {breakfast: "eggs"}
//only the last value pair gets SAVED
//as if we change the var in a later line

var objects = {
  RollingStones: 'Jumpin Jack Flash',
  Beatles: 'Eleanor Rigby',
};
