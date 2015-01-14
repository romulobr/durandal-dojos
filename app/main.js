requirejs.config({
	paths: {
		'text': '../bower_components/requirejs-text/text',
		'durandal': '../bower_components/durandal/js',
		'plugins': '../bower_components/durandal/js/plugins',
		'transitions': '../bower_components/durandal/js/transitions',
		'knockout': '../bower_components/knockout.js/knockout',
		'jquery': '../bower_components/jquery/jquery.min'
	}
});

define(['durandal/system', 'durandal/app'], function(system, app){
	system.debug(true);
	app.title = "TODO";

	app.configurePlugins({router: true});

	app.start().then(function() {
		app.setRoot('list/list');
	});
   
});