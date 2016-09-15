module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        nwjs: {
            options: {
                buildDir: './dist',
                flavor: 'normal',
                macIcns: './osx/app.icns',
                platforms: ['osx64', 'win64', 'linux64'],
                version: 'latest',
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
