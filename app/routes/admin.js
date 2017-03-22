import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('post');
  },
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin')
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('admin');
    },
    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      var post = params.post;
      post.get('category').addObject(newCategory);
      newCategory.save().then(function() {
        return post.save();
      });
      this.transitionTo('admin');
    }
  }
});
