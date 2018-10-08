# memoizee-decorator

##### Adding syntactic sugar to npm package [memoizee](https://www.npmjs.com/package/memoizee), cache function using the elegant TypeScript decorator. 

## Installing

Using npm:
note: `axios` and `rxjs` are peer dependencies.

```bash
$ npm install memoizee-decorator --save
```

## Example

Cache a function

```js
import {memoize} from 'memoizee-decorator';

@memoize()
function add(a, b) {
    console.log('add is called');
    return a + b;
}

add(1, 2); // log "add is called"
add(1, 2); // cache hit, no log
add(3, 4); // log "add is called"
```

## Fit memoizee configuration into the decorator.
### same configuration object as the one in  [memoizee](https://www.npmjs.com/package/memoizee) package
```js
import {memoize} from 'memoizee-decorator';

@memoize({max: 5}) // put configuration object here
function add(a, b) {
    return a + b;
}
```