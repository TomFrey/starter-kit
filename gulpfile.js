/* global require */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const path = require('path');

const sourcemaps = require('gulp-sourcemaps');
//const babel = require('gulp-babel');
const gulpSequence = require('gulp-sequence');


//const htmlreplace = require('gulp-html-replace');
//const fileinsert = require("gulp-file-insert");
const fileinject = require('gulp-inject');


/* Change your directory and settings here */
const settings = {
    publicDir: './app',
    sassDir: './app/scss',
    cssDir: './app/assets/css',
    jsDir: './app/assets/js'
};


gulp.task('hello', function () {
   console.log('Hallo welt!!!');
});



/**
 * serve task, will launch browserSync and launch index.html files,
 * and watch the changes for html and sass files
 * and watching if a file in the template folder is changing and then insert the changes in all html files in app
 **/
gulp.task('serve', ['sass', 'injectHeaderAndFooter'], function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.publicDir
    });

    /**
     * watch for changes in sass files
     */
    gulp.watch(settings.sassDir + "/**/*.scss", ['sass']);

    /**
     * watch for changes in html files
     */
    gulp.watch(settings.publicDir + "/*.html").on('change', browserSync.reload);

});

/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + "/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(settings.cssDir))
        .pipe(browserSync.stream());
});



/**
 * Default task, running just `gulp` will compile the sass,
 * compile the site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['serve']);


/**
 * Setzt den Standard html header und footer auf jeder Seite ein
 */
gulp.task('headerFooterReplace', function() {
  gulp.src('./app/seite1.html')
    .pipe(fileinsert({
      '/* header */': './app/header.html',
      '/* footer */': './app/footer.html'
    }))
    .pipe(gulp.dest('dist/'));
});


/**
 * Setzt den Standard html header und footer auf jeder Seite ein
 * Hört auf Änderungen in html Files im Ordner templates
 */
gulp.task('injectHeaderAndFooter', function () {
  gulp.watch('./app/templates/*.html', function (file) {
    return gulp.src('./app/*.html')
      .pipe(fileinject(gulp.src(['./app/templates/header.html']), {
        starttag: '<!-- inject:htmlHeader -->',
        transform: function(filepath, file) {
          return file.contents.toString();
        }
      }))
      .pipe(fileinject(gulp.src(['./app/templates/footer.html']), {
          starttag: '<!-- inject:htmlFooter -->',
          transform: function(filepath, file) {
            return file.contents.toString();
          }
      }))
      .pipe(gulp.dest('app/'));
  });
});




/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('sass999', function() {
    return gulp.src(settings.sassDir + "/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(prefix('last 2 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.cssDir))
        .pipe(browserSync.stream());
});


/**
 * Macht aus ES6 -> ES5
 */
//gulp.task('babel', function () {
//    gulp.src(settings.jsDir + '/**/*.js')
//        .pipe(babel({presets: ['env']}))
//        .pipe(gulp.dest('dist/js'))
//});


/**
 * Kopiert irgendwas irgendwo hin
 */
//gulp.task('copy', function () {
//    gulp.src(['app/index.html','app/**/*.css',''])
//        .pipe(gulp.dest('dist'))
//});


/**
 * Löscht das dist
 */
//gulp.task('clean', function () {
//   return gulp.src('dist', {read: false})
//       .pipe(clean());
//});



/**
 * Gesamt Task der alles ausführt
 * ACHTUNG startet alle Tasks parallel
 */
//gulp.task('build', ['clean','babel', 'sass', 'copy']);


/**
 * Gesamt Task der alles ausführt -> seriell
 * Die Tasks im array laufen dann wieder parallel
 */
//gulp.task('build', function(callback) {
//  runSequence('clean', ['babel', 'sass'], 'copy', callback);
//});
