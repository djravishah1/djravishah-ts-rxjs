const values = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  x: 1 + 3, // a + c
  y: 2 + 4, // b + d
}
const e1 =    hot('---a---b---|', values);
const e2 =    hot('-----c---d---|', values);
const expected =  '-----x---y---|';

expectObservable(e1.zip(e2, function(x, y) { return x + y; }))
  .toBe(expected, values);