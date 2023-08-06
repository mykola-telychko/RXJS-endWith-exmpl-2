import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const source$ = of('Hello', 'Friend');

source$
  // emit on completion
  .pipe(endWith('-------', 'END'))
  .pipe(endWith('Goodbye', 'Friend'))
  // 'Hello', 'Friend', 'Goodbye', 'Friend'
  .subscribe((val) => console.log(val));
