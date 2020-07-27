var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
var invokeperson = function(obj: { firstname:string, lastname :string }) { 
   console.log("first name :"+obj.firstname) 
   console.log("last name :"+obj.lastname) 
} 
invokeperson(person)


/**Compile
 //Generated by typescript 1.8.10
var person = {
   firstname: "Tom",
   lastname: "Hanks"
};

var invokeperson = function (obj) {
   console.log("first name :" + obj.firstname);
   console.log("last name :" + obj.lastname);
};

invokeperson(person);
 */

/**
 first name :Tom 
last name :Hanks
 */