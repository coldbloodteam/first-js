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

//Home Task 18.01.2024

//Task 1
// function flip(num){
//     if(num == 1){
//         return console.log(0);
//     }
//     if(num == 0){
//         return console.log(1);
//     }
// }
// flip(1);
// flip(0);

//Task 2
// function equation(a,b){
//     let result = -b / a;
//     console.log(result);
// }
// equation(4,5);
// equation(2,3);

//Task 3

// function fib(n) {
//     if(n <= 1){
//         return n;
//     }
//     else {
//         return fib(n - 1) + fib (n - 2);
//     }
//   }
// console.log(fib(5));
// console.log(fib(2));

//Task 4
// function isPow(num){
//     let result = 2;
//     for(let i = 1; i <= num;i++){
//         result = result * 2;
//         if(result == num){
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }
// isPow(16);
// isPow(9);

//Task 5
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

// function sum(num){
//     if(num <= 9){
//         return num;
//     }
//     return sum((num % 10) + Math.floor((num / 10) % 10));
// }
// console.log(sum(90));

// function isPrime(num){
//     let cnt = 0;

//     for(let i = 1; i <= 9;i++){
//         if(num % i == 0){
//             cnt++;
//         }
//     }

//     if(cnt >= 3){
//         return false;
//     }
//     if(cnt < 3){
//         return true;
//     }
// }

// console.log(isPrime(21));
// console.log(isPrime(6));
// console.log(isPrime(17));

// function ari(num){
//     let cnt = 0;
//     let result = 0;

//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         cnt++;
//     }

//     for(let i = num; i > 0;i = Math.floor(i / 10)){
//         result += (i % 10);
//     }
//     return result / cnt;
// }

// console.log(ari(99));
// console.log(ari(2456));

//Home Task Day 4
//Task 1
// function countFood(a,b,c,d){
//     let somoni = a;
//     let diram = b;
//     let narh = (a * 100) + b;
//     let somoniDorad = c;
//     let diramDorad = d;
//     let sum = (c * 100) + d;

//     let result = Math.floor(sum / narh);
//     return console.log(result);
// }
// countFood(1,70,3,80)
// countFood(2,10,6,90)
// countFood(1,30,5,20)

//Task 2
// function triangle(a,b,c){
//     if(a > 0 || b > 0 || c > 0){
//         if(a < 0 || b < 0 || c < 0){
//             return console.log(`${a * -1} ${b * -1} ${c * -1}`);
//         }
//     }
//     if(a < b && b < c){
//         return console.log(`${a * a} ${b * b} ${c * c}`);
//     }
//     if(a > b && b > c){
//         return console.log(`${a * a} ${b * b} ${c * c}`);
//     }
//     else{
//         return console.log(`${a * -1} ${b * -1} ${c * -1}`);
//     }
// }
// triangle(3,-2,8)
// triangle(3,6,9)
// triangle(-1, 2, 3)

//Task 3
// function nextEvenandPrev(num){
//     let next = 0;
//     let prev = 0;

//     for(let i = num+1; i <= num + 10;i++){
//         if(i % 2 == 0){
//             next = i;
//             break;
//         }
//     }

//     for(let i = num - 1; i >= 0;i--){
//         if(i % 2 == 0){
//             prev = i;
//             break;
//         }
//     }
//     return console.log(`next:${next} prev:${prev}`);
// }
// nextEvenandPrev(3)
// nextEvenandPrev(4)
// nextEvenandPrev(5)

//Task 4
// function subtractNum(num){
//     if(num > 0){
//         return console.log(num + 1);
//     }
//     if(num < 0){
//         return console.log(num - 2);
//     }
//     if(num == 0){
//         return console.log(10);
//     }
// }
// subtractNum(3)
// subtractNum(0)
// subtractNum(10)

//Task 5

// function leastCommonMultiple(a,b){
//     let num1 = a;
//     let num2 = b;

//     for(let i = 1; i <= (num1 * num2);i++){
//         if(i % num1 == 0 && i % num2 == 0){
//             return console.log(i);
//         }
//     }
// }
// leastCommonMultiple(4, 6)
// leastCommonMultiple(3, 8)
// leastCommonMultiple( 2, 6)

//Task 6

// function isPerfectNumber(num){
//     let num1 = num;
//     let sum = 0;
//     for(let i = 1; i <= num1;i++){
//         if(num1 % i == 0){
//             sum += i;
//         }
//         if(sum == num1){
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }

// isPerfectNumber(28)
// isPerfectNumber(32)
// isPerfectNumber(496)

//Task 7

// function hasUniqueDigits(num){
//     let a = (num % 10);
//     let b = Math.floor(num / 10) % 10;
//     let c = Math.floor(num / 100) % 10;
//     let d = Math.floor(num / 1000) % 10;
//     if(a != b && a != c & a != d){
//         if(b != a && b != c && b != d){
//             if(c != a && c != b && c != d){
//                 if(d != a && d != b && d != c){
//                     return console.log(true);
//                 }
//             }
//         }
//     }
//     return console.log(false);
// }
// hasUniqueDigits(1234);
// hasUniqueDigits(2211);
// hasUniqueDigits(4231);

//Task 8

// function sumOfPrimesInRange(a,b){
//     let sum = 0;

//     for(let i = a; i <= b;i++){
//         let temp = i;
//         let cnt = 0;
//         for(let j = 1; j <= temp;j++){
//             if(temp % j == 0){
//                 cnt++;
//             }
//         }
//         if(cnt < 3){
//             sum += temp;
//         }
//     }
//     return console.log(sum);
// }
// sumOfPrimesInRange(10,50);
// sumOfPrimesInRange(4,20);
// sumOfPrimesInRange(52,66);

// Task 10
// function reverseOfDigitsInFactorial(num){
//     let temp = 1;

//     for(let i = 1; i <= num;i++){
//         temp *= i;
//     }
//     let str = "";
//     for(let i = temp; i > 0;i = Math.floor(i/10)){
//         if(i % 10 != 0){
//             str += i % 10;
//         }
//     }
//     let result = +str;
//     return console.log(result);
// }

// reverseOfDigitsInFactorial(4)
// reverseOfDigitsInFactorial(5)
// reverseOfDigitsInFactorial(6)

//Task 9

// function collatzSequence(num){
//     let cnt = 0;
//     for(;;){
//         cnt++;
//         if(num == 1){
//             return cnt;
//         }
//         else{
//             if(num % 2 == 0){
//                 num = num / 2;
//             }
//             else{
//                 num = (num * 3) + 1;
//             }
//         }
//     }
// }
// console.log(collatzSequence(13));
// console.log(collatzSequence(23));
// console.log(collatzSequence(5));

// let summa = 0;
// function sum(num){
//     summa += num;
//     if(num == 0){
//         return summa;
//     }
//     return sum(num - 1);
// }
// console.log(sum(5));

//Home Task Day 5
//Task 1
// function strDiapozone(num){
//     let result = "";
//     for(let i = 1; i < num;i++){
//         result += i + ","
//     }
//     result += num;
//     return console.log(result);
// }
// strDiapozone(5);
// strDiapozone(6);
// strDiapozone(1);

//Task 2
// function restWeek(num){
//     if(num == 1){
//         return console.log("Monday Tuesday Wednsday Thursday Friday Saturday Sunday");
//     }
//     else if(num == 2){
//         return console.log("Tuesday Wednsday Thursday Friday Saturday Sunday");
//     }
//     else if(num == 3){
//         return console.log("Wednsday Thursday Friday Saturday Sunday");
//     }
//     else if(num == 4){
//         return console.log("Thursday Friday Saturday Sunday");
//     }
//     else if(num == 5){
//         return console.log("Friday Saturday Sunday");
//     }
//     else if(num == 6){
//         return console.log("Saturday Sunday");
//     }
//     else if(num == 7){
//         return console.log("Sunday");
//     }
// }
// restWeek(7);
// restWeek(6);
// restWeek(5);
//Task 3
// function poliPrime(num){
//     let a = num % 10;
//     let b = Math.floor((num / 10) % 10);
//     let c = Math.floor((num / 100) % 10);

//     let first = num;
//     let second = "";
//     second += a;
//     second += b;
//     second += c;
//     let polindrome = false;
//     if(+second == first){
//         polindrome = true;
//     }
//     else{
//         polindrome = false;
//     }
//     let prime = false;
//     let cnt = 0;
//     let item = 1;
//     while(item <= num){
//         if(num % item == 0){
//             cnt++;
//         }
//         item++;
//     }
//     if(polindrome == true && cnt < 3){
//         return console.log(true);
//     }
//     else{
//         return console.log(false);
//     }
// }
// poliPrime(101);
// poliPrime(151);
// poliPrime(121);

//Task 4

// function get(a, b) {
//     let cnt = 0
//     for (let i = a; i < b; i ++){
//         cnt = Math.random(i) * i;
//     }
//     return Math.floor(cnt)
// }
// console.log(get (1,10));
// console.log(get (1,10));
// console.log(get (100,1000));

//Task 5
// function superSearch(a,b){
//     let num = a;
//     let str = "";
//     for(let i = a; i > 0; i = Math.floor( i / 10))
//     if(i % 10 == b){
//         continue;
//     }
//     else{
//         str += i % 10;
//     }
//     let res = +str;
//     let result = "";
//     for(let i = res; i > 0; i = Math.floor( i / 10)){
//         result += i % 10;
//     }
//     let result2 = +result;
//     if(result2 == 0){
//         return console.log(undefined);
//     }
//     return console.log(result2);
// }
// superSearch(1121212,1)
// superSearch(4543,4)
// superSearch(1,1)

//Task 6
// function gerDeap(a,b){
//     let cnt = a;
//     let result = "";
//     while(cnt < b){
//         result += cnt + ",";
//         cnt++;
//     }
//     result += b;
//     return console.log(result);
// }
// gerDeap(1,3);
// gerDeap(4,5);
// gerDeap(10,12)

//Task 7

// function calculator(a,b,c){
//     if(b == "+"){
//         return console.log(a + c);
//     }
//     if(b == "*"){
//         return console.log(a * c);
//     }
//     if(b == "-"){
//         return console.log(a - c);
//     }
//     if(b == "/"){
//         return console.log(a / c);
//     }
//     if(b == "%"){
//         return console.log(a % c);
//     }
// }
// calculator(1,"+",3);
// calculator(4,"*",5);
// calculator(10,"-",12);

//Task 8

// function searchID(numbers,which,max){
//     let arr = "";
//     for(let j = numbers; j > 0; j = Math.floor(j / 10)){
//         arr += j % 10;
//     }
//     let array = +arr;

//     let resultStr = "";
//     let cnt = 0;
//     for(let i = array;i > 0;i = Math.floor( i / 10)){
//         if(i % 10 == which){
//             if(cnt < max){
//                 cnt++;
//                 continue;
//             }
//             else{
//                 resultStr += i % 10;
//             }
//         }
//         else{
//             resultStr += i % 10;
//         }
//     }
//     if(resultStr == 0){
//         return console.log(null);;
//     }
//     return console.log(+resultStr);

// }
// searchID(121212,1,1);
// searchID(121212,1,3);
// searchID(3333,3,4);

//Home Word Recursion
//Task 1
// function factorial(num){
//     if(num == 0){
//         return 1;
//     }
//     return num * factorial(num - 1)
// }

// console.log(factorial(5));

//Task 2

// function sumTo(num){
//     if(num == 0){
//         return 0;
//     }
//     return num + sumTo(num - 1)
// }

// console.log(sumTo(10));

//Task 3

// function get(a,b){
//     if(b == 0){
//         return 1;
//     }
//     return a * get(a,b-1)
// }
// console.log(get(2,3));

//Class Task 5

// function createAdder(num1){
//     let temp = num1;

//     return (num2) => {
//         return temp +=  num2;
//     }
// }
// const adder = createAdder(5);
// console.log(adder(3));
// console.log(adder(3));

//Task 1

// function sumDigit(num){
//     if(num == 0){
//         return 0;
//     }
//     return (num % 10) + sumDigit(Math.floor(num / 10))
// }

// console.log(sumDigit(333));

//Task 2

// function multisum(sum,b = 10){
//     if(b == 0){
//         return 0;
//     }
//     return sum * b  + multisum(sum, b - 1);
// }

// console.log(multisum(1));

//Task 3

// function gcd(a,b){
//     if(b == 0){
//         return a;
//     }
//     return gcd(b, a % b)
// }

// console.log(gcd(32,8));


//Task 4 

// function evenRecursion(num){
//     if(num == 0){
//         return true;
//     }   
//     else if(num < 0){
//         return false;
//     }
//     return evenRecursion(num - 2);
// }

// console.log(evenRecursion(124));
// console.log(evenRecursion(-41));
// console.log(evenRecursion(17));

//Task 5

// function add_suffix(num){
//     return (a) => {
//         return a + num;
//     }
// }

// let add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));
// console.log(add_ly("total"));

//Task 6

// function sumNumbers(num){
//     return (a = 0) => {
//         return (b = 0) => {
//             return (c = 0) => {
//                 return (d = 0) => {
//                     return (e = 0) => {
//                         return num + a + b + c + d + e;
//                     }
//                 }
//             }
//         }   
//     }
// }
// console.log(sumNumbers(2)(3)(4)()()(6));
// console.log(sumNumbers(2)()()(2)(2)(1));
// console.log(sumNumbers(1)()(4)()()(6));

//Task 7

// function incrementBy(num){
//     let sum = num;
//     return function addFive(num2){
//         return sum += num2;
//         }
// }

// const addFive = incrementBy(5);
// console.log(addFive(10));
// console.log(addFive(10));

// Home Task 1

// function sumOddTo(num){
//     if(num == 1){
//         return 1;
//     }
//     if(num % 2 == 0){
//         num =  num - 1;    
//     }
//     return num + sumOddTo(num - 2);
// }

// console.log(sumOddTo(5));
// console.log(sumOddTo(8));
// console.log(sumOddTo(1));


//Home task array 

// TAsk 1.
// function get(a) {
//     let res = a.filter((e) => {
//         return e
//     })
//     return res.at(0)
// }
// console.log(get([1, 2, 3]));
// console.log(get([80, 5, 100]));
// console.log(get([-500, 0, 50]));

// Task 2.
// function get(...a) {
//     let res = a.toString().split(",")
//     return res.map(Number)
// }
// console.log(get (1,2));
// console.log(get (51,21));
// console.log(get (512124,215));

// Task 3.
// function get(a) {
//     let res = a.toReversed()
//     return res
// }
// console.log(get([1, 2, 3, 4]));
// console.log(get([9, 9, 2, 3, 4]));
// console.log(get([]));

// Task 4.
// function get(a) {
//     let res = a.map((e) => {
//         return e + 1
//     })
//     return res
// }
// console.log(get([0, 1, 2, 3]));
// console.log(get([2, 4, 6, 8]));
// console.log(get([-1, -2, -3, -4]));

// Task 5.
// function get(a) {
//     let res = a.filter((e) => {
//         return e
//     })
//     return res.at(-1)
// }
// console.log(get([1, 2, 3]));
// console.log(get(["cat", "dog", "duck"]));
// console.log(get([true, false, true]));

// Task 6.
// function get(a) {
//     let res = a.join("")
//     return res
// }
// console.log(get([1, 2, 3, 4, 5, 6]));
// console.log(get(["a", "b", "c", "d", "e", "f"]));
// console.log(get([1, 2, 3, "a", "s", "dAAAA"]));

// Task 7.
// function get(a,b) {
//     return a.includes(b)
// }
// console.log(get([1, 2, 3, 4, 5], 3));
// console.log(get([1, 1, 2, 1, 1], 3));
// console.log(get([5, 5, 5, 6], 5));

// Task 8.
// function get(a,b) {
//     return a.indexOf(b)
// }
// console.log(get(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(get(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(get(["a", "g", "y", "d"], "d"));

// Task 9.
// function get(...a) {
//     let res = a.join().split(',')
//     return res.map(Number)
// }
// console.log(get([1, 3, 5], [2, 6, 8]));
// console.log(get([7, 8], [10, 9, 1, 1, 2]));
// console.log(get([4, 5, 1], [3, 3, 3, 3, 3]));

// Task 10.
// function get(a) {
//     let res = a.join().split(",")
//     return res.map(Number)
// }
// console.log(get(["9.4", "4.2"]));
// console.log(get(["91", "44"]));
// console.log(get(["9.5", "8.8"]));
