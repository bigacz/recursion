function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);

  const first = array.slice(0, middle);
  const second = array.slice(middle);

  const firstSorted = mergeSort(first);
  const secondSorted = mergeSort(second);
  const sorted = merge(firstSorted, secondSorted);

  return sorted;
}

function merge(first, second) {
  const sortedArray = [];

  while (first.length > 0 && second.length > 0) {
    let element;
    if (first[0] <= second[0]) {
      element = first.shift();
    } else {
      element = second.shift();
    }
    sortedArray.push(element);
  }

  let returnArray;
  if (first.length > 0) {
    returnArray = sortedArray.concat(first);
  }

  if (second.length > 0) {
    returnArray = sortedArray.concat(second);
  }

  return returnArray;
}

const evenArray = [56, 24, 89, 12, 45, 78, 3, 95, 6, 27, 49, 82, 9, 41, 53];
const oddArray = [15, 7, 32, 44, 5, 68, 23, 10, 39];
const duplicateArray = [9, 20, 14, 6, 33, 20, 6, 18];
const singleArray = [1];

console.log(mergeSort(evenArray));
console.log(mergeSort(oddArray));
console.log(mergeSort(duplicateArray));
console.log(mergeSort(singleArray));
