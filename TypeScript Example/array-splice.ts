var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);

//output
// After adding 1: orange,mango,water,banana,sugar,tea removed is:  
// After removing 1: orange,mango,water,sugar,tea removed is: banana