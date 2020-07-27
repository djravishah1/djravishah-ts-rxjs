import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));



//Generate new Observable according to source Observable values
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// ... and so on