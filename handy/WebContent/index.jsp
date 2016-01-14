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

<<<<<<< HEAD
TEST: ${user.name}

</div>
<div>



	


</div>
=======
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




	<!-- 이상빈도지수 -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>이상빈도 지수</span>
		</div>
		
		
		<div id="stra_detail">
		<!-- 여기에 이상빈도지수 차트 / 표 -->
		</div>


		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> 체온 : </span> 
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
				<span> 맥박 : </span> 
				<span id="stra_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="stra_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>





	<!-- 싱크로 지수 -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>싱크로 지수 : </span>
		<span id="sync_title_grade"></span>
		</div>
		<div class="tapSub">
		<img alt="dot" src="image/dot.png">
		<span id="sync_sub_description"></span>
		</div>
		
		<div id="sync_detail">
		<!-- 여기에 싱크로지수 차트 / 표 -->
		</div>
		
		



	<!-- 변동 지수 -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>변동 지수</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- 여기에 변동지수 차트 / 표 -->
		</div>
		
				<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> 체온 : </span> 
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
				<span> 맥박 : </span> 
				<span id="chan_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="chan_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>
		
		
		




	<!-- 리듬 지수 -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>리듬 지수</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- 여기에 리듬지수 차트 / 표 -->
		</div>
		
				<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span> 체온 : </span> 
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
				<span> 맥박 : </span> 
				<span id="ryt_pulse_title_grade" class="subPart_title_grade"></span>
			</div>

			<div class="subPart_subtitle">
				<div class="subPart_subtitleComment">
					<img alt="dot" src="image/dot.png"> 
					<span id="ryt_pulse_subtitleComment_text" class="subPart_subtitleComment_text"></span>
				</div>
		</div>
		
		
		
		



	<!-- 행위 지수 -->
	
		<div class="tap">
		<img alt="dot" src="image/dot.png">
		<span>행위 지수</span>
		</div>
		
		
		<div id="sync_detail">
		<!-- 여기에 행위지수 차트 / 표 -->
		</div>


		<div class="subPart">

			<div class="subPart_title">
				<img alt="dot" src="image/dot.png"> 
				<span id="act_pulse_title_grade" class="subPart_title_grade"></span>
			</div>








	</div>


</body>
</html>