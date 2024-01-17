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

//Task 8
// function maxNum(num){
//     let result = 0;
//     for(let i = num; i > 0; i = Math.round(i / 10)){
//         if (result < i % 10){
//             result = i % 10;
//         }
//     }
//     return console.log(result);
// }
// maxNum(7132);
// maxNum(897);
// maxNum(811);

//Task 9

// function isSymmetrical(num){
//    let first = num;
//    let second = "";
//    for(let i = num; i > 0;i = Math.floor(i / 10)){
//     second += (i % 10);
//    }
 
//    if(first == second){
//       return console.log(true);
//    }
//    else {
//       return console.log(false);
//    }
// }

// isSymmetrical(7227);
// isSymmetrical(9939);
// isSymmetrical(44444444);

//Task 10

// function addDigits(a){
//     let result = a;
//     if(result > 9){
//         for (let i = 0; i < 15;i++){
//            if (result > 9){
//             let first = Math.floor(result / 10) % 10;
//             let second = Math.floor(result % 10);
//             result = first + second;
//            }
//         }
//     }
//     return result;
// }
// console.log(addDigits(38));

//Task 11
// function isPrime(a){
//     let result = a;
//     let cnt = 0;
//     let bool = false;
//     for (let i = 1;i < result;i++){
//         if(result % i == 0){
//             cnt++;
//         }
//     }
//     if(cnt > 2){
//         bool = false;
//     }
//     else {
//         bool = true;
//     }
//     return bool;
// }

// console.log(isPrime(2));
// console.log(isPrime(6));

//Task 12
// function factorial(a){
//     let result = 1;
//     for(let i = 1; i <= a;i++){
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(5));

//Task 13

// function sumOfDigit(a){
//     let result = 0;
//     for(let i = 1; i <= a;i++){
//         result = result + i;
//     }
//     return result;
// }

// console.log(sumOfDigit(5));

//Task 14

// function ariphmetic(a){
//     let result = 0;
//     let cnt = 0;
//     for(let i = a;i > 0; i /=10){
//         result += Math.floor(i % 10);
//     }
//     if (a <= 9){
//         cnt = 1;
//     }
//     else if (a <= 99){
//         cnt = 2;
//     }
//     else if (a <= 999){
//         cnt = 3;
//     }
//     else if (a <= 9999){
//         cnt = 4;
//     }
//     else {
//         cnt = 0;
//     }
//     return result / cnt;
// }

// console.log(ariphmetic(2456));
// console.log(ariphmetic(99));

// Task 15
// function minOrMax(a){
//     let min = 9;
//     let max = 0;
//     for(let i = a; i > 1; i /= 10){
//         if (i % 10 < min)min = Math.round(i % 10);
//         if (i % 10 > max)max = Math.round(i % 10);
//     }
//     console.log("min:" + min + " max:" + max);
// }

// minOrMax(5732);
// Home Task Day 2
//1

// function calculateCircleArea(a){
//    let pi = 3.14;
//    let result = Math.round(pi*(a*a));
//    return console.log(result);
// }

// calculateCircleArea(5);
// calculateCircleArea(8);
// calculateCircleArea(3);


//2
// function sum3Digit(a){
//    let first = Math.round(a / 100) % 10;
//    let second = Math.round(a / 10) % 10;
//    let last = Math.round(a % 10);
//    let sum = first + second + last;
//    return console.log(sum);
// }

// sum3Digit(123);
// sum3Digit(345);
// sum3Digit(321);
//3
// function sumOfDigits(a){
//    if(a % 2 == 0){
//    return console.log(a = a + 1);
//    } 
//    else {
//       return console.log(a = a - 2);
//    }
// }

// sumOfDigits(22);
// sumOfDigits(4);
// sumOfDigits(3);

//4
// function lessThen100(a,b){
//    if(a + b < 100){
//       return console.log("true");
//    }
//    else{
//       return console.log("False");
//    }
// }

// lessThen100(22,15);
// lessThen100(83,34);
// lessThen100(3,77);

//5
// function longestTime(a,b,c){
//    let hour = (a * 60) * 60;
//    let minute = (b * 60);

//    if (hour > minute && hour > c){
//       return console.log(a);
//    }
//    else if (minute > hour && minute > c){
//       return console.log(b);
//    }
//    else if (c > minute && c > hour){
//       return console.log(c);
//    }
// }

// longestTime(1,59,3598);
// longestTime(2,300,15000);
// longestTime(15,955,59400);
// 6
// function perimetr(a){
//    return console.log(a * 4);
// }
// perimetr(7);
// perimetr(8);
// perimetr(25);
// 7
// function area(a){
//    return console.log(a * a);
// }

// area(8);
// area(11);
// area(6);
// 8
// function averageNum(a,b){
//    return console.log((a + b) / 2);
// }

// averageNum(7,9);
// averageNum(8,12);
// averageNum(10,30);
//9
// function evenOrOdd(a){
//    if(a % 2 == 0){
//       return console.log("3");
//    }
//    else {
//       return console.log("4");
//    }
// }

// evenOrOdd(7);
// evenOrOdd(12);
// evenOrOdd(-8);
// 10
// function calculation(a){
//    return console.log(17 * (a*a) - (6 * a) + 13);
// }

// calculation(2);
// calculation(0);
// calculation(10);
