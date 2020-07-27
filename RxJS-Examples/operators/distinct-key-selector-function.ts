import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

interface Person {
   age: number,
   name: string
}

of<Person>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
  ).pipe(
    distinct((p: Person) => p.name),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }