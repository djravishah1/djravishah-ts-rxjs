import * as fs from 'fs';
const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./roadNames.txt', 'utf8');
result.subscribe(x => console.log(x), e => console.error(e));