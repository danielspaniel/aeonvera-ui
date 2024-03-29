import DS from 'ember-data';
import LineItem from '../models/line-item';

export default LineItem.extend({
  numberOfTickets: DS.attr('number'),
  raffle: DS.belongsTo('raffle'),
});
