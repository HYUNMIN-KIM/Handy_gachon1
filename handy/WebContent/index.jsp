<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<script type="text/javascript" src="lib/jquery-1.12.0.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>View</title>
</head>
<body>
	<%@include file="header.jspf"%>



	<script>
	var mainConditionGrade = 8;
	var heartConditionGrade = 6;
	
	
		$(document).ready(function() {

			getMainConditionJSON();
			getHeartConditionJSON();
			
		});

		function getMainConditionJSON() {

			$.getJSON("json/mainCondition.json", function(json) {
				//set content data
				$("#condition_title_grade").text(json.mainCondition[mainConditionGrade].grade);
				$("#condition_title_grade_detail").text("(" + json.mainCondition[mainConditionGrade].comment + ")" );
				$("#condition_subtitle_conditionComment_text").text(
						json.mainCondition[mainConditionGrade].conditionComment);
				$("#condition_subtitle_recipeComment_text").text(
						json.mainCondition[mainConditionGrade].recipeComment);

				//bottom border
				$("#condition_title").css("border-bottom", "4px solid");
				$("#condition_title").css("border-bottom-color",
						json.mainCondition[mainConditionGrade].color);

			});

		}
		
		
		function getHeartConditionJSON(){
			$.getJSON("json/heartCondition.json", function(json) {
				$("#heart_title_grade").text(json.heartCondition[heartConditionGrade].grade);
				$("#heart_title_grade_detail").text("(" + json.heartCondition[heartConditionGrade].comment + ")" );
				$("#heart_subtitle_conditionComment_text").text(
						json.heartCondition[heartConditionGrade].conditionComment);
				$("#heart_subtitle_recipeComment_text").text(
						json.heartCondition[heartConditionGrade].recipeComment);
			});
			
		}
		
		
	</script>

	<div id="main">
		
		<div id="condition">

			<div id="condition_title">
				<img alt="dot" src="image/dot.png"> 
				<span> 메인 컨디션 : </span> 
				<span id="condition_title_grade"></span>
				<span id="condition_title_grade_detail"></span>
			</div>

			<div id="condition_subtitle">
				<div id="condition_subtitle_conditionComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="condition_subtitle_conditionComment_text"></span>
				</div>

				<div id="condition_subtitle_recipeComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="condition_subtitle_recipeComment_text"></span>
				</div>
			</div>

			<div id="condition_detail">
				<!-- 여기에 컨디션 차트 / 표 -->
			</div>

		</div>
		




		<div id="heart">

			<div id="heart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> 심폐등급 : </span> 
				<span id="heart_title_grade"></span>
				<span id="heart_title_grade_detail"></span>
			</div>

			<div id="heart_subtitle">
				<div id="heart_subtitle_heartComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="heart_subtitle_conditionComment_text"></span>
				</div>

				<div id="heart_subtitle_recipeComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="heart_subtitle_recipeComment_text"></span>
				</div>
			</div>

			<div id="heart_detail">
				<!-- 여기에 심박 차트 / 표 -->
			</div>

		</div>





	</div>

</body>
</html>