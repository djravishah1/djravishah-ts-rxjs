import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const tagNames = clicks.pipe(pluck('target', 'tagName'));
tagNames.subscribe(x => console.log(x));