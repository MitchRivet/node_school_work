//directions

// The solution to this problem is almost the same as the previous problem
//   except you must now do it the Node.js way: asynchronous.
//
//   Instead of fs.readFileSync() you will want to use fs.readFile() and
//   instead of using the return value of this method you need to collect the
//   value from a callback function that you pass in as the second argument. To
//   learn more about callbacks, check out:
//   [https://github.com/maxogden/art-of-node#callbacks](https://github.com/max
//   ogden/art-of-node#callbacks).
//
//   Remember that idiomatic Node.js callbacks normally have the signature:
//
//      function callback (err, data) { /* ... */ }
//
//   so you can check if an error occurred by checking whether the first
//   argument is truthy. If there is no error, you should have your Buffer
//   object as the second argument. As with readFileSync(), you can supply
//   'utf8' as the second argument and put the callback as the third argument
//   and you will get a String instead of a Buffer.
//
//   Documentation on the fs module can be found by pointing your browser here:
//   file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html

//my answer
// var fs = require('fs')
// var count = 0
//
// function counter(callback) {
//     fs.readFile(process.argv[2], 'utf-8', function doneReading(err, fileContents) {
//         var string = fileContents.split('\n');
//         var count = string.length - 1;
//         console.log(count)
//
//     })
// }
//
// counter()

//official answer

var fs = require('fs')
     var file = process.argv[2]

     fs.readFile(file, function (err, contents) {
       // fs.readFile(file, 'utf8', callback) can also be used
       var lines = contents.toString().split('\n').length - 1
       console.log(lines)
     })
