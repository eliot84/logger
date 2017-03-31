

Router.route('/', function (){
	this.render('home');
});

Router.route('registration');

Router.route('/main/:_id', function(){
this.render('main');
}, {
	name: 'post.main'
});

