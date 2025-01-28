//myEach
function myEach(arr, cb) {
   if (Array.isArray(arr)) {
      for (const item of arr) {
         cb(item);
      }
   } else {
      for (const key in arr) {
         if (arr.hasOwnProperty(key)) {
            cb(arr[key]);
         }
      }
   }
   return arr;
}

//myMap
function myMap(arr, cb) {
   const result = [];
   if (Array.isArray(arr)) {
      for (const item of arr) {
         result.push(cb(item));
      }
   } else {
      for (const key in arr) {
         if (arr.hasOwnProperty(key)) {
            result.push(cb(arr[key]));
         }
      }
   }
   return result;
}


//myReduce
function myReduce(arr, cb, acc) {
   const values = Array.isArray(arr) ? arr : Object.values(arr);
   let startIndex = 0;

   if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
   }

   for (let i = startIndex; i < values.length; i++) {
      acc = cb(acc, values[i], arr);
   }

   return acc;
}

//myFind
function myFind(arr, cb) {
   const values = Array.isArray(arr) ? arr : Object.values(arr);
   for (const value of values) {
      if (cb(value)) {
         return value;
      }
   }
   return undefined;
}

//myFilter
function myFilter(arr, cb) {
   const result = [];
   const values = Array.isArray(arr) ? arr : Object.values(arr);

   for (const value of values) {
      if (cb(value)) {
         result.push(value);
      }
   }

   return result;
}

//mySize
function mySize(arr) {
   return Array.isArray(arr) ? arr.length : Object.keys(arr).length;
}

//myFirst
function myFirst(array, n = 1) {
   return n === 1 ? array[0] : array.slice(0, n);
}

//myLast
function myLast(array, n = 1) {
   return n === 1 ? array[array.length - 1] : array.slice(-n);
}

//myKeys
function myKeys(obj) {
   return Object.keys(obj);
}

//myValues
function myValues(obj) {
   return Object.values(obj);
}
