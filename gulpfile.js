const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


  sass.compiler = require('node-sass');
  



function style(){
    //where is my scss file
    return gulp.src(['./assets/scss/**/*.scss','node_modules/bootstrap/scss/bootstrap.scss'])
    //compile
    .pipe(sass())
    //where i save my js
    .pipe(gulp.dest('./assets/css'))
    //stream for all browser
    .pipe(browserSync.stream());
	
}
function js() {
    // 1. where is js file
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/popper.min.js'])
    // 3. Where I save my  js
      .pipe(gulp.dest('./assets/js'))
  
      // stream changes to all browser
      .pipe(browserSync.stream());
  }
  function fontsawesome() {
    // 1. where is js file
    return gulp.src(['node_modules/font-awesome/fonts/*']) 
    // 3. Where I save my minify js
      .pipe(gulp.dest('./assets/fonts'))
  
  }
  function fa() {
    // 1. where is js file
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css']) 
    // 3. Where I save my minify js
      .pipe(gulp.dest('./assets/css'))
  
  }


	function watch(){
		browserSync.init({
        server:{
            baseDir:'./assets',
            directory: true
        }
    });
    gulp.watch('./assets/scss/**/*.scss',style);
    gulp.watch('./css/style.css', js);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}


exports.default =(style,watch,js,fontsawesome,fa);



exports.style = style;
exports.watch = watch;
exports.js = js;
exports.fontsawesome = fontsawesome;
exports.fa = fa;


    
