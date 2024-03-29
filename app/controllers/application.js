import Ember from 'ember';

export default Ember.Controller.extend({
  navigation: 'fixed-top-nav',
  mobileMenuLeft: 'nav/welcome/left-items',
  mobileMenuRight: 'nav/welcome/right-items',

  init: function () {
    var store = this.get('store');
    this.set('user', store.createRecord('user'));
  },

  actions: {

    transitionToLoginRoute() {
      this.transitionToRoute('login');
    },

    /**
      Create new account / new user.
    */
    registerNewUser: function () {
      var user = this.get('user');

      user.save().then(() => {
        /*
          success
          - hide the modal
          - notify of confirmation email
        */
        this.get('flashMessages').success(
          'You will receive an email with instructions about how to confirm your account in a few minutes.'
        );
        jQuery('#signup-modal a.close-reveal-modal').trigger('click');
      }, () => {
        /*
          error
          - show error messages
        */
      });
    },
  },

});
