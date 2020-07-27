import { bindCallback } from 'rxjs';

const someFunction = (a, b, c) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
};

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction().subscribe(values => {
  console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
});