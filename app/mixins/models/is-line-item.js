import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  isDiscount: function() {
    return this.get('constructor.modelName') === 'discount';
  }.property(),

  isShirt: function() {
    return this.get('constructor.modelName') === 'shirt';
  }.property(),

  isCompetition: function() {
    return this.get('constructor.modelName') === 'competition';
  }.property(),

  isMembershipOption: Ember.computed(function() {
    return this.get('constructor.modelName') === 'membership-option';
  }),

  isMembershipDiscount: Ember.computed(function() {
    return this.get('constructor.modelName') === 'membership-discount';
  }),

  isLesson: Ember.computed(function() {
    return this.get('constructor.modelName') === 'lesson';
  }),

  isADiscount: Ember.computed(function() {
    return (this.get('isDiscount') || this.get('isMembershipDiscount'));
  }),
});
