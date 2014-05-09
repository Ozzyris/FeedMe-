var request = require('request');

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
		if(couldMaximize === true){
			win.maximize();
			couldMaximize = false;
		}else if(couldMaximize === false){
			win.unmaximize();
			couldMaximize = true;
		}
	});

	$('#parametre').click(function(){
		win.showDevTools();
	});

	$('#reload').click(function(){
		$('#reload').addClass( "ReloadAnimation");
		win.reload();
	});

	$.ajax( {
            type: "GET",
            url: "http://feeds.feedburner.com/crunchgear",
            dataType: "xml",
            success: function(xml){
                       $(xml).find('item').each(function(){
                       		$('#HelloRss').hide();
                            var title = $(this).find('title').text();
                            var reducetitle = title.slice(0,30) + ' ...';
                            var url = $(this).find('url').text();
                            var thumbnail = 'http://placekitten.com/300/200';
                            $('<div></div>').html('<a data-url="http://google.com" class="thumbnail"><span class="glyphicon glyphicon-remove removeRss"></span><img src="' + thumbnail + '" /> <p>' + reducetitle + '</p></a>').appendTo('#contentRss');
                      });
        	}
    });


$('#btnTwitter').click(function(){
	$('#HelloTwitter').hide();
	$('#PreloaderTwitter').show();

	request('https://twitter.com/search?q=collective%20intelligence', function (error, response, body) {
		if (!error && response.statusCode === 200) {
			$('#PreloaderTwitter').hide();
			alert(body);
		}else{
			alert(error);
		}
	});
});

$('#thumbnail').click(function(){
	var lien = $(this).data('url');
	gui.Shell.openExternal(lien);
	alert(lien);
});

	$('#btnTodolist').tab('show');
	$('#btnGoogle').tab('show');
	$('#btnTwitter').tab('show');
	$('#btnRss').tab('show');

});