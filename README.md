# kotlinify-js

We all love the functional aspects of JavaScript. However, in some scenarios we wish to take it to the next level. Kotlinify-js
adds some functional concepts of Kotlin to JavaScript.

Looking at the pipe and chain styles, we find that in this way flow is ordered chronologically.

## Install

```
npm i kotlinify -S
```

## Usage

```
import { pipe, chain } from './kotlinify';
```

## Examples

Functions can be chained on a value:
```
chain('hello')
    .let(capitalize)
    .let(exclaim, { times: 2 })
    .also(console.log)
    .get(cheer, { times: 2 });

// instead of doing:
cheer(exclaim(capitalize('hello'), { times: 2 }), { times: 2} );

// or:
const value = exclaim(capitalize('hello'), { times: 2 });
console.log(value);
cheer(value, { times: 2 });
```

You can set up a pipe where the first argument is a value and then functions are applied.
```
pipe('hello',
    capitalize,
    it => exclaim(it, { times: 2 }),
    it => cheer(it, { times: 2 }),
);
```
