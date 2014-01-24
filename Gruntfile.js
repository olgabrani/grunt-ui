module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /javascripts\/templates\//
        },
        files: {
          'javascripts/templates.js': 'javascripts/templates/**/*.hbs'
        }
      }
    },
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
      },,
      emberTemplates: {
        files: 'javascripts/templates/**/*.hbs',
        tasks: ['emberTemplates']
      }
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
  grunt.loadNpmTasks('grunt-ember-templates');
  
  
  // Default task(s).
  grunt.registerTask('default', ['concat', 'emberTemplates', 'watch']);

};