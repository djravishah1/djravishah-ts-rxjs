import { combineLatest, of } from 'rxjs';
import { delay, starWith } from 'rxjs/operators';

const observables = [1, 5, 10].map(
  n => of(n).pipe(
    delay(n * 1000),   // emit 0 and then emit n after n seconds
    startWith(0),
  )
);
const combined = combineLatest(observables);
combined.subscribe(value => console.log(value));
// Logs
// [0, 0, 0] immediately
// [1, 0, 0] after 1s
// [1, 5, 0] after 5s
// [1, 5, 10] after 10s