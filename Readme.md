# tuple.flow

[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

Helper functions for working with tuples in flow typed code.

## Usage

```js
import * as tuple from "tuple.flow"
```

### Transforms

#### `mapFirst`

```js
tuple.mapFirst(a => a + 1, [1]) //? [2]
tuple.mapFirst(a => a + 1, [1, 2]) //? [2, 2]
tuple.mapFirst(a => a + 1, [1, 2, 3, 4, 5]) //? [2, 2, 3, 4, 5]
```

#### `mapSecond`

```js
tuple.mapSecond(a => a + 1, [1, 2]) //? [1, 3]
tuple.mapSecond(a => a + 1, [1, 2, 3, 4, 5]) //? [1, 3, 3, 4, 5]
```

### Accessors

#### `first`

```js
tuple.first([1]) //? 1
tuple.first([1, 2]) //? 1
tuple.first([1, 2, 3, 4, 5, 7, 8]) //? 1
```

#### `second`

```js
tuple.second([1, 2]) //? 2
tuple.second([1, 2, 3, 4, 5, 7, 8]) //? 2
```

#### `third` / `fourth` / `fifth` / `sixth` / `seventh` / `eighth`

```js
tuple.third([1, 2, 3, 4, 5, 7, 8]) //? 3
tuple.fourth([1, 2, 3, 4, 5, 7, 8]) //? 4
tuple.fifth([1, 2, 3, 4, 5, 7, 8]) //? 5
tuple.sixth([1, 2, 3, 4, 5, 7, 8]) //? 6
tuple.seventh([1, 2, 3, 4, 5, 7, 8]) //? 7
tuple.eighth([1, 2, 3, 4, 5, 7, 8]) //? 8
```

### Constructors

#### `unit` / `tuple0`

```js
tuple.unit() //? []
tuple.tuple0() //? []
```

#### `singleton` / `tuple1`

```js
tuple.singlton(1) //? [1]
tuple.tuple1(1) //? [1]
```

#### `tuple` / `tuple2`

```js
tuple.tuple(1, 2) //? [1, 2]
tuple.tuple2(1, 2) //? [1, 2]
```

#### `triple` / `tuple3`

```js
tuple.triple(1, 2, 3) //? [1, 2, 3]
tuple.tuple3(1, 2, 3) //? [1, 2, 3]
```

#### `quadruple` / `tuple4`

```js
tuple.quadruple(1, 2, 3, 4) //? [1, 2, 3, 4]
tuple.tuple4(1, 2, 3, 4) //? [1, 2, 3, 4]
```

#### `quintuple` / `tuple5`

```js
tuple.quintuple(1, 2, 3, 4, 5) //? [1, 2, 3, 4, 5]
tuple.tuple5(1, 2, 3, 4, 5) //? [1, 2, 3, 4, 5]
```

#### `sextuple` / `tuple6`

```js
tuple.sextuple(1, 2, 3, 4, 5, 6) //? [1, 2, 3, 4, 5, 6]
tuple.tuple6(1, 2, 3, 4, 5, 6) //? [1, 2, 3, 4, 5, 6]
```

#### `septuple` / `tuple7`

```js
tuple.septuple(1, 2, 3, 4, 5, 6, 7) //? [1, 2, 3, 4, 5, 6, 7]
tuple.tuple7(1, 2, 3, 4, 5, 6, 7) //? [1, 2, 3, 4, 5, 6, 7]
```

#### `octuple` / `tuple8`

```js
tuple.octuple(1, 2, 3, 4, 5, 6, 7, 8) //? [1, 2, 3, 4, 5, 6, 7, 8]
tuple.tuple7(1, 2, 3, 4, 5, 6, 7, 8) //? [1, 2, 3, 4, 5, 6, 7, 8]
```

## Install

    npm install tuple.flow

[travis.icon]: https://travis-ci.org/Gozala/tuple.flow.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/tuple.flow
[version.icon]: https://img.shields.io/npm/v/tuple.flow.svg
[downloads.icon]: https://img.shields.io/npm/dm/tuple.flow.svg
[package.url]: https://npmjs.org/package/tuple.flow
[downloads.image]: https://img.shields.io/npm/dm/tuple.flow.svg
[downloads.url]: https://npmjs.org/package/tuple.flow
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
