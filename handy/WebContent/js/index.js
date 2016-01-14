	var mainConditionGrade = 4;
	var heartConditionGrade = 4;
	var stra_temperatureConditionPoint = 90;
	var stra_temperatureConditionGrade = 1;
	var stra_temperatureConditionDescription = "지난 일주일의 평균에 비해 ()점 좋습니다.";
	var pointDescription = "100점이 가장 좋으며 0점이 가장 나쁩니다.";
	var stra_pulseConditionGrade = 0;
	
	
		$(document).ready(function() {

			getMainConditionJSON();
			getHeartConditionJSON();
			getStraTemperatureConditionJSON();
			getStraPulseConditionJSON();
			
			
			
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
				$("#heart_title_grade_detail").text("심폐능력 "+json.heartCondition[heartConditionGrade].condition 
						+ " (" + json.heartCondition[heartConditionGrade].comment + ")" );
				$("#heart_subtitle_conditionComment_text").text(
						json.heartCondition[heartConditionGrade].conditionComment);
				$("#heart_subtitle_recipeComment_text").text(
						json.heartCondition[heartConditionGrade].recipeComment);
			});
			
		}
		
		
		
		
		
		
		function getStraTemperatureConditionJSON(){
			$.getJSON("json/stra_temperatureCondition.json", function(json) {
				$("#stra_temperature_title_grade").text(json.temperatureCondition[stra_temperatureConditionGrade].grade);
				$("#stra_temperature_subtitleComment_text").text("하루 중 정상범위밖의 체온이 관찰되는 체온이상빈도점수는 " + stra_temperatureConditionPoint
						+"점으로 "+ json.temperatureCondition[stra_temperatureConditionGrade].grade 
						+ "한 상태입니다."
						+ pointDescription + " "
						+ stra_temperatureConditionDescription);
				
			});
		}
		
		
		
		function getStraPulseConditionJSON(){
			$.getJSON("json/stra_pulse.json", function(json){
				$("#stra_pulse_title_grade").text(json.pulseCondition[stra_pulseConditionGrade].grade);
				$("#stra_pulse_subtitleComment_text").text();
			
			});
		}
		
		
		
