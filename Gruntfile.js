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
        },
        compress: {
            linux: {
                options: {
                    archive: './dist/linux.zip'
                },
                files: [{
                    expand: true,
                    cwd: './dist/svgo-gui/linux64/',
                    src: ['**/*'],
                    dest: '/svgo-gui'
                }]
            },
            mac: {
                options: {
                    archive: './dist/mac.zip'
                },
                files: [{
                    expand: true,
                    cwd: './dist/svgo-gui/osx64/',
                    src: ['**/*'],
                    dest: '/svgo-gui'
                }]
            },
            win: {
                options: {
                    archive: './dist/win.zip'
                },
                files: [{
                    expand: true,
                    cwd: './dist/svgo-gui/win64/',
                    src: ['**/*'],
                    dest: '/svgo-gui'
                }]
            }
        }
    });

    grunt.registerTask('default', [
        'nwjs',
        'compress'
    ]);
};
