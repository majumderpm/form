// var apple = 40;
// var orange = 30;

// var totalPrice = apple + orange;
//  console.log(totalPrice);

// variable deckalartion

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log(sum);

// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i
// }

// console.log(sum);


function sum(i){
    if(i == 1) {
        return 1;
    }
   
    return i + sum(i - 1);
}
const result = sum(10);
console.log(result);