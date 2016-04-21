module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        nwjs: {
            options: {
                buildDir: './dist',
                macIcns: './osx/app.icns',
                platforms: ['osx', 'win'],
                version: '0.12.3',
                zip: true
            },
            files: {
                dot: true,
                src: ['./app.nw/**/*']
            }
        }
    });

    grunt.registerTask('default', [
        'nwjs'
    ]);
};
