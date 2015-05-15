import Ember from 'ember';

export default Ember.Route.extend({

	setupController: function(controller, model) {
		this.controller.send('setMobileMenuProperties');
		this._super(controller, model);
	},


	// http://stackoverflow.com/questions/12150624/ember-js-multiple-named-outlet-usage
	renderTemplate: function() {

		// Render default outlet
		this.render();

		// render footer
		this.render('shared/footer', {
			outlet: 'bottom-footer',
			into: 'application'
		});

	}
});