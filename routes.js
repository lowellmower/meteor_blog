Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function(){
  this.render('home');
})
Router.route('/new', function(){
  this.render('new');
})