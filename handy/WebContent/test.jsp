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



</body>
</html>