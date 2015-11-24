module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        nwjs: {
            options: {
                version: '0.12.3',
                mac_icns: './osx/app.icns',
                platforms: ['osx', 'win'],
                buildDir: './dist'
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
