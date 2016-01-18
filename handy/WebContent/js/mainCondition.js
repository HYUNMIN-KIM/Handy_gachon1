var chart;
var charData = [ {
	
	subdata: [
	{ date : "2012-01-01 01" },
	{ temp : 8 },
	{ momentum : 25 }
	]
}, {
	date : "2012-01-01 02",
	temp : 8,
	momentum : 15
}, {
	date : "2012-01-01 03",
	temp : 10,
	momentum : 45
}, {
	date : "2012-01-01 04",
	temp : 12,
	momentum : 15
}, {
	date : "2012-01-01 05",
	temp : 14,
	momentum : 55
}, {
	date : "2012-01-01 06",
	temp : 11,
	momentum : 45
}, {
	date : "2012-01-01 07",
	temp : 6,
	momentum : 40
}, {
	date : "2012-01-01 08",
	temp : 7,
	momentum : 32
}, {
	date : "2012-01-01 09",
	temp : 9,
	momentum : 13
}, {
	date : "2012-01-01 10",
	temp : 13,
	momentum : 25
}, {
	date : "2012-01-01 11",
	temp : 15,
	momentum : 54
}, {
	date : "2012-01-01 12",
	temp : 19,
	momentum : 63
}, {
	date : "2012-01-01 13",
	temp : 21,
	momentum : 55
}, {
	date : "2012-01-01 14",
	temp : 22,
	momentum : 66
}, {
	date : "2012-01-01 15",
	temp : 20,
	momentum : 44
}, {
	date : "2012-01-01 16",
	temp : 18,
	momentum : 34
}, {
	date : "2012-01-01 17",
	temp : 14,
	momentum : 48
}, {
	date : "2012-01-01 18",
	temp : 16,
	momentum : 62
}, {
	date : "2012-01-01 19",
	temp : 18,
	momentum : 22
}, {
	date : "2012-01-01 20",
	temp : 17,
	momentum : 37
}, {
	date : "2012-01-01 21",
	temp : 15,
	momentum : 68
}, {
	date : "2012-01-01 22",
	temp : 12,
	momentum : 49
}, {
	date : "2012-01-01 23",
	temp : 10,
	momentum : 66
}, {
	date : "2012-01-01 24",
	temp : 8,
	momentum : 41
} ];

AmCharts
		.ready(function() {
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