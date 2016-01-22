import Ember from 'ember';

export default Ember.Mixin.create({
  parentIdKey: 'event_id',
  parentPathRoot: 'events.show',

  model: function() {
    let modelName = this.get('modelName');
    let parentPathRoot = this.get('parentPathRoot');
    let parent = this.modelFor(parentPathRoot);
    let query = {};
    let key = this.get('parentIdKey');
    query[key] = parent.get('id')

    return this.store.query(modelName, query);
  }
});
