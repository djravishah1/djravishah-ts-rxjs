import { fromEventPattern } from 'rxjs';

someAPI.registerEventHandler((eventType, eventMessage) => {
  console.log(eventType, eventMessage); // Logs "EVENT_TYPE" "EVENT_MESSAGE" to console.
});

const someAPIObservable = fromEventPattern(
  handler => someAPI.registerEventHandler(handler),
  handler => someAPI.unregisterEventHandler(handler),
  (eventType, eventMessage) => eventType + " --- " + eventMessage, // without that function only "EVENT_TYPE"
);                                                                // would be emitted by the Observable

someAPIObservable.subscribe(value => console.log(value));

// Logs:
// "EVENT_TYPE --- EVENT_MESSAGE"