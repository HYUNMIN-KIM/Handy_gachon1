<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@page import="bean.SensorValueBean" %>
<%@page import="bean.UserBean" %>
<%@page import="bean.UserExtraBean" %>
<%@page import="Dao.DaoGetInfo" %>
<%@page import="Dao.JDBCManager" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<script type="text/javascript" src="lib/jquery-1.12.0.min.js" ></script> 
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>View</title>
</head>
<body>
<%@include file="header.jspf" %>



<script>
	$(document).ready(function(){
		$("#cellButton").corner();
		$("#graphButton").corner();
	});
</script>

<div id="main">

TEST: ${user.name}

</div>
<div>



	


</div>

</body>
</html>