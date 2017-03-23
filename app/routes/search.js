import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('post');
  },
  actions: {
    search(params) {
      var current = this;
      console.log("inside route")
      var model;
      this.store.query('post', { orderBy: 'title', equalTo: params.title, limit: 1})
      .then(function(result) {
        if(result.get('length') > 0) {
          console.log("article exists");
          console.log(result.objectAt(0).get('id'))
          current.transitionTo('search', current.store.findRecord('post', result.objectAt(0).get('id')));
        } else {
          console.log("no article with that title");
        }
      })
      this.transitionTo('search');
    }
  }
});
