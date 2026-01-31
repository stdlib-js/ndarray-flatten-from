<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# flattenFrom

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a copy of an input [ndarray][@stdlib/ndarray/ctor] where all dimensions of the input [ndarray][@stdlib/ndarray/ctor] are flattened starting from a specified dimension.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import flattenFrom from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-flatten-from@esm/index.mjs';
```

#### flattenFrom( x, dim\[, options] )

Returns a copy of an input [ndarray][@stdlib/ndarray/ctor] where all dimensions of the input [ndarray][@stdlib/ndarray/ctor] are flattened starting from a specified dimension.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flattenFrom( x, 1 );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have one or more dimensions.
-   **dim**: dimension to start flattening from. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **options**: function options (_optional_).

The function accepts the following options:

-   **order**: order in which input [ndarray][@stdlib/ndarray/ctor] elements should be flattened. Must be one of the following:

    -   `'row-major'`: flatten elements in lexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in lexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] row-by-row.
    -   `'column-major'`: flatten elements in colexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in colexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] column-by-column.
    -   `'any'`: flatten according to the physical layout of the input [ndarray][@stdlib/ndarray/ctor] data in memory, regardless of the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].
    -   `'same'`: flatten according to the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].

    Default: `'row-major'`.

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having the same [data type][@stdlib/ndarray/dtypes] as a provided input [ndarray][@stdlib/ndarray/ctor].

By default, the input [ndarray][@stdlib/ndarray/ctor] is flattened in lexicographic order. To flatten elements in a different order, specify the `order` option.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flattenFrom( x, 0, {
    'order': 'column-major'
});
// returns <ndarray>[ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ]
```

By default, the output ndarray [data type][@stdlib/ndarray/dtypes] is inferred from the input [ndarray][@stdlib/ndarray/ctor]. To return an ndarray with a different [data type][@stdlib/ndarray/dtypes], specify the `dtype` option.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import dtype from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@esm/index.mjs';

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flattenFrom( x, 0, {
    'dtype': 'float32'
});
// returns <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]

var dt = String( dtype( y ) );
// returns 'float32'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **always** returns a copy of input [ndarray][@stdlib/ndarray/ctor] data, even when an input [ndarray][@stdlib/ndarray/ctor] already has the desired number of dimensions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import flattenFrom from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-flatten-from@esm/index.mjs';

var xbuf = discreteUniform( 12, -100, 100, {
    'dtype': 'generic'
});

var x = array( xbuf, {
    'shape': [ 2, 2, 3 ],
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = flattenFrom( x, 1 );
console.log( ndarray2array( y ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-flatten-from.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-flatten-from

[test-image]: https://github.com/stdlib-js/ndarray-flatten-from/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-flatten-from/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-flatten-from/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-flatten-from?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-flatten-from.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-flatten-from/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-flatten-from/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-flatten-from/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-flatten-from/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-flatten-from/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-flatten-from/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-flatten-from/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-flatten-from/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-flatten-from/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/esm

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/esm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
