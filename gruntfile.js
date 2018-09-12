const path = require('path');

const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');

module.exports = grunt => {
    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                tsconfig: tsconfigPath
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['ts']);
}