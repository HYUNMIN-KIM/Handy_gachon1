var chart;

var chartData = [{
    date: "2016-01-12",
    condition: 80,
subSetTitle: "Sensing Data",
    subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]
},
{
    date: "2016-01-13",
    condition: 70,
    subSetTitle: "Sensing Data",
    subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016-01-14",
    condition: 75,
    subSetTitle: "Sensing Data",
  subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016-01-15",
    condition: 90,
    subSetTitle: "Sensing Data",
   subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016-01-16",
    condition: 40,
    subSetTitle: "Sensing Data",
    subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016-01-17",
    condition: 50,
    subSetTitle: "Sensing Data",
     subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 10, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 50, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016-01-18",
    condition: 77,
    subSetTitle: "Sensing Data",
     subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},


];
var chartData2;

AmCharts.ready(function() {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
   	chart.dataDateFormat = "YYYY-MM-DD ";
    chart.categoryField = "date";
    chart.startDuration = 1;

    // AXES
    // category
  var categoryAxis = chart.categoryAxis;
			categoryAxis.parseDates = true;
			categoryAxis.minPeriod = "DD";
			categoryAxis.gridAlpha = 0.1;
			categoryAxis.minorGridAlpha = 0.1;
			categoryAxis.axisAlpha = 1;
			categoryAxis.minorGridEnabled = true;
			categoryAxis.inside = true;

    // value
    // in case you don't want to change default settings of value axis,
    // you don't need to create it, as one value axis is created automatically.
    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "condition";
  graph.dashLength = 1;
			graph.balloonText = "<b><span style='font-size:14px;'>[[condition]] </span></b>";
		
    graph.type = "column";
   // graph.lineAlpha = 0;
    graph.fillAlphas = 0.4;
   graph.bullet="round";
    graph.lineColor ="#8d1cc6";
    graph.fixedColumnWidth = 10;
    chart.addGraph(graph);
    
    
    //make the cahrt2
    chart2 = new AmCharts.AmSerialChart();
      chart2.dataProvider =chartData2;
     //chart.dataProvider = chartData;
   	//chart2.dataDateFormat = "HH-MM-SS";
    //chart.categoryField = "dat";
    chart2.categoryField = "time";
    chart2.startDuration = 1;

    // AXES
    // category
  var categoryAxis2 = chart2.categoryAxis;

			//categoryAxis2.parseDates = true;
			categoryAxis2.minPeriod = "MM";
			categoryAxis2.gridAlpha = 0.1;
			categoryAxis2.minorGridAlpha = 0.1;
			categoryAxis2.axisAlpha = 0;
			categoryAxis2.minorGridEnabled = true;
			//categoryAxis2.inside = true;
    
    
   
        var graph2 = new AmCharts.AmGraph();
    graph2.valueField = "temperature";
    graph2.balloonText = "[[category]]:[[value]]";
    graph2.type = "line";
   // graph.lineAlpha = 0;
    graph2.fillAlphas = 0;
    graph2.bullet="round";
    graph2.lineColor ="#8d1cc6";
  
     var graph3 = new AmCharts.AmGraph();
    graph3.valueField = "heartRate";
    graph3.balloonText = "[[category]]: [[value]]";
    graph3.type = "line";
   // graph.lineAlpha = 0;
    graph3.fillAlphas = 0;
    graph3.bullet="round";
    graph3.lineColor ="#0000FF";
    
       var graph4 = new AmCharts.AmGraph();
    graph4.valueField = "step";
    graph4.balloonText = "[[category]]: [[value]]";
    graph4.type = "column";
   // graph.lineAlpha = 0;
    graph4.fillAlphas = 0.8;
   // graph4.bullet="round";
    graph4.lineColor ="#FF0000";
    
    chart2.addGraph(graph2);
    chart2.addGraph(graph3);
    chart2.addGraph(graph4);
    
    chart.addListener("clickGraphItem", function (event) {
   chart2.addLabel(
   						 35, 20, 
            "Go back ",
            "right", 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            true, 
            'javascript:resetChart();');
            chart2.dataProvider = event.item.dataContext.subSet;
            chart2.validateData();
         chart2.write("condition_detail");
    });

    chart.write("chartdiv");
});
function resetChart() {
    chart.dataProvider = chartData;
    //chart.titles[0].text = 'Yearly data';
    
    // remove the "Go back" label
    chart.allLabels = [];
    
    chart.validateData();
    chart.animateAgain();
    chart.write("condition_detail");
}