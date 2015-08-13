import Ember from 'ember';

var alreadyRun = false;

var reportError = function(errorData){
  Ember.$.ajax({
    url: 'http://swing.vhost:3000/api/front_end_error',
    method: 'POST',
    dataType: 'json',
    data: { error: errorData },
    success: function(data, textStatus, jqXHR){
      // notify the user what happened, give link
      // similar to atom.io's editor

    },
    error: function(jqXHR, textStatus, errorThrown){
      // not sure what to do if this fails... we can't report it
    }
  });
};

export default {
  name: 'error-handler',

  initialize: function(){
    if (alreadyRun) {
      return;
    } else {
      alreadyRun = true;
    }

    Ember.RSVP.on('error', function(error){
      var errorData = {
        message: error.status + ": " + error.responseText,
        cause: error.statusText
      };

      reportError(errorData);
    });

    Ember.onerror = function(error){
      var errorData = {
        message: error.status + ": " + error.responseText,
        method: error.responseText,
        cause: error.statusText
      };

      reportError(errorData);
    };

    Ember.Logger.error = function(message, cause, stack){
      var errorData = {
        message: message,
        stack: stack,
        cause: cause
      };

      reportError(errorData);
    };
  }
};