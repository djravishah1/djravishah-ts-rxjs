const expected = '400ms (a-b|)';
const values = {
  a: 'value emitted',
  b: 'another value emitter',
};

expectObservable(someStreamForTesting)
  .toBe(expected, values);
// This would work also
const expected = '400ms (0-1|)';
const values = [
  'value emitted', 
  'another value emitted',
];

expectObservable(someStreamForTesting)
  .toBe(expected, values);