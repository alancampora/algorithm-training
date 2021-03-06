//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//examples
//[2, 4, 0, 100, 4, 11, 2602, 36]
//Should return: 11 (the only odd number)

//[160, 3, 1719, 19, 11, 13, -21]
//Should return: 160 (the only even number)

//findOutliner: [Number] -> Number
function findOutlier(integers){ 
  let isOddArray = isArrayOdd(integers[0],integers[1],integers[2]);
  return integers.find(filterDifferent(isOddArray));
}

//isArrayOdd: Number -> Number -> Number -> Boolean
const isArrayOdd = (a,b,c) => {
  let isOddA = isOdd(a);
  let isOddB = isOdd(b);
  let isOddC = isOdd(c);
  
  if( isOddA === isOddB) {
      return  isOddA;
  } 
  
  if(isOddA === isOddC) {
    return isOddC; 
  }
 
  return isOddC;
}

// filterDifferent: Boolean -> Number -> Boolean
const filterDifferent = isOddArray => number =>  isOddArray ? isEven(number) : isOdd(number)

// isEven: Number -> Boolean
const isEven = x => x === 0 ? true : !isOdd(x);

// isOdd: Number -> Boolean
const isOdd = x => (x % 2 )!== 0; 
