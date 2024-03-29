import DS from 'ember-data';
import Attendance from '../models/attendance';

export default Attendance.extend({
  packageId: DS.attr('number'),
  level: DS.belongsTo('level', {
    async: true,
  }),
  competitionResponses: DS.hasMany('competitionResponse'),
});
