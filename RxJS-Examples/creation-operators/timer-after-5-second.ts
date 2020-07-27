import { timer } from 'rxjs';

const numbers = timer(5000);
numbers.subscribe(x => console.log(x));