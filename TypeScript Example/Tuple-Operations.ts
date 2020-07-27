var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push " + mytuple.length)
console.log("Items before pop " + mytuple.length)
console.log(mytuple.pop() + " popped from the tuple") // removes and returns the last item

console.log("Items after pop " + mytuple.length)



/*
output
Items before push 4 
Items after push 5 
Items before pop 5 
12 popped from the tuple 
Items after pop 4
*/