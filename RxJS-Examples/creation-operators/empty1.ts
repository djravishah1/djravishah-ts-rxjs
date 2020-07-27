import { empty, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const interval$ = interval(1000);
const result = interval$.pipe(
  mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
);
result.subscribe(x => console.log(x));

// Results in the following to the console:
// x is equal to the count on the interval eg(0,1,2,3,...)
// x will occur every 1000ms
// if x % 2 is equal to 1 print abc
// if x % 2 is not equal to 1 nothing will be output