import Ember from 'ember';
import DS from 'ember-data';
import IsLineItem from '../mixins/models/is-line-item';
import DeletedAt from '../mixins/models/deleted-at';
import Purchasable from 'aeonvera/models/purchasable';

export default Purchasable.extend(IsLineItem, DeletedAt, {

  DOLLARS_OFF: 0,
  PERCENT_OFF: 1,

  code: DS.attr('string'),
  amount: DS.attr('string'),
  kind: DS.attr('number'),
  timesUsed: DS.attr('number'),
  requiresStudentId: DS.attr('boolean'),

  discountType: DS.attr('string'),
  appliesTo: DS.attr('string'),
  allowedNumberOfUses: DS.attr('number'),

  host: DS.belongsTo('host', {
    polymorphic: true,
    async: true,
  }),
  allowedPackages: DS.hasMany('package', {
    async: true,
  }),

  // restraints: DS.hasMany('restraint')

  name: function() {
    return this.get('code');
  }.property('code'),

  price: function() {
    return this.get('discount');
  }.property('discount'),

  discount: function() {
    let kind = this.get('kind');
    let amount = this.get('amount');

    if (kind === this.get('DOLLARS_OFF')) {
      return '$' + amount;
    }

    return amount + '%';
  }.property('amount', 'kind'),

  isDollarsOff: function() {
    let kind = this.get('kind');
    return kind === this.get('DOLLARS_OFF');
  }.property('kind'),

  restrictedTo: function() {
    let nameArray = [];

    // return this.get('packages', {
    //   event_id: 16
    // }).then(function(pack) {
    //   let name = pack.get('name');
    //
    //   nameArray.push(name);
    // });
    //
    // return nameArray.join(', ');
  }.property('packages'),

  applyToAmount(value, quantity = 1) {
    let dollarsOff = this.get('isDollarsOff');
    let amount = this.get('amount');
    let subTotal = 0;

    if (dollarsOff) {
      subTotal = value - amount;
    } else {
      subTotal = value * (amount / 100.0);
    }

    subTotal = subTotal > 0 ? subTotal : 0;
    return subTotal * quantity;
  },
});
