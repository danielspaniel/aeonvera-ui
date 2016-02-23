import Ember from 'ember';
import {
  module, test
}
from 'qunit';
import startApp from 'aeonvera/tests/helpers/start-app';
import Mirage from 'ember-cli-mirage';
let application;

module('Acceptance | login', {
  beforeEach() {
      application = startApp();
    },

    afterEach() {
      Ember.run(application, 'destroy');
    }
});

test('visiting /', function(assert) {
  visit('/');
  andThen(() => assert.equal(currentURL(), '/welcome'));

  click('.auth-link a[data-reveal-id="login-modal"]');
  andThen(() => assert.equal(find('#login-modal-title').text(), 'Login'));
});

test('can login', function(assert) {
  server.create('user');
  visit('/');
  click('.auth-link a[data-reveal-id="login-modal"]');
  andThen(() => assert.equal(find('#login-modal-title').text(), 'Login'));

  fillIn('#login-modal input[type="text"]', 'test@test.test');
  fillIn('#login-modal input[type="password"]', 'some-password');

  click('#login-modal button[type="submit"]');

  andThen(() => assert.equal(find('.flash-message').text(),
    'You have successfully logged in'));
});