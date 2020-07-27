import { of } from 'rxjs';

of([1,2,3])
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: [1,2,3]'