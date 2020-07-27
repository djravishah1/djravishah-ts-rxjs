interface RunOptions { 
   program:string; 
   commandline:string[]|string|(()=>string); 
} 

//commandline as string 
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  

//commandline as a string array 
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

//commandline as a function expression 
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = options.commandline; 
console.log(fn());

/** Output
Hello 
Hello 
World 
**Hello World** */