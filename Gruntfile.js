module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'sass/*.scss',
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'javascripts/vendor/*.js',
        ],
        tasks: ['concat']
      },
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          outputStyle: 'expanded',
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['javascripts/vendor/*.js'],
        dest: 'dist/vendor.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'watch']);

};