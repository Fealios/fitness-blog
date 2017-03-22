import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true)
    },
    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        date: today(),
        url: this.get('url')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});

function today() {
  var today = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
}
