var chart;
var chartSub;
var charData;
var temp;


AmCharts.ready(function() {
			document.getElementById('backbtn').style.visibility = 'hidden';
			document.getElementById('analysisdiv').style.visibility = 'hidden';
			$("#legendDiv").css("visibility", "hidden");
			
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

			// 최고 최저값 평균: 삭제해야 함
			/*
			 * 
			 * 
			// 평균값 구하기
			var sum1, sum2, sum3;

			for ( var x in data) {
				sum1 = sum2 = sum3 = 0;
				for ( var y in data[x].sensingData) {
					sum1 += parseFloat(data[x].sensingData[y].temperature);// sum
																			// temperature
					sum2 += parseInt(data[x].sensingData[y].heart_rate);// sum
																		// heart_rate
					sum3 += parseInt(data[x].sensingData[y].step); // sum step

				}
				for ( var y in data[x].sensingData) {
					data[x].sensingData[y].avgTemp = parseFloat(
							sum1 / (data[x].sensingData.length)).toFixed(2); // avg
																				// temperature
					data[x].sensingData[y].avgHeart = parseInt(sum2
							/ (data[x].sensingData.length)); // avg
																// heart_rate
					data[x].sensingData[y].avgStep = parseInt(sum3
							/ (data[x].sensingData.length)); // avg step

					temp = data[x].sensingData[y].avgTemp;

				}
			}

			
			var HTemp, LTemp, HHeart, LHeart, HStep, LStep;
			for ( var x in data) {

				if (typeof data[x].sensingData[0] == 'undefined') {
					// 센싱데이터가 없으면
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
					data[x].sensingData[y].highTemp = HTemp; // high
																// temperature.
					data[x].sensingData[y].highHeart = HHeart// high
																// heart_rate.
					data[x].sensingData[y].highStep = HStep// high step.
					data[x].sensingData[y].lowTemp = LTemp; // low temperature.
					data[x].sensingData[y].lowHeart = LHeart// low heart_rate.
					data[x].sensingData[y].lowStep = LStep// low step.
				}
			}
			*/

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
			valueAxis.position = "left";
			chart.addValueAxis(valueAxis);

			var valueAxis2 = new AmCharts.ValueAxis();
			valueAxis2.title = "Calorie Index";
			valueAxis2.lineThickness = 5;
			valueAxis2.tickLength = 0;
			valueAxis2.axisAlpha = 0;
			valueAxis2.showFirstLabel = false;
			valueAxis2.showLastLabel = false;
			valueAxis2.position = "right";
			chart.addValueAxis(valueAxis2);

			// chartSub
			var valueAxis3 = new AmCharts.ValueAxis();
			valueAxis3.tickLength = 0;
			valueAxis3.axisAlpha = 0;
			valueAxis3.showFirstLabel = false;
			valueAxis3.showLastLabel = false;
			chartSub.addValueAxis(valueAxis3);

			// GRAPHS
			// graph_cond
			var graph_cond = new AmCharts.AmGraph();
			graph_cond.type = "column";
			graph_cond.title = "CONDITION";
			graph_cond.lineColor = "#85C5E3";
			graph_cond.valueField = "conditionPoint";
			graph_cond.fillAlphas = 1;
			graph_cond.balloonText = "<b><span style='font-size:14px;'>[[conditionPoint]]</span></b>";
			graph_cond.valueAxis = valueAxis;
			chart.addGraph(graph_cond);

			// graph_cal
			var graph_cal = new AmCharts.AmGraph();
			graph_cal.type = "line";
			graph_cal.title = "CALORIE";
			graph_cal.lineColor = "#00CC00";
			graph_cal.valueField = "caloriePoint";
			graph_cal.fillAlphas = 0;
			graph_cal.bullet = "round";
			graph_cal.bulletSize = "7";
			graph_cal.balloonText = "<b><span style='font-size:14px;'>[[caloriePoint]]</span></b>";
			graph_cal.valueAxis = valueAxis2;
			chart.addGraph(graph_cal);

			// graph_temp
			var graph_temp = new AmCharts.AmGraph();
			graph_temp.type = "line";
			graph_temp.lineThickness = 2.5;
			graph_temp.title = "TEMPERATURE";
			graph_temp.lineColor = "#00CC00";
			graph_temp.valueField = "temperature";
			graph_temp.fillAlphas = 0;
			// graph_temp.balloonText = "<b><span style='font-size:14px;'>
			// average: [[avgTemp]]<br>high: [[highTemp]]<br>low:
			// [[lowTemp]]</span></b>";
			chartSub.addGraph(graph_temp);

			// graph_hr
			var graph_hr = new AmCharts.AmGraph();
			graph_hr.type = "line";
			graph_hr.lineThickness = 2.5;
			graph_hr.title = "HEART RATE";
			graph_hr.lineColor = "#FF8600";
			graph_hr.valueField = "heart_rate";
			graph_hr.fillAlphas = 0;
			// graph_hr.balloonText = "<b><span style='font-size:14px;'>
			// average: [[avgHeart]]<br>high: [[highHeart]]<br>low:
			// [[lowHeart]]</span></b>";
			chartSub.addGraph(graph_hr);

			// graph_step
			var graph_step = new AmCharts.AmGraph();
			graph_step.type = "column";
			graph_step.title = "STEP";
			graph_step.lineColor = "#770055";
			graph_step.valueField = "step";
			graph_step.fillAlphas = 0.7;
			// graph_step.balloonText = "<b><span style='font-size:14px;'>
			// average: [[avgStep]]<br>high: [[highStep]]<br>low:
			// [[lowStep]]</span></b>";
			graph_step.textAlign = "left";
			chartSub.addGraph(graph_step);

			// CURSOR
			// chartCursor
			var chartCursor = new AmCharts.ChartCursor();
			chartCursor.categoryBalloonDateFormat = "YYYY/MM/DD";
			chartCursor.cursorColor = "#CC0000";
			chart.addChartCursor(chartCursor);
			chart.mouseWheelZoomEnabled = true;

			chart
					.addListener(
							"clickGraphItem",
							function(event) {
								var button = document.getElementById('backbtn');
								document.getElementById('backbtn').style.visibility = 'visible';
								document.getElementById('analysisdiv').style.visibility = 'visible';
								$("#legendDiv").css("visibility", "visible");
								
								button.onclick = function() {
									document.getElementById('backbtn').style.visibility = 'hidden';
									document.getElementById('analysisdiv').style.visibility = 'hidden';
									$("#legendDiv").css("visibility", "hidden");
									resetChart()();
								}

								//클릭한 데이터
								clickData = event.item.dataContext;
								var sensingData = clickData.sensingData;
								
								
								///최고-최저-평균 계산
								if (typeof sensingData[0] != 'undefined') { //센싱데이터가 있을 때 만
								
									var sensingDataLength = sensingData.length;
									var HighTemp = sensingData[0].temperature, 
									LowTemp = sensingData[0].temperature, 
									HighHeart = sensingData[0].heart_rate, 
									LowHeart = sensingData[0].heart_rate, 
									HighStep = sensingData[0].step, 
									LowStep = sensingData[0].step, 
									TotalTemp = 0, 
									TotalHeart = 0, 
									TotalStep = 0;
									
									
									for(var i=1; i<sensingDataLength; i++){
										//temperature
										var temp = parseFloat(sensingData[i].temperature);
										if(temp < LowTemp)
											LowTemp = temp;
										if(temp > HighTemp)
											HighTemp = temp;
										TotalTemp += temp;
										
										//Heart
										var heart = parseInt(sensingData[i].heart_rate);
										if(heart < LowHeart)
											LowHeart = heart;
										if(heart > HighHeart)
											HighHeart = heart;
										TotalHeart += heart;
										
										//Step
										var step = parseInt(sensingData[i].step);
										if(step < LowStep)
											LowStep = step;
										if(step > HighStep)
											HighStep = step;
										TotalStep += step;										
										
									}
									
									//toFixed로 소수점 제한
									$("#tempMin").text(LowTemp);
									$("#tempMax").text(HighTemp);
									$("#tempAvg").text((TotalTemp/sensingDataLength).toFixed(2));
									
								
									$("#heartMin").text(LowHeart);
									$("#heartMax").text(HighHeart);
									$("#heartAvg").text((TotalHeart/sensingDataLength).toFixed(2));
									
									$("#stepMin").text(LowStep);
									$("#stepMax").text(HighStep);
									$("#stepAvg").text((TotalStep/sensingDataLength).toFixed(2));
									
								
								}
								
								//계산 끝
								
								
								
								
								// CURSOR
								// chartCursorSub
								var chartCursorSub = new AmCharts.ChartCursor();
								chartCursorSub.categoryBalloonDateFormat = "HH:NN:SS";
								chartCursorSub.cursorColor = "#CC0000";
								chartSub.addChartCursor(chartCursorSub);
								chartSub.mouseWheelZoomEnabled = true;
								clickData = event.item.dataContext;
								chartSub.dataProvider = event.item.dataContext.sensingData;
								var contents = [ "ConditionDetail_",
										"Temperature_", "TemperatureChange_",
										"TemperatureRhythm_", "HeartRate_",
										"HeartRateChange_", "HeartRateRhythm_",
										"Synchronization_", "Activity_" ];

								var points = [
										clickData.conditionPoint,
										clickData.conditionData.tempPoint,
										clickData.conditionData.tempChangeDeductPoint,
										clickData.conditionData.tempRhythmPoint,
										clickData.conditionData.hrPoint,
										clickData.conditionData.hrChangeDeductPoint,
										clickData.conditionData.hrRhythmPoint,
										clickData.conditionData.synchroDeductPoint,
										clickData.conditionData.activityPoint ];

								var t = "";

								for (var i = 0; i < 9; i = i + 1) {

									$.ajax({
										url : '/handy/DataAnalysis',
										type : 'GET',
										async : false,
										data : {
											'content' : contents[i],
											'point' : points[i]
										},
										success : function(data) {
											// 줄바꾸기 필요 시 수정
											// data = data.replace(/\./gi, ".");
											$('#analysis' + i).text(data);
										}
									});
								}

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

	chart.allLabels = [];
	chart.write("chartdiv");
}