import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';



Template.register.events({
	'submit form': function(){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();

		Accounts.createUser({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName
		}, function(error, results){
			if(error)
				{
					console.log(error.reason);
				}
			else
			{
				Router.go('post.main', {_id: Meteor.userId()});
			}
		});
	
	}
});




Template.navigation.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
	}
});

Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();

		Meteor.loginWithPassword(email, password, function(error){
			console.log(error.reason);
		});
	}
});




Template.main.helpers({
	youare(){
		return Meteor.userId();
	}
});

/*
Template.register.events({
	'submit form': function(){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();

		Accounts.createUser({
			email: email,
			password: password
		}, function(error){
			if(error)
				{
					console.log(error.reason);
				}
			else
			{
				Router.go('/');
			}
		});
	
	}
});
*/