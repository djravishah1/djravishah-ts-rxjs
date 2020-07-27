import { empty } from 'rxjs';
import { startWith } from 'rxjs/operators';

const result = empty().pipe(startWith(7));
result.subscribe(x => console.log(x));