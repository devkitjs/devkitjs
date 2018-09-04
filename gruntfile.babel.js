module.exports = grunt => {
    grunt.initConfig({
        typescript: {
            default: {
                src: ['./src/**/*.ts'],
                dest: './dist/',
                options: {
                    module: 'amd',
                    target: 'es6',
                    basePath: './src/',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('build', ['typescript']);
}