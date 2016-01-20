var chart;
var chartSub;
var charData2;
var charData = [ {
	date: "2016-01-01",
	condition: 10,
	subdata: [
		      	{ time: "2016-01-01 01", temp: 2, momentum: 25 },
		      	{ time: "2016-01-01 02", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 03", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 04", temp: 2, momentum: 25 },
		      	{ time: "2016-01-01 05", temp: 4, momentum: 32 },
		      	{ time: "2016-01-01 06", temp: 3, momentum: 32 },
		      	{ time: "2016-01-01 07", temp: 4, momentum: 25 },
		      	{ time: "2016-01-01 08", temp: 2, momentum: 32 },
		      	{ time: "2016-01-01 09", temp: 3, momentum: 32 },
		      	{ time: "2016-01-01 10", temp: 4, momentum: 25 },
		      	{ time: "2016-01-01 11", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 12", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 13", temp: 5, momentum: 25 },
		      	{ time: "2016-01-01 14", temp: 3, momentum: 32 },
		      	{ time: "2016-01-01 15", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 16", temp: 6, momentum: 25 },
		      	{ time: "2016-01-01 17", temp: 3, momentum: 32 },
		      	{ time: "2016-01-01 18", temp: 1, momentum: 32 },
		      	{ time: "2016-01-01 19", temp: 6, momentum: 25 },
		      	{ time: "2016-01-01 20", temp: 3, momentum: 32 },
		      	{ time: "2016-01-01 21", temp: 1, momentum: 32 },
		      	{ time: "2016-01-01 22", temp: 7, momentum: 32 },
		      	{ time: "2016-01-01 23", temp: 6, momentum: 25 },
		      	{ time: "2016-01-01 24", temp: 3, momentum: 32 }
		      	]
}, {
	date: "2016-01-02",
	condition: 4,
	subdata: [
		      	{ time: "2016-01-02 01", temp: 4, momentum: 35 },
		      	{ time: "2016-01-02 02", temp: 6, momentum: 42 },
		      	{ time: "2016-01-02 03", temp: 4, momentum: 32 },
		      	{ time: "2016-01-02 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-02 05", temp: 5, momentum: 34 },
		      	{ time: "2016-01-02 06", temp: 3, momentum: 12 },
		      	{ time: "2016-01-02 07", temp: 4, momentum: 35 },
		      	{ time: "2016-01-02 08", temp: 3, momentum: 27 },
		      	{ time: "2016-01-02 09", temp: 6, momentum: 28 },
		      	{ time: "2016-01-02 10", temp: 6, momentum: 21 },
		      	{ time: "2016-01-02 11", temp: 4, momentum: 21 },
		      	{ time: "2016-01-02 12", temp: 4, momentum: 33 },
		      	{ time: "2016-01-02 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-02 14", temp: 1, momentum: 33 },
		      	{ time: "2016-01-02 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-02 16", temp: 4, momentum: 24 },
		      	{ time: "2016-01-02 17", temp: 5, momentum: 22 },
		      	{ time: "2016-01-02 18", temp: 5, momentum: 30 },
		      	{ time: "2016-01-02 19", temp: 6, momentum: 23 },
		      	{ time: "2016-01-02 20", temp: 3, momentum: 35 },
		      	{ time: "2016-01-02 21", temp: 2, momentum: 35 },
		      	{ time: "2016-01-02 22", temp: 2, momentum: 29 },
		      	{ time: "2016-01-02 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-02 24", temp: 3, momentum: 25 }
		      	]
}, {
	date: "2016-01-03",
	condition: 3,
	subdata: [
		      	{ time: "2016-01-03 01", temp: 2, momentum: 35 },
		      	{ time: "2016-01-03 02", temp: 5, momentum: 42 },
		      	{ time: "2016-01-03 03", temp: 5, momentum: 32 },
		      	{ time: "2016-01-03 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-03 05", temp: 2, momentum: 34 },
		      	{ time: "2016-01-03 06", temp: 2, momentum: 12 },
		      	{ time: "2016-01-03 07", temp: 7, momentum: 35 },
		      	{ time: "2016-01-03 08", temp: 7, momentum: 27 },
		      	{ time: "2016-01-03 09", temp: 4, momentum: 28 },
		      	{ time: "2016-01-03 10", temp: 2, momentum: 21 },
		      	{ time: "2016-01-03 11", temp: 1, momentum: 21 },
		      	{ time: "2016-01-03 12", temp: 2, momentum: 33 },
		      	{ time: "2016-01-03 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-03 14", temp: 4, momentum: 33 },
		      	{ time: "2016-01-03 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-03 16", temp: 6, momentum: 24 },
		      	{ time: "2016-01-03 17", temp: 6, momentum: 22 },
		      	{ time: "2016-01-03 18", temp: 4, momentum: 30 },
		      	{ time: "2016-01-03 19", temp: 1, momentum: 23 },
		      	{ time: "2016-01-03 20", temp: 2, momentum: 35 },
		      	{ time: "2016-01-03 21", temp: 4, momentum: 35 },
		      	{ time: "2016-01-03 22", temp: 4, momentum: 29 },
		      	{ time: "2016-01-03 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-03 24", temp: 3, momentum: 25 }
		      	]
}, {
	date: "2016-01-04",
	condition: 9,
	subdata: [
		      	{ time: "2016-01-04 01", temp: 2, momentum: 35 },
		      	{ time: "2016-01-04 02", temp: 5, momentum: 42 },
		      	{ time: "2016-01-04 03", temp: 5, momentum: 32 },
		      	{ time: "2016-01-04 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-04 05", temp: 2, momentum: 34 },
		      	{ time: "2016-01-04 06", temp: 2, momentum: 12 },
		      	{ time: "2016-01-04 07", temp: 7, momentum: 35 },
		      	{ time: "2016-01-04 08", temp: 7, momentum: 27 },
		      	{ time: "2016-01-04 09", temp: 4, momentum: 28 },
		      	{ time: "2016-01-04 10", temp: 2, momentum: 21 },
		      	{ time: "2016-01-04 11", temp: 1, momentum: 21 },
		      	{ time: "2016-01-04 12", temp: 2, momentum: 33 },
		      	{ time: "2016-01-04 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-04 14", temp: 4, momentum: 33 },
		      	{ time: "2016-01-04 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-04 16", temp: 6, momentum: 24 },
		      	{ time: "2016-01-04 17", temp: 6, momentum: 22 },
		      	{ time: "2016-01-04 18", temp: 4, momentum: 30 },
		      	{ time: "2016-01-04 19", temp: 1, momentum: 23 },
		      	{ time: "2016-01-04 20", temp: 2, momentum: 35 },
		      	{ time: "2016-01-04 21", temp: 4, momentum: 35 },
		      	{ time: "2016-01-04 22", temp: 4, momentum: 29 },
		      	{ time: "2016-01-04 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-04 24", temp: 3, momentum: 25 }
		      	]
}, {
	date: "2016-01-05",
	condition: 3,
	subdata: [
		      	{ time: "2016-01-05 01", temp: 2, momentum: 35 },
		      	{ time: "2016-01-05 02", temp: 5, momentum: 42 },
		      	{ time: "2016-01-05 03", temp: 5, momentum: 32 },
		      	{ time: "2016-01-05 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-05 05", temp: 2, momentum: 34 },
		      	{ time: "2016-01-05 06", temp: 2, momentum: 12 },
		      	{ time: "2016-01-05 07", temp: 7, momentum: 35 },
		      	{ time: "2016-01-05 08", temp: 7, momentum: 27 },
		      	{ time: "2016-01-05 09", temp: 4, momentum: 28 },
		      	{ time: "2016-01-05 10", temp: 2, momentum: 21 },
		      	{ time: "2016-01-05 11", temp: 1, momentum: 21 },
		      	{ time: "2016-01-05 12", temp: 2, momentum: 33 },
		      	{ time: "2016-01-05 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-05 14", temp: 4, momentum: 33 },
		      	{ time: "2016-01-05 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-05 16", temp: 6, momentum: 24 },
		      	{ time: "2016-01-05 17", temp: 6, momentum: 22 },
		      	{ time: "2016-01-05 18", temp: 4, momentum: 30 },
		      	{ time: "2016-01-05 19", temp: 1, momentum: 23 },
		      	{ time: "2016-01-05 20", temp: 2, momentum: 35 },
		      	{ time: "2016-01-05 21", temp: 4, momentum: 35 },
		      	{ time: "2016-01-05 22", temp: 4, momentum: 29 },
		      	{ time: "2016-01-05 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-05 24", temp: 3, momentum: 25 }
		      	]
}, {
	date: "2016-01-06",
	condition: 4,
	subdata: [
		      	{ time: "2016-01-06 01", temp: 2, momentum: 35 },
		      	{ time: "2016-01-06 02", temp: 5, momentum: 42 },
		      	{ time: "2016-01-06 03", temp: 5, momentum: 32 },
		      	{ time: "2016-01-06 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-06 05", temp: 2, momentum: 34 },
		      	{ time: "2016-01-06 06", temp: 2, momentum: 12 },
		      	{ time: "2016-01-06 07", temp: 7, momentum: 35 },
		      	{ time: "2016-01-06 08", temp: 7, momentum: 27 },
		      	{ time: "2016-01-06 09", temp: 4, momentum: 28 },
		      	{ time: "2016-01-06 10", temp: 2, momentum: 21 },
		      	{ time: "2016-01-06 11", temp: 1, momentum: 21 },
		      	{ time: "2016-01-06 12", temp: 2, momentum: 33 },
		      	{ time: "2016-01-06 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-06 14", temp: 4, momentum: 33 },
		      	{ time: "2016-01-06 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-06 16", temp: 6, momentum: 24 },
		      	{ time: "2016-01-06 17", temp: 6, momentum: 22 },
		      	{ time: "2016-01-06 18", temp: 4, momentum: 30 },
		      	{ time: "2016-01-06 19", temp: 1, momentum: 23 },
		      	{ time: "2016-01-06 20", temp: 2, momentum: 35 },
		      	{ time: "2016-01-06 21", temp: 4, momentum: 35 },
		      	{ time: "2016-01-06 22", temp: 4, momentum: 29 },
		      	{ time: "2016-01-06 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-06 24", temp: 3, momentum: 25 }
		      	]
}, {
	date: "2016-01-07",
	condition: 10,
	subdata: [
		      	{ time: "2016-01-07 01", temp: 2, momentum: 35 },
		      	{ time: "2016-01-07 02", temp: 5, momentum: 42 },
		      	{ time: "2016-01-07 03", temp: 5, momentum: 32 },
		      	{ time: "2016-01-07 04", temp: 1, momentum: 22 },
		      	{ time: "2016-01-07 05", temp: 2, momentum: 34 },
		      	{ time: "2016-01-07 06", temp: 2, momentum: 12 },
		      	{ time: "2016-01-07 07", temp: 7, momentum: 35 },
		      	{ time: "2016-01-07 08", temp: 7, momentum: 27 },
		      	{ time: "2016-01-07 09", temp: 4, momentum: 28 },
		      	{ time: "2016-01-07 10", temp: 2, momentum: 21 },
		      	{ time: "2016-01-07 11", temp: 1, momentum: 21 },
		      	{ time: "2016-01-07 12", temp: 2, momentum: 33 },
		      	{ time: "2016-01-07 13", temp: 5, momentum: 28 },
		      	{ time: "2016-01-07 14", temp: 4, momentum: 33 },
		      	{ time: "2016-01-07 15", temp: 3, momentum: 35 },
		      	{ time: "2016-01-07 16", temp: 6, momentum: 24 },
		      	{ time: "2016-01-07 17", temp: 6, momentum: 22 },
		      	{ time: "2016-01-07 18", temp: 4, momentum: 30 },
		      	{ time: "2016-01-07 19", temp: 1, momentum: 23 },
		      	{ time: "2016-01-07 20", temp: 2, momentum: 35 },
		      	{ time: "2016-01-07 21", temp: 4, momentum: 35 },
		      	{ time: "2016-01-07 22", temp: 4, momentum: 29 },
		      	{ time: "2016-01-07 23", temp: 4, momentum: 32 },
		      	{ time: "2016-01-07 24", temp: 3, momentum: 25 }
		      	]
}];

AmCharts.ready(function() {
			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = charData;
			chart.dataDateFormat = "YYYY-MM-DD";
			chart.categoryField = "date";
			chart.creditsPosition = "top-right";
			
			chartSub = new AmCharts.AmSerialChart();
			chartSub.dataProvider = charData2;
			chartSub.dataDateFormat = "YYYY-MM-DD HH";
			chartSub.categoryField = "time";
			

			// AXES
			// categoryAxis
			var categoryAxis = chart.categoryAxis;
			categoryAxis.parseDates = true;
			categoryAxis.minPeriod = "DD";
			categoryAxis.gridAlpha = 0.1;
			categoryAxis.minorGridAlpha = 0.1;
			categoryAxis.axisAlpha = 0;
			categoryAxis.minorGridEnabled = true;
			categoryAxis.inside = false; // x axis

			var categoryAxis2 = chartSub.categoryAxis;
			categoryAxis2.parseDates = true;
			categoryAxis2.minPeriod = "hh";
			categoryAxis2.gridAlpha = 0.1;
			categoryAxis2.minorGridAlpha = 0.1;
			categoryAxis2.axisAlpha = 0;
			categoryAxis2.minorGridEnabled = true;
			categoryAxis2.inside = false; // x axis

			// valueAxis
			var valueAxis = new AmCharts.ValueAxis();
			valueAxis.tickLength = 0;
			valueAxis.axisAlpha = 0;
			valueAxis.showFirstLabel = false;
			valueAxis.showLastLabel = false;
			chart.addValueAxis(valueAxis);

			// GRAPHS
			// graph_cond
			var graph_cond = new AmCharts.AmGraph();
			graph_cond.type = "column", graph_cond.lineColor = "#9932CC";
			graph_cond.valueField = "condition";
			graph_cond.fillAlphas = 0.7;
			graph_cond.balloonText = "<b><span style='font-size:14px;'>[[condition]]</span></b>";
			chart.addGraph(graph_cond);

			// graph_temp
			var graph_temp = new AmCharts.AmGraph();
			graph_temp.lineColor = "#00CC00";
			graph_temp.valueField = "temp";
			graph_temp.dashLength = 3;
			graph_temp.balloonText = "<b><span style='font-size:14px;'>[[temp]]</span></b>";
			graph_temp.bullet = "round";
			chartSub.addGraph(graph_temp);

			// graph_momentum
			var graph_momentum = new AmCharts.AmGraph();
			graph_momentum.type = "column";
			graph_momentum.lineColor = "#770055";
			graph_momentum.valueField = "momentum";
			graph_momentum.fixedColumnWidth = 5;
			graph_momentum.fillAlphas = 0.7;
			graph_momentum.balloonText = "<b><span style='font-size:14px;'>[[momentum]]</span></b>";
			chartSub.addGraph(graph_momentum);

			// CURSOR
			// chartCursor
			var chartCursor = new AmCharts.ChartCursor();
			chartCursor.categoryBalloonDateFormat = "YYYY-MM-DD";
			chartCursor.cursorColor = "#00CC00";
			//			chart.addChartCursor(chartCursor);
			chart.mouseWheelZoomEnabled = true;

			chart.addListener("clickGraphItem", function(event) {
				
				chartSub.creditsPosition = "top-right";
				chartSub.dataProvider = event.item.dataContext.subdata;
				chartSub.addLabel(40, 20, "<< Go back to condition graph", undefined, 15,
						undefined, undefined, undefined, true,
						'javascript:resetChart();');				
				chartSub.write("condition_detail");
			});

			chart.write("condition_detail");
		});

function resetChart() {
	chart.dataProvider = chartData;
	chart.allLabels = [];

	chart.validateData();
	chart.animateAgain();
}