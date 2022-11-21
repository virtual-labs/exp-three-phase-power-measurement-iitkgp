
		$(document).ready(function(){
		   s5 = [0];
		   plot3 = $.jqplot('chart5',[s5],{
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
		function perform_meter5(){
		s5[0]=parseFloat(document.getElementById('W2').value);
		plot3 = $.jqplot('chart5',[s5],{
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
