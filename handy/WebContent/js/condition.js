var chart;
/*
var chartData = [{
    date: "2016/01/12",
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
    date: "2016/01/13",
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
date: "2016/01/14",
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
date: "2016/01/15",
    condition: 90,
    subSetTitle: "Sensing Data",
   subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:05:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:06:40", temperature: 36, heartRate:90, step:30 },
        { time: "12:07:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:08:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:09:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:11:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:12:40", temperature: 36, heartRate:70 ,step:30 },
         ]},
{
date: "2016/01/16",
    condition: 40,
    subSetTitle: "Sensing Data",
    subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:04:40", temperature: 36, heartRate:88 ,step:30 },
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
date: "2016/01/17",
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
date: "2016/01/18",
    condition: 77,
    subSetTitle: "Sensing Data",
     subSet:[
        { time: "12:01:40", temperature: 36, heartRate:70, step:30 },
        { time: "12:02:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:03:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:20:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:30:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "12:40:40", temperature: 60, heartRate:70, step:30 },
        { time: "12:50:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "13:10:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "13:40:40", temperature: 36, heartRate:70 ,step:30 },
        { time: "13:55:40", temperature: 60, heartRate:80 ,step:30 },
        { time: "14:33:40", temperature: 36, heartRate:70, step:30 },
        { time: "15:40:40", temperature: 36, heartRate:70 ,step:30 },
         ]},


];
//평균값 구하기
var sum1,sum2,sum3 ;
for(var x in chartData){
sum1=0,sum2=0,sum3=0;
	for(var y in chartData[x].subSet){
  sum1+=chartData[x].subSet[y].temperature;// sum of temperature.
  sum2+=chartData[x].subSet[y].heartRate;// sum of heartRate.
  sum3+=chartData[x].subSet[y].step;// sum of step.
  
  }
 for(var y in chartData[x].subSet){
  chartData[x].subSet[y].avagTemp = sum1 / chartData[x].subSet.length; //average temperature.
  chartData[x].subSet[y].avagHeart = sum2 / chartData[x].subSet.length;// average heartRate.
  chartData[x].subSet[y].avagStep = sum3 / chartData[x].subSet.length;// average step.
  }
  }
//최고 최저값 구하기

var HTemp,LTemp,HHeart,LHeart,HStep,LStep;
for(var x in chartData){
HTemp=chartData[x].subSet[0].temperature;
LTemp=chartData[x].subSet[0].temperature;
HHeart=chartData[x].subSet[0].heartRate;
LHeart=chartData[x].subSet[0].heartRate;
HStep=chartData[x].subSet[0].step;
LStep=chartData[x].subSet[0].step;
	for(var y in chartData[x].subSet){
  if(chartData[x].subSet[y].temperature > HTemp) {
 HTemp=chartData[x].subSet[y].temperature;
  }
  if(chartData[x].subSet[y].temperature < LTemp) {
 LTemp=chartData[x].subSet[y].temperature;
  }
  if(chartData[x].subSet[y].heartRate >HHeart)  {
  HHeart=chartData[x].subSet[y].heartRate;
  }
  if(chartData[x].subSet[y].heartRate <LHeart)  {
  LHeart=chartData[x].subSet[y].heartRate;
  }
  if(chartData[x].subSet[y].step >HStep)  {
  HStep=chartData[x].subSet[y].step;
  }
  if(chartData[x].subSet[y].step <LStep)  {
  LStep=chartData[x].subSet[y].step;
  }
  }
  
  for(var y in chartData[x].subSet){
    chartData[x].subSet[y].highTemp = HTemp; //high temperature.
  chartData[x].subSet[y].highHeart =HHeart//high heartRate.
  chartData[x].subSet[y].highStep = HStep// high step.
    chartData[x].subSet[y].lowTemp = LTemp; //low temperature.
  chartData[x].subSet[y].lowHeart =LHeart//low heartRate.
  chartData[x].subSet[y].lowStep = LStep// low step.
  }
  }
  
 */
var chartData2;

AmCharts.ready(function() {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = data;
   	chart.dataDateFormat = "YYYY/MM/DD ";
    chart.categoryField = "date";
    chart.startDuration = 1;
    /*
    var sum =0;
		var avag=[];
    for(var i=0;i<chart.dataProvider.length;i++)
    {
    var row = chart.dataProvider[i];
    
    for(var j=0;j<row[i].subSet.length;j++){
    sum+=row[i].subSet[j].temperature;
    }
    avag[i]=sum/row[i].subSet.length;
    }
    */
    // AXES
    // category
  var categoryAxis = chart.categoryAxis;
			categoryAxis.parseDates = true;
			categoryAxis.minPeriod = "DD";
			categoryAxis.gridAlpha = 0.1;
			categoryAxis.minorGridAlpha = 0.1;
			categoryAxis.axisAlpha = 1;
			categoryAxis.minorGridEnabled = true;
			//categoryAxis.inside = true;

    // value
    // in case you don't want to change default settings of value axis,
    // you don't need to create it, as one value axis is created automatically.
    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "conditionPoint";
  graph.dashLength = 3;
			graph.balloonText = "<b><span style='font-size:14px;'>[[value]] </span></b>";
		
    graph.type = "column";
   // graph.lineAlpha = 0;
    graph.fillAlphas = 0.4;
   graph.bullet="round";
    graph.lineColor ="#8d1cc6";
  //  graph.fixedColumnWidth = 1;
    chart.addGraph(graph);
    
    
    //make the cahrt2
    chart2 = new AmCharts.AmSerialChart();
      //chart2.dataProvider =chartData2;
     //chart.dataProvider = chartData;
   	chart2.dataDateFormat = "HH:NN:SS";
    //chart.categoryField = "dat";
    chart2.categoryField = "log_date";
    chart2.startDuration = 1;

    // AXES
    // category
  var categoryAxis2 = chart2.categoryAxis;

			categoryAxis2.parseDates = true;
			categoryAxis2.minPeriod = "mm";
			categoryAxis2.gridAlpha = 0;
			//categoryAxis2.minHorizontalGap=50;
			categoryAxis2.axisAlpha = 0;
      categoryAxis2.tickLength=0;
			//categoryAxis2.minorGridEnabled = true;
			//categoryAxis2.inside = true;
    
    
   
        var graph2 = new AmCharts.AmGraph();
    graph2.valueField = "temperature";
 //  graph2.legendPeriodValueText ="[[value.count]]";
   // graph2.balloonText = "[[category]]: <b>[[value]]</b> , average :[[avagTemp]], <br/>high : [[highTemp]], low : [[lowTemp]]";
    graph2.balloonText="<b><span style='font-size:14px;'>[[temperature]]</span></b>";
    
    graph2.type = "line";
   // graph.lineAlpha = 0;
    graph2.fillAlphas = 0;
  //  graph2.bullet="round";
    graph2.lineColor ="#8d1cc6";
    chart2.addGraph(graph2);
  
     var graph3 = new AmCharts.AmGraph();
    graph3.valueField = "heart_rate";
 //  graph3.balloonText = "[[log_date]], <b>[[value]]</b>, <br/>average :[[avagHeart]], <br/>high : [[highHeart]], <br/>low : [[lowHeart]]";
    graph3.balloonText = "<b><span style='font-size:14px;'>[[value]]</span></b>";
	
    graph3.type = "line";
   // graph.lineAlpha = 0;
    graph3.fillAlphas = 0;
  //  graph3.bullet="round";
    graph3.lineColor ="#0000FF";
    
       var graph4 = new AmCharts.AmGraph();
    graph4.valueField = "step";
   // graph4.balloonText = "[[log_date]], <b>[[value]]</b>, <br/>average :[[avagStep]], <br/>high : [[highStep]], <br/>low : [[lowStep]]";
    graph3.balloonText = "<b><span style='font-size:14px;'>[[value]]</span></b>";
    graph4.type = "column";
   // graph.lineAlpha = 0;
    graph4.fillAlphas = 0.8;
   // graph4.bullet="round";
    graph4.lineColor ="#FF0000";
    
    
    chart2.addGraph(graph3);
    chart2.addGraph(graph4);
    
    chart.addListener("clickGraphItem", function (event) {
   chart2.addLabel(
   						 "!25", 100, 
            "Go back ",
            "right", 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            true, 
            'javascript:resetChart();');
   
            chart2.dataProvider = event.item.dataContext.sensingData;
            chart2.validateData();
         chart2.write("chartdiv");
    });

    chart.write("chartdiv");
});
function resetChart() {
    chart.dataProvider = data;
    //chart.titles[0].text = 'Yearly data';
    
    // remove the "Go back" label
    chart.allLabels = [];
    
    chart.validateData();
    chart.animateAgain();
    chart.write("chartdiv");
}