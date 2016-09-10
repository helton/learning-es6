module.exports = function (grunt) {
  grunt.initConfig({
    traceur: {
      options: {
        experimental: true
      },
      custom: {
        files:  {
          'grunt-build/app.js': 'grunt-js/**/*.js'
        }
      }
    },
    watch: {
      files: 'grunt-js/**/*.js',
      tasks: 'traceur'
    }
  });

  grunt.loadNpmTasks('grunt-traceur-latest');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
