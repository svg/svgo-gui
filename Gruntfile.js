module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        nwjs: {
            options: {
                mac_icns: './osx/app.icns',
                platforms: ['osx', 'win'],
                buildDir: './dist' // Where the build version of my node-webkit app is saved
            },
            files: {
                dot: true,
                src: ['./app.nw/**/*'] // Your node-webkit app
            }
        }
    });

    grunt.registerTask('default', [
        'nwjs'
    ]);
};
