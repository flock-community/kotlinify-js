# kotlinify-js

We all love the functional expects of javascript. But in some scenarios we wish to bing it to the next level. kolinify-js added the functional concepts of kotlin to javascript

## Install

````
npm i kolinify-js -S
````

## Usage

There are two ways to use kotlinify-js. 
- You can use it as an additional library. You explicitly wrap the objects you want to kotlinify.
- Another option is to overwrite the prototype of Object. Now all goods of kotlinify is by default available for every object.  Make sure you do this at the very beginning of your program

````
import { chain } from './kotlinify';
Object.prototype.let = function (it) { return chain(it) }
````

## Examples

A value can be chained

````
chain('Hello')
    .let(capitalize)
    .let(exclaim, { times: 2 })
    .also(log)
    .get(cheer, { times: 2 }),
````

A value can be piped

````
pipe(
    'Hello',
    capitalize,
    it => exclaim(it, { times: 2 }),
    it => cheer(it, { times: 2 }),
)
````