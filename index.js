var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine"];


function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch(states, "Alaskaa"));

// array must be sorted for binary search


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
             27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
             51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
             75, 76, 77, 78];

function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  console.log('initial: ', start, mid, end)
  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
      console.log(start, mid, end)
    }
    mid = Math.floor((start + end) / 2);
    console.log(start, mid, end);
  }
  if (arr[mid] === val) {
    return mid;
  }
  return -1;
}

// console.log(binarySearch(array, 57));



// Naive String Search

var sent = 'harold said haha in hamburg';

function naiveStringSearch(str, val) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < val.length; j++) {
      if (val[j] !== str[i + j]) {
        break;
      } else if (j === val.length - 1) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(naiveStringSearch(sent, 'ha'));