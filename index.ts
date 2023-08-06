import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

// src: https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith

const source$ = of('Hello', 'Friend');

source$
  .pipe()
  .pipe(endWith('Bye'))
  .pipe(endWith('-------', 'END'))
  .pipe(endWith('-------', 'FIN'))
  .subscribe((val) => console.log('el  :', val));
