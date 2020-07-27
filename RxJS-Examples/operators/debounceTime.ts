import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounceTime(1000));
result.subscribe (x => console.log(x));