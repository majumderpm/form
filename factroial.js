// let factroial = 1;
// for(let i = 5; i >= 1; i-- ){
//     factroial = factroial * i;
// }

// console.log(factroial);


function factroial(i){
    if(i == 1){
        return 1;
    }
    returni * factroial(i-1);
}

const result = factroial(5);
console.log(result);