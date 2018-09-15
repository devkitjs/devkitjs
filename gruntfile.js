const path = require('path');

const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const tscacheDir = path.resolve(__dirname, '.tscache');

module.exports = grunt => {
    grunt.initConfig({
        ts: {
            default: {
                src: ['src/**/*.ts'],
                outDir: 'dist',
                tsconfig: true
            },
            options: {
                tsCacheDir: tscacheDir
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('build', ['ts']);
}