function disp():string[] { 
   return new Array("Mary","Tom","Jack","Jill") 
} 
 
var nums:string[] = disp() 
for(var i in nums) { 
   console.log(nums[i]) 
}

/*
Output
Mary 
Tom 
Jack 
Jill

*/