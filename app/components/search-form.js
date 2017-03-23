import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search() {
      var params = {
        title: this.get('title')
      };
      console.log(params.title)
      this.sendAction('search', params);
    }
  }
});
