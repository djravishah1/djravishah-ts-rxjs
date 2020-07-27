import {fromEvent, interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

const source = interval(100);
const clicks = fromEvent (document, 'click');
const result = source.pipe(takeUntil(clicks));
result.subscribe(x => console.log(x));