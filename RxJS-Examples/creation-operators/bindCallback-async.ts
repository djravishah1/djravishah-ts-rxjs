import { bindCallback } from 'rxjs';

function iCallMyCallbackSynchronously(cb) {
  cb();
}

const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

boundSyncFn().subscribe(() => console.log('I was sync!'));
boundAsyncFn().subscribe(() => console.log('I was async!'));
console.log('This happened...');

// Logs:
// I was sync!
// This happened...
// I was async!