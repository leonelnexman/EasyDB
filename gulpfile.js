const { src, dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

function images(){
    return src(['src/images/src/*.*'])
    .pipe(src('src/images/src/*.*'))
    .pipe(newer('src/images'))
    .pipe(imagemin())
    .pipe(dest('src/images'))
}

function styles() {
    // Paths to your SCSS files and Swiper styles in node_modules
    const scssFiles = 'src/scss/**/*.scss';
    const swiperStyles = 'node_modules/swiper/swiper-bundle.min.css';
    return src([swiperStyles, scssFiles])
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('src/js/*.js')
    .pipe(browserSync.stream())
}

function swiperScript() {
    return src('node_modules/swiper/swiper-bundle.min.js')
        .pipe(concat('swiper.js')) 
        .pipe(dest('src/js')) 
        .pipe(browserSync.stream());
}

function building(){
    return src([
        'src/css/style.min.css',
        'src/images/*.*',
        'src/js/**/*.js',
        'src/js/*.js',
        'src/*.html',
        'src/fonts/*'
    ], {base: 'src'})
    .pipe(dest('dist'))
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function watching() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    watch(['src/scss/**/*.scss'], styles)
    watch(['src/images/'], images)
    watch(['src/js/**/*.js'], scripts)
    watch(['src/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching =  watching;
exports.building =  building;
exports.images =  images;
exports.swiperScript - swiperScript;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, swiperScript,  watching);