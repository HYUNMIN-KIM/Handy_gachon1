var chart;
var chartSub;
var charData;
var temp;

AmCharts.ready(function() {
			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = data;
			chart.dataDateFormat = "YYYY/MM/DD";
			chart.categoryField = "date";
			chart.creditsPosition = "top-left";

			chartSub = new AmCharts.AmSerialChart();
			chartSub.dataProvider = charData;
			chartSub.dataDateFormat = "HH:NN:SS";
			chartSub.categoryField = "log_date";
			chartSub.creditsPosition = "top-left";

			// 평균값 구하기
			var sum1, sum2, sum3;

			for ( var x in data) {
				sum1 = 0;
				sum2 = 0;
				sum3 = 0;
				for ( var y in data[x].sensingData) {
					sum1 += parseFloat(data[x].sensingData[y].temperature);// sum
																			// of
																			// temperature.
					sum2 += parseInt(data[x].sensingData[y].heart_rate);// sum
																		// of
																		// heart_rate.
					sum3 += parseInt(data[x].sensingData[y].step);// sum of
																	// step.

				}
				for ( var y in data[x].sensingData) {
					data[x].sensingData[y].avagTemp = parseFloat(
							sum1 / (data[x].sensingData.length)).toFixed(2); // average
																				// temperature.
					data[x].sensingData[y].avagHeart = parseInt(sum2
							/ (data[x].sensingData.length));// average
															// heart_rate.
					data[x].sensingData[y].avagStep = parseInt(sum3
							/ (data[x].sensingData.length));// average step.
					
					temp = data[x].sensingData[y].avagTemp;
					
				}
				//FIXME :: avageHeart없으면?
				//document.getElementById("info").innerHTML = data[x].sensingData[y].avagHeart;
			}
			// 최고 최저값

			
				
			var HTemp, LTemp, HHeart, LHeart, HStep, LStep;
			for ( var x in data) {
				
				if(typeof data[x].sensingData[0] == 'undefined'){
					//센싱데이터가 없으면
					continue;
				}
				
				HTemp = parseFloat(data[x].sensingData[0].temperature).toFixed(
						2);
				LTemp = parseFloat(data[x].sensingData[0].temperature).toFixed(
						2);
				HHeart = parseInt(data[x].sensingData[0].heart_rate);
				LHeart = parseInt(data[x].sensingData[0].heart_rate);
				HStep = parseInt(data[x].sensingData[0].step);
				LStep = parseInt(data[x].sensingData[0].step);
				
				for ( var y in data[x].sensingData) {
					if (data[x].sensingData[y].temperature > HTemp) {
						HTemp = parseFloat(data[x].sensingData[y].temperature)
								.toFixed(2);
					}
					if (data[x].sensingData[y].temperature < LTemp) {
						LTemp = parseFloat(data[x].sensingData[y].temperature)
								.toFixed(2);
					}
					if (data[x].sensingData[y].heart_rate > HHeart) {
						HHeart = parseInt(data[x].sensingData[y].heart_rate);
					}
					if (data[x].sensingData[y].heart_rate < LHeart) {
						LHeart = parseInt(data[x].sensingData[y].heart_rate);
					}
					if (data[x].sensingData[y].step > HStep) {
						HStep = parseInt(data[x].sensingData[y].step);
					}
					if (data[x].sensingData[y].step < LStep) {
						LStep = parseInt(data[x].sensingData[y].step);
					}
				}

				for ( var y in data[x].sensingData) {
					data[x].sensingData[y].highTemp = HTemp; // high temperature.
					data[x].sensingData[y].highHeart = HHeart// high heart_rate.
					data[x].sensingData[y].highStep = HStep// high step.
					data[x].sensingData[y].lowTemp = LTemp; // low temperature.
					data[x].sensingData[y].lowHeart = LHeart// low heart_rate.
					data[x].sensingData[y].lowStep = LStep// low step.
				}
			}
			
			
			
			// LEGEND
			var legend = new AmCharts.AmLegend();
			legend.useGraphSettings = true;
			var legendSub = new AmCharts.AmLegend();
			legendSub.useGraphSettings = false;

			chart.addLegend(legend);
			chartSub.addLegend(legendSub);

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
			categoryAxis2.minPeriod = "mm";
			categoryAxis2.gridAlpha = 0.1;
			categoryAxis2.minorGridAlpha = 0.1;
			categoryAxis2.axisAlpha = 0;
			categoryAxis2.minorGridEnabled = true;
			categoryAxis2.inside = false; // x axis

			// valueAxis
			// chart
			var valueAxis = new AmCharts.ValueAxis();
			valueAxis.title = "Condition Index"
			valueAxis.tickLength = 0;
			valueAxis.axisAlpha = 0;
			valueAxis.showFirstLabel = false;
			valueAxis.showLastLabel = false;
			chart.addValueAxis(valueAxis);

			// chartSub
			var valueAxis2 = new AmCharts.ValueAxis();
			valueAxis2.title = "Temp / Heart / Step"
			valueAxis2.tickLength = 0;
			valueAxis2.axisAlpha = 0;
			valueAxis2.showFirstLabel = false;
			valueAxis2.showLastLabel = false;
			chartSub.addValueAxis(valueAxis2);

			// GRAPHS
			// graph_cond
			var graph_cond = new AmCharts.AmGraph();
			graph_cond.type = "column";
			graph_cond.title = "condition";
			graph_cond.lineColor = "#00CC00";
			graph_cond.valueField = "conditionPoint";
			graph_cond.fillAlphas = 0.7;
			graph_cond.balloonText = "<b><span style='font-size:14px;'>[[conditionPoint]]</span></b>";
			chart.addGraph(graph_cond);

			// graph_temp
			var graph_temp = new AmCharts.AmGraph();
			graph_temp.type = "line";
			graph_temp.lineThickness = 2.5;
			graph_temp.title = "temperature";
			graph_temp.lineColor = "#00CC00";
			graph_temp.valueField = "temperature";
			// graph_temp.dashLength = 3;
			graph_temp.balloonText = "<b><span style='font-size:14px;'> average :[[avagTemp]], [[temperature]]</span></b>";
			// graph_temp.bullet = "round";
			chartSub.addGraph(graph_temp);
			
			// graph_temp
			var graph_hr = new AmCharts.AmGraph();
			graph_hr.type = "line";
			graph_hr.lineThickness = 2.5;
			graph_hr.title = "heart rate";
			graph_hr.lineColor = "#FF8600";
			graph_hr.valueField = "heart_rate";
			// graph_hr.dashLength = 3;
			graph_hr.balloonText = "<b><span style='font-size:14px;'> average :[[avagHeart]], [[heart_rate]]</span></b>";
			// graph_hr.bullet = "round";
			chartSub.addGraph(graph_hr);

			// graph_step
			var graph_step = new AmCharts.AmGraph();
			graph_step.type = "column";
			graph_step.title = "step";
			graph_step.lineColor = "#770055";
			graph_step.valueField = "step";
			// graph_step.fixedColumnWidth = 5;
			graph_step.fillAlphas = 0.7;
			graph_step.balloonText = "<b><span style='font-size:14px;'>[[step]]</span></b>";
			chartSub.addGraph(graph_step);

			// CURSOR
			// chartCursor
			var chartCursor = new AmCharts.ChartCursor();
			chartCursor.categoryBalloonDateFormat = "YYYY/MM/DD";
			chartCursor.cursorColor = "#CC0000";
			chart.addChartCursor(chartCursor);
			chart.mouseWheelZoomEnabled = true;

			chart.addListener("clickGraphItem", function(event) {
				var button = document.getElementById('btn');

				button.onclick = function() {
					resetChart()();
				}

				// CURSOR
				// chartCursorSub
				var chartCursorSub = new AmCharts.ChartCursor();
				chartCursorSub.categoryBalloonDateFormat = "HH:NN:SS";
				chartCursorSub.cursorColor = "#CC0000";
				chartSub.addChartCursor(chartCursorSub);
				chartSub.mouseWheelZoomEnabled = true;

				chartSub.dataProvider = event.item.dataContext.sensingData;
				chartSub.mouseWheelZoomEnabled = true;

				chartSub.validateData();
				chartSub.animateAgain();
				chartSub.invalidateSize();
				chartSub.write("chartdiv");
			});
			chart.write("chartdiv");
		});

function resetChart() {
	chart.dataProvider = data;
	chart.validateData();
	chart.animateAgain();
	chart.invalidateSize();

	// remove the "Go back" label
	chart.allLabels = [];
	chart.write("chartdiv");
}