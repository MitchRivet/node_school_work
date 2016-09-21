var fs = require('fs')
var path = process.argv[2]
var buf = fs.readFileSync(path)

var str = buf.toString()
var str = str.split('\n');

var count = str.length - 1;

console.log(count);
