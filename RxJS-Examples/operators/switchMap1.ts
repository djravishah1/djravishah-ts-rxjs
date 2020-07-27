import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMap((ev) => interval(1000)));
result.subscribe(x => console.log(x));

//Rerun an interval Observable on every click event