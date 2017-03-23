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
      var post = params.post;
      this.store.query('category', { orderBy: "name", equalTo: params.name, limit: 1})
      .then(function(result) {
        if(!(result.get('length') > 0)) {
          console.log("new category");
          var newCategory = this.store.createRecord('category', params);
          post.get('categories').addObject(newCategory);
          newCategory.save().then(function() {
            return post.save();
          });
        } else {
          console.log("category already exists");
          //need to .addObject to post with result
          console.log(result);
          console.log(result.meta)
        }
      })
      post.save();
      this.transitionTo('admin');
    }
  }
});
