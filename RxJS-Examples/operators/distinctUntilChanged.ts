import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

interface Person {
   age: number,
   name: string
}

of<Person>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
    { age: 6, name: 'Foo'},
  ).pipe(
    distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }