var TutorialPoint; 
(function (TutorialPoint) { 
   function add(x, y) { 
      console.log(x + y); 
   } 
   TutorialPoint.add = add; 
})(TutorialPoint || (TutorialPoint = {}));