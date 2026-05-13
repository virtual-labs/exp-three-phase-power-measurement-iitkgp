
		$(document).ready(function(){
		   s6 = [0];
		   plot6 = $.jqplot('chart6',[s6],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 200,
					   intervals:[0, 50, 100, 150, 200],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter6(){
		s6[0]=parseFloat(document.getElementById('V11').value);
		plot6 = $.jqplot('chart6',[s6],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: 0,
					   max: 200,
					   intervals:[0, 50, 100, 150, 200],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
