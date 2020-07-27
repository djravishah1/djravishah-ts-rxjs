import { fromEvent, interval } from 'rxjs';
import { exhaust, map, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
  map((ev) => interval(1000).pipe(take(5))),
);
const result = higherOrder.pipe(exhaust());
result.subscribe(x => console.log(x));