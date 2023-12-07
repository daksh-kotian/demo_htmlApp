// let a=10;
// let b=15;
// const c="20"
// var d=21

// console.log(a+b+c+d)
// console.log(a+b+c+d)

// for (let i = 1;i<10;i++){
//     console.log(i);
//    process.stdout.write(i + " ");
// }


// //variables
// let numric = 10
// let floating = 10.998
// let string = "hello, it's a string"
// let boolean = false;
// let object = { key:"value", name:"Daksh", age: 15 }
// let array = ["arr1", "arr2", "arr3"]

// console.log(numric, floating, string, boolean, array[0], object)

// //if-else statement

// let temp = 24

// if(temp >= 30){
//     console.log("it's hot outside")
// }
// else if(temp>= 20 && temp<=29){
//     console.log("its moderate")
// }
// else{
//     console.log("it's cold")
// }

// //for loop

// for (let i = 0; i < 5; i++) {
//     console.log(i); 
//   }
  
// // while loop

// let i = 0;
// while (i < 5) {
//   console.log(i); 
//   i++;
// }

// // Functions
// let x = myFun(4, 3);
// console.log(x)

// function myFun(a, b) {
//   return a * b;
// }

let x = function (a,b){
    return a+b;
}

console.log(x(1,2));

let x2 = (a,b) => {
    return a+b;
}

console.log(x2(1,2));

let obj = {
    1 : 1
}
obj.key = 2;
console.log(obj.key);
arr = (Object.keys(obj));
console.log(typeof(arr[0]));
 
// async and await
const getData = async () => {
	let y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);
