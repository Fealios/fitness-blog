import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Do you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
