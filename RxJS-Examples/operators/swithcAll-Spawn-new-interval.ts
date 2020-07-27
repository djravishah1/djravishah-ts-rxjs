import { fromEvent, interval } from 'rxjs';
import { switchAll, map, tap } from 'rxjs/operators';

const clicks = fromEvent(document, 'click').pipe(tap(() => console.log('click')));
const source = clicks.pipe(map((ev) => interval(1000)));

source.pipe(
  switchAll()
).subscribe(x => console.log(x));

// Output
// click
// 1
// 2
// 3
// 4
// ...
// click
// 1
// 2
// 3
// ...
// click
// ...