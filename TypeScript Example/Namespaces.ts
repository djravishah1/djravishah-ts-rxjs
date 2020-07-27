FileName :IShape.ts 
---------- 
namespace Drawing { 
   export interface IShape { 
      draw(); 
   }
}  

FileName :Circle.ts 
---------- 
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
   export class Circle implements IShape { 
      public draw() { 
         console.log("Circle is drawn"); 
      }  
      
      FileName :Triangle.ts 
      ---------- 
      /// <reference path = "IShape.ts" /> 
      namespace Drawing { 
         export class Triangle implements IShape { 
            public draw() { 
               console.log("Triangle is drawn"); 
            } 
         } 
         
         FileName : TestShape.ts 
         /// <reference path = "IShape.ts" />   
         /// <reference path = "Circle.ts" /> 
         /// <reference path = "Triangle.ts" />  
         function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());
      }
   }
}