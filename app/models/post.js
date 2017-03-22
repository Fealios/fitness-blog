import DS from 'ember-data';

export default DS.Model.extend({
    body: DS.attr(),
    date: DS.attr(),
    url: DS.attr(),
    title: DS.attr(),
    author: DS.attr(),
    comments: DS.hasMany('comment', { async: true })
});
