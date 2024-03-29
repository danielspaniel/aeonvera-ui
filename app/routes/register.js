import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    let subdomain = params.subdomain;

    return this.get('store').findRecord('host', subdomain, {
      adapterOptions: {
        query: {
          subdomain: subdomain,
          include: 'packages,levels,competitions,lessons,membership_options,membership_discounts',
        },
      },
    });
  },

});
