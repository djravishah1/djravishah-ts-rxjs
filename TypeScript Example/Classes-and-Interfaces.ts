interface ILoan { 
   interest:number 
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var obj = new AgriLoan(10,1);
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )


/**
//Generated by typescript 1.8.10
var AgriLoan = (function () {
   function AgriLoan(interest, rebate) {
      this.interest = interest;
      this.rebate = rebate;
   }
   return AgriLoan;
}());

var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
 */

/**Output
Interest is : 10 Rebate is : 1
 */