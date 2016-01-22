<%@page import="java.util.Calendar"%>
<%@page import="Model.SIHMSSensingData"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="bean.*"%>
<%@ page import="java.text.*"%>
<%@ page import="util.*"%>
<%@ page errorPage="errorpage.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="lib/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="lib/amcharts/amcharts.js"></script>
<script type="text/javascript" src="lib/amcharts/serial.js"></script>
<script type="text/javascript" src="js/graphicChart.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>GRAPH PAGE</title>

<style>

#chartdiv{
	width: 70%; 
	height: 375px; 
	background-color: #FFFFFF;
	margin : 0 auto;
}

</style>

</head>
<body>
	<%@include file="header.jspf"%>

	<%
		UserWeekData[] data = (UserWeekData[]) request.getAttribute("data");
		SimpleDateFormat hmsDateFormat = new SimpleDateFormat("HH:mm:ss");
	%>

<script>
var data = new Array;
$(document).ready(function (){
	
	
	// attribute로 받은것 JSON으로
	
	<% for(int i=0; i<data.length; i++){ %>
		data[<%=i%>] = new Object;
		data[<%=i%>].date = '<%=data[i].getDate()%>';
		data[<%=i%>].conditionPoint = '<%=FloatFormat.format(data[i].getConditionCalc().getConditionPoint())%>';
		data[<%=i%>].caloriePoint = '<%=data[i].getCalorieCalc().getcalcConsumedCalorie()%>';

		data[<%=i%>].conditionData = new Object;
		
		data[<%=i%>].conditionData.tempPoint = '<%=data[i].getConditionCalc().getTempPoint()%>';
		data[<%=i%>].conditionData.hrPoint = '<%=data[i].getConditionCalc().getHrPoint()%>';
		data[<%=i%>].conditionData.tempDeductPoint = '<%=data[i].getConditionCalc().getTempChangeDeductPoint()%>';
		data[<%=i%>].conditionData.hrDeductPoint = '<%=data[i].getConditionCalc().getHrChangeDeductPoint()%>';
		data[<%=i%>].conditionData.synchroDeductPoint =  '<%=data[i].getConditionCalc().getSynchroDeductPoint()%>';
		data[<%=i%>].conditionData.tempChangeDeductPoint = '<%=data[i].getConditionCalc().getTempChangeDeductPoint()%>';
		data[<%=i%>].conditionData.hrChangeDeductPoint =  '<%=data[i].getConditionCalc().getHrChangeDeductPoint()%>';
		data[<%=i%>].conditionData.tempRhythmPoint =  '<%=data[i].getConditionCalc().getTempRhythmPoint()%>';
		data[<%=i%>].conditionData.hrRhythmPoint = '<%=data[i].getConditionCalc().getHrRhythmPoint()%>';
		data[<%=i%>].conditionData.activityPoint = '<%=data[i].getConditionCalc().getActivityPoint()%>';
		
		data[<%=i%>].sensingData = new Array;
		<% for(int j=0 ; j < data[i].getValueList().size(); j++){ %>
			data[<%=i%>].sensingData[<%=j%>] = new Object;
			data[<%=i%>].sensingData[<%=j%>].log_date = '<%=hmsDateFormat.format(data[i].getValueList().get(j).getLog_date())%>';
			data[<%=i%>].sensingData[<%=j%>].temperature = '<%=data[i].getValueList().get(j).getTemperature()%>';
			data[<%=i%>].sensingData[<%=j%>].heart_rate = '<%=data[i].getValueList().get(j).getHeart_rate()%>';
			data[<%=i%>].sensingData[<%=j%>].step = '<%=data[i].getValueList().get(j).getSteps()%>';
		<%}%>
	<%}%>
	
	var ob = JSON.stringify(data);
	//console.log(ob);
});
         
         
</script>



<div id="chartdiv">
</div>

<ul>
<li>컨디션 지수 : </li>


</ul>


</body>
</html>