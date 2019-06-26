## compile-filter

[![Build Status](https://travis-ci.org/gmaclennan/compile-filter.svg?branch=master)](https://travis-ci.org/gmaclennan/compile-filter)
[![npm](https://img.shields.io/npm/v/compile-filter.svg)](https://www.npmjs.com/package/compile-filter)

This library is forked from
[mapbox/feature-filter](https://github.com/mapbox/feature-filter), but adapted
to work with any object. This library implements the semantics specified by the
[Mapbox GL JS spec](https://www.mapbox.com/mapbox-gl-style-spec/#filter), but
supports arrays as keys as well as strings, in order to filter against nested properties

### API

`compile(filter)`

Given a filter expressed as nested arrays, return a new function that evaluates
whether a given feature passes its test.

#### Parameters

| parameter | type  | description      |
| --------- | ----- | ---------------- |
| `filter`  | Array | mapbox gl filter |

**Returns** `Function`, filter-evaluating function

### Usage

``` javascript
var compile = require('compile-filter');

// will match a feature with class of street_limited,
// AND an admin_level less than or equal to 3,
// that's NOT a polygon.
var filter = [
    "all",
    ["==", "class", "street_limited"],
    ["<=", "admin_level", 3]
]

// testFilter will be a function that returns a boolean
var testFilter = compile(filter);

// Layer feature that you're testing. Must have type
// and properties keys.
var feature = {
   class: "street_limited"
   admin_level: 1
};

// will return a boolean based on whether the feature matched the filter
return testFilter(feature);
```
