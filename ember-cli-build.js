/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults){
  var app = new EmberApp({
    'ember-cli-foundation-sass': {
      'modernizr': true,
      'fastclick': true,
      'foundationJs': 'all'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/momentjs/moment.js');


  // app.import('bower_components/pickadate/compressed/picker.js');
  // app.import('bower_components/pickadate/compressed/themes/default.css');

  // tetris!
  app.import('vendor/blockrain/blockrain.css');
  app.import('vendor/blockrain/blockrain.jquery.js');

  return app.toTree();
};
