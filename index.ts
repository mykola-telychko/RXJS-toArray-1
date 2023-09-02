console.clear();
import { interval } from 'rxjs';
import { toArray, take, tap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/toarray
// Example 1: get values emitted by interval as an array when interval completes

interval(100).pipe(take(10), toArray()).subscribe(console.log);
