requirejs.config({
	paths: {
        'jquery' : 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery'
    },
    shim:{
        'jquery' : {
            exports: 'jQuery'
        }
    }
});

require(
	[
		'model',
		'view',
        'controller',
        'jquery'
	],
	function (model,view,controller,$) {
		var firstToDoList = ['learn javascript', 'learn html', 'make coffe'];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);

	}
);