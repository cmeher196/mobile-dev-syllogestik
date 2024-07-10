// // let x = 12;

// // function xmap() {
// //     let x = 14;
// //     console.log("i m from func:::"+x);
// // }

// // xmap();
// // console.log("i m outside funct:::"+x);

// // //o/p:
// //i m from func:::14
// // i m outside funct:::12

// // const x = 12;//final variable

// // function xmap() {
// //     // let x = 14;
// //   //  x = 20 // TypeError: Assignment to constant variable.
// //     const x = 20 
// //     //i m from func:::20
// //     console.log("i m from func:::"+x);
// // }

// // xmap();
// // console.log("i m outside funct:::"+x);
// //i m outside funct:::12

// var x = 12;
// console.log("i m after var declartion:: "+ typeof x)

// function xmap() {
//     // let x = 14;
//   //  x = 20 // TypeError: Assignment to constant variable.
//     x = "201" 
//     console.log("i m after var reassigning: "+ typeof x)

//     //i m from func:::20
//     console.log("i m from func:::"+x);
// }

// xmap();
// console.log("i m outside funct:::"+x);

// let student ={
//     "college" :"SIT",
//     "rollno" : "SIT_ECE_123"

//  }

//  console.log("Student college name -->"+ student.college);

//  let person = new Object()

//  person.name ="Raj";
//  person.age = "23";
//  person.career = "BTECH"

//  console.log("Person name ===>"+person.name);

//Array:

let arr = [1,2,3,4,5,6,7,8]

console.log("initial array--\n"+arr);
arr.push(10)


console.log("after push operation array--\n"+arr);

// arr.forEach(function(x) {
//     console.log("from each loop-->"+x);
// });

// let resultArr = new Array()
// resultArr = arr.map(function (x) {
//     return x>4 //boolean
// });

// console.log("res array--\n"+resultArr);

// console.log("length of original arr:::"+arr.length);
// console.log(`length of new result array is :::${resultArr.length}`);


//filter()
let filterArray = arr.filter(function (val) {
    return val > 5;
});


console.log("length of original arr:::"+arr.length);
console.log(`length of new result array is :::${filterArray.length}`);

if(arr.includes(10)){
    console.log("num 10 exists");
}else{
    console.log("num 10 doesnt exist");
}


