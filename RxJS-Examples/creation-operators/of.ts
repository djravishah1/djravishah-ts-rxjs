import { of } from 'rxjs';

of(10, 20, 30)
.subscribe(
  next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
);
// result:
// 'next: 10'
// 'next: 20'
// 'next: 30'