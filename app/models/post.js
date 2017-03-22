import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    body: DS.attr(),
    date: DS.attr(),
    url: DS.attr(),
    title: DS.attr(),
    author: DS.attr(),
    comments: DS.hasMany('comment', { async: true }),
    category: DS.belongsTo('category', { async: true}),
    tooLong: Ember.computed('body', function() {
      return (this.get('body').length > 200);
    }),
    bodyShort: Ember.computed('body', function() {
      if(this.get('body').length > 200) {
        return this.get('body').substring(0, 200);
      } else {
        return null;
      }
    })
});
