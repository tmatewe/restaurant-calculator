//array of food
var food={'burgers':100,'ribs and combo':149,'sea food':220,'steak and chips':220,'salad and sides':68};
//array of drinks
var drinks={'beer':30, 'wine':25,'hot drinks':20,'mixed drinks':27,'barley':33};
var foodLits=document.getElementById('food-lists');
var drinkLists=document.getElementById('drink-lists');
var foodArr=['burgers','ribs and combo','sea food','steak and chips','salad and sides'];
var drinksArr=['beer','wine','hot drinks','mixed drinks','barkey'];
for(var foodStuff of foodArr){
    var foodItems=document.createElement('li')
    foodItems.innerHTML=foodStuff;
    foodLits.appendChild(foodItems)
}
for(var drinkStuff of drinksArr){
    var drinkItems=document.createElement('li')
    drinkItems.innerHTML=drinkStuff;
    drinkLists.appendChild(drinkItems)
}
var foodAmt= document.getElementById('food-price')
var foodChoice=document.getElementById('food');
function orderFood(){
    foodAmt.value=food[foodChoice.value]
}
var drinkAmt=document.getElementById('drink-price')
var tip=document.getElementById('tip')
var totalAmt=document.getElementById('total-price')
function orderDrink(){
    console.log('button clicked')
    var drinkChoice=document.getElementById('drinks').value;
    drinkAmt.value=drinks[drinkChoice]
    var tipAmt =(parseFloat(drinkAmt.value)+parseFloat(foodAmt.value))*0.1
    tip.value=tipAmt;
    totalAmt.value=parseFloat(tip.value)+parseFloat(drinkAmt.value)+parseFloat(foodAmt.value)
}

var buttons=document.getElementsByClassName('btn');
for(var i=0; i<buttons.length; i++){
    buttons[0].addEventListener('click',orderFood)
    buttons[1].addEventListener('click',orderDrink)
}
