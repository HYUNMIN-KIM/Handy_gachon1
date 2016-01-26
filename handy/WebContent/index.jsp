<%@page import="java.util.Calendar"%>
<%@page import="Model.SIHMSSensingData"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="bean.*"%>
<%@ page import="java.text.*"%>
<%@ page import="util.*"%>
<%@ page errorPage="errorPage.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<script type="text/javascript"  src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>
	<script type="text/javascript"  src="http://cdn.amcharts.com/lib/3/amcharts.js"></script>
	<script type="text/javascript"  src="http://cdn.amcharts.com/lib/3/serial.js"></script>
	<script type="text/javascript" src="js/graphicChart.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.corner/2.13/jquery.corner.js"></script>
	
	<link type="text/css" rel="stylesheet" href="css/header.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css">
	<link type="text/css" rel="stylesheet" href="css/index.css" />
	
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">

<title>GRAPH PAGE</title>
</head>
<body>

	<%@include file="header.jspf"%>

	<div id="chartArea">
	
		<div id="chartdiv"></div>
		
		<div id="legendDiv">
			<table>
				<tr>
					<td></td>
					<td class="legendTitle">Min</td>
					<td class="legendTitle">Max</td>
					<td class="legendTitle">Average</td>
				</tr>
				<tr>
					<td class="type legendTitle" id="tempTitle">Temperature</td>
					<td id="tempMin"></td>
					<td id="tempMax"></td>
					<td id="tempAvg"></td>
				</tr>
				<tr>
					<td class="type legendTitle" id="heartTitle">Heart Rate</td>
					<td id="heartMin"></td>
					<td id="heartMax"></td>
					<td id="heartAvg"></td>
				</tr>
				<tr>
					<td class="type legendTitle" id="stepTitle">Step</td>
					<td id="stepMin"></td>
					<td id="stepMax"></td>
					<td id="stepAvg"></td>
				</tr>
			</table>
		</div>
		
	</div>
	
	
	<div id="analysisdiv">
		전문가의 분석 의견
		<ul>
			<li class="analysis" id="analysis0"></li>
			<li class="analysis" id="analysis1"></li>
			<li class="analysis" id="analysis2"></li>
			<li class="analysis" id="analysis3"></li>
			<li class="analysis" id="analysis4"></li>
			<li class="analysis" id="analysis5"></li>
			<li class="analysis" id="analysis6"></li>
			<li class="analysis" id="analysis7"></li>
			<li class="analysis" id="analysis8"></li>
		</ul>
	</div>



<script>
	var data = new Array;

	$(document).ready(function (){
	    // Attribute JSON으로
	    <% for(int i=0; i<data.length; i++){ %>
	        data[<%=i%>] = new Object;
	        data[<%=i%>].date = '<%=data[i].getDate()%>';
	        data[<%=i%>].conditionPoint = '<%=ConditionFormat.format(data[i].getConditionCalc().getConditionPoint()) %>';
	        data[<%=i%>].caloriePoint = '<%=FloatFormat.format(data[i].getCalorieCalc().getcalcConsumedCalorie()) %>';
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
	    
	    //JSON object 생성
	    var ob = JSON.stringify(data);

	    //전문가 분석 정보 테두리 색상
	    for(var i=0; i<9; i++){
	    	$("#analysis"+i).corner();
	        if(i == 0){
	            $("#analysis"+i).css({"border-color" : "#545454", "background-color" : "#ececec"});
	        }else if(i < 4){
	            $("#analysis"+i).css({"border-color" : "#009e00", "background-color" : "#e1ffe1"});
	        }else if(i<8){
	            $("#analysis"+i).css({"border-color" : "#ff8600", "background-color" : "#ffe7cc"});
	        }else{
	            $("#analysis"+i).css({"border-color" : "#770055", "background-color" : "#ffe1f6"});
	        }
	    }
	    
	    
	});
	
	
	
	
	//WeekPicker
	
	$("#header").mouseleave(function (){
	    $('.week-picker').css("visibility", "hidden");
	})
	
	
	$("#header_date").click(function (){
	    $('.week-picker').css("visibility", "visible");
	    
	    var startDate;
	    var endDate;
	    var selectCurrentWeek = function() {
	        window.setTimeout(function () {
	            $('.week-picker').find('.ui-datepicker-current-day a').addClass('ui-state-active')
	        }, 1);
	    }
	    
	    $('.week-picker').datepicker( {
	        showOtherMonths: true,
	        selectOtherMonths: true,
	        onSelect: function(dateText, inst) { 
	            var date = $(this).datepicker('getDate');
	            startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
	            endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6);
	            
	            var url = window.location.pathname 
	            + "?userid=" + "<%=request.getParameter("userid")%>"
	            + "&startDate=" 
	            + $.datepicker.formatDate( 'yy/mm/dd', startDate, inst.settings );
	            
	             window.location.replace(url);
	            selectCurrentWeek();
	        },
	        
	        beforeShowDay: function(date) {
	            var cssClass = '';
	            if(date >= startDate && date <= endDate)
	                cssClass = 'ui-datepicker-current-day';
	            return [true, cssClass];
	        },
	        onChangeMonthYear: function(year, month, inst) {
	            selectCurrentWeek();
	        }
	        
	    });
	    
	    $('.week-picker .ui-datepicker-calendar tr').live('mousemove', function() { $(this).find('td a').addClass('ui-state-hover'); });
	    $('.week-picker .ui-datepicker-calendar tr').live('mouseleave', function() { $(this).find('td a').removeClass('ui-state-hover'); });
	
	});

</script>

</body>
</html>