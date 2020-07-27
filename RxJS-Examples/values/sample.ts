import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const seconds = interval(1000);
const clicks = fromEvent(document, 'click');    
const result = seconds.pipe(sample(clicks));
result.subscribe(x => console.log(x));