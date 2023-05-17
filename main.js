// ===========================================
// =============Homework 1====================
// ===========================================


let myArray = [5,8,15,16,25,28,24,28,45,44,78,90]

let sum = 0

for (let i=0; i<myArray.length; i++){
    let num = myArray[i]

    if (num % 2 == 0){

sum+=num

    }


}

console.log(sum)



// ===========================================
// =============Homework 2====================
// ===========================================

const calculator = {

    Brand: "Sony",
    model: "S-233",
    price: "100",

     add(a,b){
    return a+b
},

    subtract(a,b){
        return a-b
},

    divide(a,b){
        return a/b
},

    multiply(a,b){
        return a*b
    }

   
}



let addition =calculator.add(12,8)
let addition1= calculator.subtract(12,8)
let addition2= calculator.divide(12,8)
let addition3= calculator.multiply(12,8)


console.log(addition)
console.log(addition1)
console.log(addition2)
console.log(addition3)