
		$(document).ready(function(){
		   s1 = [0];
		   plot5 = $.jqplot('chart1',[s1],{
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
		function perform_meter1(){
		s1[0]=parseFloat(document.getElementById('V1').value);
		plot5 = $.jqplot('chart1',[s1],{
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
