<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="bean.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>


<%
	UserWeekData[] data = (UserWeekData[])request.getAttribute("data");
%>


<%
for(int i=0; i<7; i++){
	out.print(data[i].getDate());
	out.print(" : " + data[i].getValueList().size());
	out.print("<br>");
}
%>

<pre>
JSON---
"data" : [
	{
	"date" : "2016/1/1",
	"conditionData" : {
						"tempPoint" : "-25.0",
						"hrPoint" : "-75.0",
						"tempDeductPoint" : "10.0",
						"hrDeductPoint" : "14.0",
						"abnormalSynchroCnt" : "0",
						"abnormalTempChangeCnt" : "0",
						"abnormalHrChangeCnt" : "0",
						"synchroDeductPoint" : "0.0",
						"tempChangeDeductPoint" : "0.0",
						"hrChangeDeductPoint" : "0.0",
						"tempRhythmPoint" : "0.0",
						"hrRhythmPoint" : "0.0",
						"activityPoint" : "-3.0",
						"conditionPoint" : "-53.0"
					},
					
	"sensingData" : [
						{"log_date" : "2016/1/1 12:00:00", "temperature" : "0", "heart_rate" : "0", "step" : "0"},
						{"log_date" : "2016/1/1 12:01:00", "temperature" : "0", "heart_rate" : "0", "step" : "0"}
					]
	}
	
	]
</pre>
<script>

var data;



data = "[
         <% for(int i=0; i<data.length; i++){ %>
	        	{	
	        	 'date' : '<%=data[i].getDate()%>'
	        	}<% if(i < data.length-1){out.append(",");}%>
         <% } %>
         ]";



</script>











</body>
</html>