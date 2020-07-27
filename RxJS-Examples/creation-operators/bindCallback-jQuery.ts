import { bindCallback } from 'rxjs';
import * as jQuery from 'jquery';

// Suppose we have jQuery.getJSON('/my/url', callback)
const getJSONAsObservable = bindCallback(jQuery.getJSON);
const result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));