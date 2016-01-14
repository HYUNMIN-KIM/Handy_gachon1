<%@ page language="java" contentType="text/html; charset=EUC-KR"%>
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

<<<<<<< HEAD
TEST: ${user.name}

</div>
<div>



	


</div>
=======
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
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>�̻�� ����</span>
		</div>
		
		
		<div id="stra_detail">
		<!-- ���⿡ �̻������ ��Ʈ / ǥ -->
		</div>


		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ü�� : </span> 
				<span id="stra_temperature_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="stra_temperature_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
			</div>

		</div>



		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> �ƹ� : </span> 
				<span id="stra_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="stra_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>





	<!-- ��ũ�� ���� -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>��ũ�� ���� : </span>
		<span id="sync_title_grade"></span>
		</div>
		<div class="tapSub">
		<img alt="dot" src="image/dot.png">
		<span id="sync_sub_description"></span>
		</div>
		
		<div id="sync_detail">
		<!-- ���⿡ ��ũ������ ��Ʈ / ǥ -->
		</div>
		
		



	<!-- ���� ���� -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>���� ����</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- ���⿡ �������� ��Ʈ / ǥ -->
		</div>
		
				<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ü�� : </span> 
				<span id="chan_temperature_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="chan_temperature_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
			</div>

		</div>



		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> �ƹ� : </span> 
				<span id="chan_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="chan_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>
		
		
		




	<!-- ���� ���� -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>���� ����</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- ���⿡ �������� ��Ʈ / ǥ -->
		</div>
		
				<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> ü�� : </span> 
				<span id="ryt_temperature_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="ryt_temperature_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
			</div>

		</div>



		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> �ƹ� : </span> 
				<span id="ryt_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="ryt_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>
		
		
		
		



	<!-- ���� ���� -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>���� ����</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- ���⿡ �������� ��Ʈ / ǥ -->
		</div>


		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span id="act_pulse_title_grade" class="subPart_title_grade"></span>
			</div>








	</div>


</body>
</html>