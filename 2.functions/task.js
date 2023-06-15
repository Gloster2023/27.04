function getArrayParams(...arr) {
let min = arr[0];
for (let i=0; i < arr.length; i+=1){
  if(min > arr[i]){
    min = arr[i];
  }
}
let max = arr[0];
for (let i=0; i < arr.length; i+=1){
  if(max < arr[i]){
    max = arr[i];
  }
}
let sum = 0;
for (let i=0; i < arr.length; i+=1){
  sum += arr[i];
}
let average = 0;
average =  Number((sum / arr.length).toFixed(2));

return{ min: min, max: max, avg: average };
}
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))


// ____________________version 2.0_________________________________


function getArrayParams(...arr) {
  let max = -Infinity;
  max = Math.max.apply(null, arr);
  let min = Infinity;
  min = Math.min.apply(null, arr);
  let sum = 0;
  for (let i=0; i < arr.length; i+=1){
    sum += arr[i];
  }
  let avg = 0;
  avg = sum / arr.length;
  
  let average = 0;
  average =  Number(avg.toFixed(2));
  return { min: min, max: max, avg: average };
}
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))



// ____________________задача 2______________________________________




function summElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  const initialValue = 0;
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}

// console.log(summElementsWorker()); 
// console.log(summElementsWorker(10, 10, 11, 20, 10)); 


function differenceMaxMinWorker(...arr) {
  if (arr.length == 0){
  return 0;
}
  let max = -Infinity;
  max = Math.max.apply(null,arr);
  let min = -Infinity;
  min = Math.min.apply(null,arr);
  return max - min;
}

// console.log(differenceMaxMinWorker());
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 


function differenceEvenOddWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] % 2){
      sumOddElement += arr[i];
    }
    else {
      sumEvenElement +=arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


function averageEvenElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] % 2){
    }
    else{ sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement  / countEvenElement;
}

// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


// _______________3 задание___________________


const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
   arrOfArr.forEach(element => {
    res = func(...element);
    if (maxWorkerResult < res){
      maxWorkerResult = res;
    }
    })
  return maxWorkerResult
}




// _________________________________________________

function checkAge(age){
  if (age >= 18){
  return true
  }else{
  return confirm("А родители разрешили?")
  }
}

let age = prompt("Сколько вам лет?", 18);

if (checkAge(age)){
  alert ("Доступ получен");
}else{
  alert("Доступ закрыт")
}

// ______________________________________________


let question = prompt("путин Хуйло?");

function checked(question){
if (question === "да"){
    return true
}else{
  return confirm("подумай ещё",question)}
}

if (checked(question)){
  alert("Слава Украине")
}else{
  alert("походу ты ватник")
}
// _________________________________



function checkAge(age) {
   return (age > 18) || confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
   }


function min(a,b){
  if (a > b){
  return a
  }else{
  return b}
}
// _______________________________

let number = prompt("x=");
let degree = prompt("n=");

function pow(number, degree){
  if (Number.isInteger(degree)){
    return Math.pow(number, degree)
  }
    return("неподходящее число n")
}