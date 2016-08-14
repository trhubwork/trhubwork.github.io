module.exports = function(grunt) {
   // 1. All configuration goes here
   grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),



     uglify: {
     build: {
         src: 'js/perfmatters.js',
         dest: 'js/perfmatters.min.js'
      }
    },
    cssmin: {
      build: {
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
  }
  });

   // 2. Where we tell Grunt we plan to use this plug-in.
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');

   //3. Where we tell Grunt what to do when we type "grunt" into the terminal.
   grunt.registerTask('default', ['uglify']);
   grunt.registerTask('default', ['cssmin']);
};
