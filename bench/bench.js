'use strict'

var createFilter = require('../')
var rawFilters = require('./filters.json')
var data = require('./data.json')

for (let i = 0; i < 8; i++) {
  data = data.concat(data)
}

const filters = []

console.time('create ' + rawFilters.length + ' filters 100 times')
for (let j = 0; j < rawFilters.length; j++) {
  filters.push(createFilter(rawFilters[j]))
}
console.timeEnd('create ' + rawFilters.length + ' filters 100 times')

console.time('apply ' + filters.length + ' filters to ' + data.length + ' items')
for (let j = 0; j < data.length; j++) {
  var feature = data[j]
  for (var k = 0; k < filters.length; k++) {
    var filter = filters[k]
    filter(feature)
  }
}
console.timeEnd('apply ' + filters.length + ' filters to ' + data.length + ' items')
