import { fromEventPattern } from 'rxjs';

const token = someAPI.registerEventHandler(function() {});
someAPI.unregisterEventHandler(token); // this APIs cancellation method accepts
// not handler itself, but special token.

const someAPIObservable = fromEventPattern(
  function(handler) { return someAPI.registerEventHandler(handler); }, // Note that we return the token here...
  function(handler, token) { someAPI.unregisterEventHandler(token); }  // ...to then use it here.
);