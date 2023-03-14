
		$(document).ready(function(){
		   s4 = [0];
		   plot3 = $.jqplot('chart4',[s4],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 250,
					   intervals:[0, 50, 100, 150, 200, 250],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter4(){
		s4[0]=parseFloat(document.getElementById('W1').value);
		plot3 = $.jqplot('chart4',[s4],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 250,
					   intervals:[0, 50, 100, 150, 200, 250],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
