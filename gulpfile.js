//Hasta acá estaría weno que lo escupa yo pwt spit gulpfile
var gulp = require('gulp');
var livereload = require('gulp-livereload');
let options = {"port":"7777"}
async function server(){
    livereload.listen(options)
    await Promise.resolve("All ok");
}

exports.watch = watch 
exports.default = server 


