import Ember from 'ember';

export default Ember.Route.extend({
  modelName: 'raffle-ticket',

  model: function (params) {
    let modelName = this.get('modelName');
    let raffle = this.modelFor('events.show.raffles.show');

    let parentKey = 'raffle';
    let modelParams = {};
    modelParams[parentKey] = raffle;

    let recordPromise = this.store.createRecord(modelName, modelParams);

    return recordPromise;
  },
});
