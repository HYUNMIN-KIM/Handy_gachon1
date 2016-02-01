<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page isErrorPage="true" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>ERROR</title>
</head>
<body>
	<div style="text-align: center;margin:100px">
		<div style="font-weight: bold;">
		   <%= exception.getClass().getName() %>
		</div>
		
	    <div style="margin-top:30px;">
	        <%= exception.getMessage() %>
	        <% exception.printStackTrace(); %>
	    </div>
    </div>	
</body>
</html>