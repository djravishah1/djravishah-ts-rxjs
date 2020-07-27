import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));
clicksOnDivs.subscribe(x => console.log(x));