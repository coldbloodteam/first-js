//Task 1
// function sumTwoNumber(a,b){
//     return console.log(a+b);
// }
// sumTwoNumber(10,5);

//Task 2
// function checkNumber(num){
//     if(num > 0){
//         return console.log("Positive");
//     }
//     if(num < 0){
//         return console.log("Negative");
//     }
//     if(num == 0){
//         return console.log("Zero");
//     }
// }
// checkNumber(5);

//Task3 

// function generateMultiplicationTable(num){
//     for(let i = 1;i <= 10;i++){
//         console.log(`${num} * ${i} = ` + num * i);
//     }
// }
// generateMultiplicationTable(5);

//Task 4 
// function endNine(num){
//     if (num % 10 == 9){
//         return console.log("Yes");
//     }
//     else {
//         return console.log("No");
//     }
// }

// endNine(129);
// endNine(123);

// Task 5
// function century (year){
//     return console.log(Math.ceil(year / 100));
// }
// century(0);
// century(1900);
// century(2000);

//ClassTask 16.01.2024

//Task1
// function longestTime(h,m,s){
//     let first = ((h * 60) * 60);
//     let second = m * 60;
//     let third  = s;
//     if(first > second && first > third){
//         return h;
//     }
//     if(second > first && second > third){
//         return m;
//     }
//     if(third > first && third > second){
//         return s;
//     }
// }
// console.log(longestTime(1,59,3598));
// console.log(longestTime(2,300,15000));
// console.log(longestTime(15,955,59400));

//Task 2

// function same(num){
//     let last = num % 10;
//     let second = Math.round((num / 10) % 10);
//     let first = Math.round((num / 100) % 10);
//     if(first == second){
//         return true;
//     }
//     if(first == last){
//         return true;
//     }
//     if(last == second){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(same(332));

//Task 3
// function largestSwap(num){
//     let last = num % 10;
//     let first = Math.round((num / 10) % 10);
//     let result = ((last * 10) + first);
//     if(num > result){
//         return console.log(true);
//     }
//     else{
//         return console.log(false);
//     }
// }
// largestSwap(14);
// largestSwap(53);

//Task 4
// function addUp(num){
//     let sum = 0;
//     for(let i = 1; i <= num;i++){
//         sum += i;
//     }
//     return console.log(sum);
// }
// addUp(4);
// addUp(13);
// addUp(600);

//Task 5

// function different(a,b,c){
//     if(a == b){
//         return console.log(3);
//     }
//     if(a == c){
//         return console.log(2);
//     }
//     if(b == c){
//         return console.log(1);
//     }
// }
// different(5,5,10);
// different(897,1,1);
// different(811,100,811);

//Task 6

// function evenNum(a,b){
//     let sum = 0;
//     if (a < b){
//     for(let i = a; i <= b;i++){
//         if(i % 2 == 0){
//             sum += i;
//         }
//     }
//     }

//     if (a > b){
//         for(let i = b; i <= a;i++){
//             if(i % 2 == 0){
//                 sum += i;
//             }
//         }
//         }
//     return console.log(sum);
// }
// evenNum(-5,-3);
// evenNum(-1,-1);
// evenNum(-14,-18);

//Task 7
