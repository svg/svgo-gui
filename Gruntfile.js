/*jshint camelcase: false*/

module.exports = function (grunt) {
    'use strict';

    // load all grunt tasks
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var config = {
        src: 'app.nw',
        dist: 'dist'
    };

    grunt.initConfig({

        nodewebkit: {
            options: {
                platforms: ['osx'],
                buildDir: './webkitbuilds' // Where the build version of my node-webkit app is saved
            },
            src: ['./app.nw/**/*'] // Your node-webkit app
        }
    });

    grunt.registerTask('default', [
        'nodewebkit'
    ]);
};
