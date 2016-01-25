var chart;

AmCharts.ready(function() {
			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = charData;
			chart.dataDateFormat = "YYYY-MM-DD HH";
			chart.categoryField = "date";

			var categoryAxis = chart.categoryAxis;
			categoryAxis.parseDates = true;
			categoryAxis.minPeriod = "hh";
			categoryAxis.gridAlpha = 0.1;
			categoryAxis.minorGridAlpha = 0.1;
			categoryAxis.axisAlpha = 0;
			categoryAxis.minorGridEnabled = true;
			categoryAxis.inside = true;
			// categoryAxis.limitTograph = "g1";

			var valueAxis = new AmCharts.ValueAxis();
			valueAxis.tickLength = 0;
			valueAxis.axisAlpha = 0;
			valueAxis.showFirstLabel = false;
			valueAxis.showLastLabel = false;

			chart.addValueAxis(valueAxis);

//			var guide = new AmCharts.Guide();
//			guide.value = 10;
//			guide.toValue = 20;
//			guide.fillColor = "#00CC00";
//			guide.inside = true;
//			guide.fillAlpha = 0.2;
//			guide.lineAlpha = 0;
//
//			valueAxis.addGuide(guide);

			var graph_temp = new AmCharts.AmGraph();
			// graph_temp.id = "g1";
			// graph_temp.type = "column",
			graph_temp.lineColor = "#00CC00";
			graph_temp.valueField = "temp";
			graph_temp.dashLength = 3;
			graph_temp.balloonText = "<b><span style='font-size:14px;'>[[temp]]</span></b>";
			graph_temp.bullet = "round";

			chart.addGraph(graph_temp);

			var graph_momentum = new AmCharts.AmGraph();
			// graph_temp.id = "g1";
			graph_momentum.type = "column";
			graph_momentum.lineColor = "#770055";
			graph_momentum.valueField = "momentum";
			graph_momentum.fixedColumnWidth = 2;
			graph_momentum.fillAlphas = 1;
			// graph_momentum.dashLength = 3;
			graph_momentum.balloonText = "<b><span style='font-size:14px;'>[[momentum]]</span></b>";
			// graph_momentum.bullet = "round";

			chart.addGraph(graph_momentum);

			var chartCursor = new AmCharts.ChartCursor();
			// chartCursor.limitTograph = "g1";
			// chartCursor.valueLineEnabled = true;
			// chartCursor.valueLineBalloonEnabled = true;
			chartCursor.categoryBalloonDateFormat = "MM-DD HH:00";
			chartCursor.cursorColor = "#00CC00";
			chart.addChartCursor(chartCursor);
			chart.mouseWheelZoomEnabled = true;

			chart.write("condition_detail");
		});