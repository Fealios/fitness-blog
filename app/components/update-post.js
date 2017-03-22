import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    postUpdateShow() {
      this.set('updatePost', true);
    },
    update(post) {
      var params = {
        body: this.get('body'),
        date: this.get('date'),
        title: this.get('title'),
        url: this.get('url'),
        author: this.get('author')
      }
      this.set('updatePost', false);
      this.sendAction('update', post, params)
    }
  }
});
