function fibs(number) {
  const returnArray = [];
  let b = 0;
  let a = 1;

  for (let i = 0; i < number; i++) {
    returnArray.push(b);
    let c = a;

    a = b + a;
    b = c;
  }

  return returnArray;
}

function fibsRec(number) {
  if (number === 2) {
    return [0, 1];
  }

  const lastArray = fibsRec(number - 1);

  const a = lastArray[lastArray.length - 1];
  const b = lastArray[lastArray.length - 2];

  lastArray.push(a + b);

  return lastArray;
}

const testValue = 8;

console.log(fibs(testValue));
console.log(fibsRec(testValue));
