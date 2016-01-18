var chart;
var charData = [ {
	date : "2012-01-01",
	value : 8,
}, {
	date : "2012-01-01",
	value : 8
}, {
	date : "2012-01-02",
	value : 10
}, {
	date : "2012-01-03",
	value : 12
}, {
	date : "2012-01-04",
	value : 14
}, {
	date : "2012-01-05",
	value : 11
}, {
	date : "2012-01-06",
	value : 6
}, {
	date : "2012-01-07",
	value : 7
}, {
	date : "2012-01-08",
	value : 9
}, {
	date : "2012-01-09",
	value : 13
}, {
	date : "2012-01-10",
	value : 15
}, {
	date : "2012-01-11",
	value : 19
}, {
	date : "2012-01-12",
	value : 21
}, {
	date : "2012-01-13",
	value : 22
}, {
	date : "2012-01-14",
	value : 20
}, {
	date : "2012-01-15",
	value : 18
}, {
	date : "2012-01-16",
	value : 14
}, {
	date : "2012-01-17",
	value : 16
}, {
	date : "2012-01-18",
	value : 18
}, {
	date : "2012-01-19",
	value : 17
}, {
	date : "2012-01-20",
	value : 15
}, {
	date : "2012-01-21",
	value : 12
}, {
	date : "2012-01-22",
	value : 10
}, {
	date : "2012-01-23",
	value : 8
} ];


AmCharts.ready(function() {
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = charData;
	chart.dataDateFormat = "YYYY-MM-DD";
	chart.categoryField = "date";
	
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true;
	categoryAxis.minPeriod = "DD";
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.minorGridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;
	categoryAxis.minorGridEnabled = true;
	categoryAxis.inside = true;
	
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.tickLength = 0;
	valueAxis.axisAlpha = 0;
	valueAxis.showFirstLabel = false;
	valueAxis.showLastLabel = false;
	
	chart.addValueAxis(valueAxis);
	
//	var guides = new AmCharts.Guide();
//	guides.value = 10;
//	guides.toValue = 20;
//	guides.fillColor = "#00CC00";
//	guides.inside = true;
//	guides.fillAlpha = 0.2;
//	guides.lineAlpha = 0;
//	
//	valueAxis.addGuide(guide);
	
	var graph = new AmCharts.AmGraph();
//	graph.id = "g1";
	graph.lineColor = "#00CC00";
	graph.valueField = "value";
	graph.dashLength = 3;
	graph.balloonText = "<b><span style='font-size:14px;'>[[value]]</span></b>";
    graph.bullet = "round";
    chart.addGraph(graph);
	
    var chartCursor = new AmCharts.ChartCursor();
//  chartCursor.limitToGraph = "g1";
    chartCursor.cursorColor = "#00CC00";
    chart.addChartCursor(chartCursor);
    chart.mouseWheelZoomEnabled = true;
    
    chart.write("condition_detail");
});