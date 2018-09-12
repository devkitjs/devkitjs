const path = require('path');

module.exports = grunt => {
    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                tsconfig: '../../../tsconfig.json'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['ts']);
}