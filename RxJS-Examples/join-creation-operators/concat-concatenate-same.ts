import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const timer = interval(1000).pipe(take(2));

concat(timer, timer) // concatenating the same Observable!
.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('...and it is done!')
);

// Logs:
// 0 after 1s
// 1 after 2s
// 0 after 3s
// 1 after 4s
// "...and it is done!" also after 4s