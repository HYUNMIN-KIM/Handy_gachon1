<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<link type="text/css" rel="stylesheet" href="css/index.css" />
<script type="text/javascript" src="lib/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>View</title>
</head>
<body>
	<%@include file="header.jspf"%>

	<div id="main">
		
		<div id="condition">

			<div id="condition_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ���� ����� : </span> 
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
				<!-- ���⿡ ����� ��Ʈ / ǥ -->
			</div>

		</div>
		




		<div id="heart">

			<div id="heart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ������ : </span> 
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
				<!-- ���⿡ �ɹ� ��Ʈ / ǥ -->
			</div>

		</div>




	<!-- �̻������ -->
	
		<div id="straTap">
		<img alt="dot" src="image/dot.png">
		<span>�̻������</span>
		</div>
		
		
		<div id="stra_detail">
		<!-- ���⿡ �̻������ �ƹ� ��Ʈ / ǥ -->
		</div>


		<div class="stra">

			<div class="stra_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ü�� : </span> 
				<span id="stra_temperature_title_grade" class="stra_title_grade"></span>
			</div>

			<div class="stra_subtitle">
				<div class="stra_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="stra_temperature_subtitleComment_text" class="stra_subtitleComment_text"></span>
				</div>
			</div>

		</div>



		<div class="stra">

			<div class="stra_title">
				<img alt="dot" src="image/dot.png"> 
				<span> �ƹ� : </span> 
				<span id="stra_pulse_title_grade" class="stra_title_grade"></span>
			</div>

			<div class="stra_subtitle">
				<div class="stra_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="stra_pulse_subtitleComment_text" class="stra_subtitleComment_text"></span>
				</div>
		</div>







	</div>

</body>
</html>