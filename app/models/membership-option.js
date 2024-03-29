import DS from 'ember-data';
import LineItem from '../models/line-item';

export default LineItem.extend({
  durationInWords: DS.attr('string'),
  community: DS.belongsTo('community'),
});
