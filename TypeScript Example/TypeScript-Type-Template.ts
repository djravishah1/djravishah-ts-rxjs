var person = {
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHello:function() {  }  //Type template 
} 
person.sayHello = function() {  
   console.log("hello "+person.firstName)
}  
person.sayHello()


/**Output
 hello Tom
 */