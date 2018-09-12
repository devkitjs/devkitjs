const path = require('path');

module.exports = grunt => {
    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                tsconfig: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['ts']);
}