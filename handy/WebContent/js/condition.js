var chart;

  
AmCharts.ready(function() {
//평균값 구하기
	var sum1,sum2,sum3 ;

	for(var x in data){
	sum1=0;
	sum2=0;
	sum3=0;
	 for(var y in data[x].sensingData){
	  sum1+=parseFloat(data[x].sensingData[y].temperature);// sum of temperature.
	  sum2+=parseInt(data[x].sensingData[y].heart_rate);// sum of heart_rate.
	  sum3+=parseInt(data[x].sensingData[y].step);// sum of step.
	  
	  }
	 for(var y in data[x].sensingData){
	  data[x].sensingData[y].avagTemp =parseFloat( sum1 / (data[x].sensingData.length)).toFixed(2); //average temperature.
	  data[x].sensingData[y].avagHeart = parseInt(sum2 / (data[x].sensingData.length));// average heart_rate.
	  data[x].sensingData[y].avagStep = parseInt(sum3 /(data[x].sensingData.length));// average step.
	  }
	 }
	//최고 최저값 구하기

	var HTemp,LTemp,HHeart,LHeart,HStep,LStep;
	for(var x in data){
	HTemp=parseFloat(data[x].sensingData[0].temperature).toFixed(2);
	LTemp=parseFloat(data[x].sensingData[0].temperature).toFixed(2);
	HHeart=parseInt(data[x].sensingData[0].heart_rate);
	LHeart=parseInt(data[x].sensingData[0].heart_rate);
	HStep=parseInt(data[x].sensingData[0].step);
	LStep=parseInt(data[x].sensingData[0].step);
		for(var y in data[x].sensingData){
	  if(data[x].sensingData[y].temperature > HTemp) {
	 HTemp=parseFloat(data[x].sensingData[y].temperature).toFixed(2);
	  }
	  if(data[x].sensingData[y].temperature < LTemp) {
	 LTemp=parseFloat(data[x].sensingData[y].temperature).toFixed(2);
	  }
	  if(data[x].sensingData[y].heart_rate >HHeart)  {
	  HHeart=parseInt(data[x].sensingData[y].heart_rate);
	  }
	  if(data[x].sensingData[y].heart_rate <LHeart)  {
	  LHeart=parseInt(data[x].sensingData[y].heart_rate);
	  }
	  if(data[x].sensingData[y].step >HStep)  {
	  HStep=parseInt(data[x].sensingData[y].step);
	  }
	  if(data[x].sensingData[y].step <LStep)  {
	  LStep=parseInt(data[x].sensingData[y].step);
	  }
	  }
	  
	  for(var y in data[x].sensingData){
	    data[x].sensingData[y].highTemp = HTemp; //high temperature.
	  data[x].sensingData[y].highHeart =HHeart//high heart_rate.
	  data[x].sensingData[y].highStep = HStep// high step.
	    data[x].sensingData[y].lowTemp = LTemp; //low temperature.
	  data[x].sensingData[y].lowHeart =LHeart//low heart_rate.
	  data[x].sensingData[y].lowStep = LStep// low step.
	  }
	  }
 
var chartData2;


    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = data;
   	chart.dataDateFormat = "YYYY/M/DD ";
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
    graph.fillAlphas = 0.7;
  // graph.bullet="round";
    graph.lineColor ="#00CC00";
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
    graph2.balloonText = "[[category]]: <b>[[value]]</b> , average :[[avagTemp]], <br/>high : [[highTemp]], low : [[lowTemp]]";
    //graph2.balloonText="<b><span style='font-size:14px;'>[[temperature]]</span></b>";
    graph2.type = "line";
   // graph.lineAlpha = 0;
    graph2.fillAlphas = 0;
   graph2.bullet="round";
    graph2.lineColor ="#8d1cc6";
  
     var graph3 = new AmCharts.AmGraph();
    graph3.valueField = "heart_rate";
    
    graph3.type = "line";
   // graph.lineAlpha = 0;
    graph3.fillAlphas = 0;
    graph3.bullet="round";
    graph3.bulletBorderColor="#FFFFFF";
    graph3.bulletBorderAlpha=1;
    graph3.lineColor ="#0000FF";
    graph3.lineThickness=2;
   //graph3.hideBulletsCount=1;
  //  graph3.balloonText = "<b><span style='font-size:14px;'>[[value]]</span></b>";
   graph3.balloonText = "[[log_date]], <b>[[value]]</b>, <br/>average :[[avagHeart]], <br/>high : [[highHeart]], <br/>low : [[lowHeart]]";
   
	
    
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.fullWidth=true;
	chartCursor.cursorAlpha=0.1;
    
       var graph4 = new AmCharts.AmGraph();
    graph4.valueField = "step";
    graph4.balloonText = "[[log_date]], <b>[[value]]</b>, <br/>average :[[avagStep]], <br/>high : [[highStep]], <br/>low : [[lowStep]]";
  //  graph4.balloonText = "<b><span style='font-size:14px;'>[[step]]</span></b>";
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
   						40, 50, 
            "Go back ",
            "left", 
            undefined, 
            undefined, 
            undefined, 
            undefined, 
            true, 
            'javascript:resetChart();');
   
            chart2.dataProvider = event.item.dataContext.sensingData;
            chart2.validateData();
            chart2.invalidateSize();
            //chart2.animateAgain();
       chart2.write("chartdiv");
       var data =chart2.dataProvider;

       var div = document.getElementById("tablediv");
       div.innerHTML = data.avagTemp;
    });

    chart.write("chartdiv");
});
function resetChart() {
    chart.dataProvider = data;

    // remove the "Go back" label
    chart.allLabels = [];
    
  // chart.validateData();
  //  chart.animateAgain();
  chart.write("chartdiv");
}