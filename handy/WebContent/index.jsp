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
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>
<script type="text/javascript" src="lib/amcharts/amcharts.js"></script>
<script type="text/javascript" src="lib/amcharts/serial.js"></script>
<script type="text/javascript" src="js/graphicChart.js"></script>
<link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>GRAPH PAGE</title>

</head>
<body>
	<%@include file="header.jspf"%>


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
});


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



<div id="chartdiv">
</div>




</body>
</html>