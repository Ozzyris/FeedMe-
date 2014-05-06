$( document ).ready(function() {

	var couldMaximize = true;

	var gui = require('nw.gui');
	var win = gui.Window.get();

	$('#close').click(function(){
		window.close();
	});

	$('#reduce').click(function(){
		win.minimize();
	});

	$('#maximise').click(function(){
		if(couldMaximize == true){
			win.maximize();
			couldMaximize = false;
		}else if(couldMaximize == false){
			win.unmaximize();
			couldMaximize = true;
		}
	});

	$('#parametre').click(function(){
		win.showDevTools();
	});

	$('#reload').click(function(){
		win.reload();
	});

	$('#btnTab3').tab('show');
	$('#btnTab2').tab('show');
	$('#btnTab1').tab('show');

});