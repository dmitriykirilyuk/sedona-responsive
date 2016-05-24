"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    clean: {
      build: ["build"]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src",
          src: [
            "img/**",
            "js/script.js",
            "js/script-main.js",
            "index.html",
            "form.html"
          ],
          dest: "build"
        }]
      }
    },

    sass: {
      style: {
        files: {
          "build/css/style.css": "src/sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/*.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
     style: {
       expand: true,
       src: ["build/css/style.css"],
     }
    },

    cssmin: {
      style: {
        files: {
          "build/css/style.min.css":["build/css/style.css"]
        }
      }
    },

    uglify: {
      style: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"],
          "build/js/script-main.min.js": ["build/js/script-main.js"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png, jpg, svg}"]
        }]
      }
    },

    watch: {
      style: {
        files: ["src/sass/**/*.scss"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  };



  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);

  grunt.registerTask ("build", [
    "clean",
    "copy",
    "sass",
    "postcss",
    "cmq",
    "csscomb",
    "cssmin",
    "uglify",
    "imagemin"

  ]);
};
