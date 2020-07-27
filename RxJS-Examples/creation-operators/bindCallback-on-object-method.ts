import { bindCallback } from 'rxjs';

const boundMethod = bindCallback(someObject.methodWithCallback);
boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
.subscribe(subscriber);