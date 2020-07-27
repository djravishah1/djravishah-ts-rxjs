import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));


// Emits clicks happening on the DOM document
// Results in:
// MouseEvent object logged to console every time a click
// occurs on the document.

