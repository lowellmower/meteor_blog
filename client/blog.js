Blog.config({
  syntaxHighlighting: true,
  syntaxHighlightingTheme: 'github'
});

Template.new.events({
  'submit .new-post': function(event){
    var title = event.target.title.value;
    var body = event.target.body.value;
    Meteor.call("addPost", title, body);
    event.target.title.value = "";
    event.target.body.value = "";
    return false;
  }
});

Meteor.methods({
  addPost: function(title, body){
    Posts.insert({
      title: title,
      body: body,
      createdAt: new Date(),
      owner: Meteor.userId(),
    });
  }
});