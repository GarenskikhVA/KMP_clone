// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



 /*$( function() {
13
  
14
    $('#getForecast').click( function() {
15
      var data = { city: "Васюки", date: "20120318" };
16
      $.get( "getForecast.txt", data, success, "json" );
17
    } );
18
  
19
    function success( forecastData ) {
20
      var forecast = forecastData.city + " прогноз на " + forecastData.date;
21
      forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";
22
      alert( forecast );
23
    }
24
  
25
  } );
26
  */


  function incratingajax(id){
  	$.get('/posts/inc_rating', {"id:" id}, function(){
		$('#rating'+id).html(returned['rating'])

		}
		)
  }

