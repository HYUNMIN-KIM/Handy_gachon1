	var mainConditionGrade = 4;
	var heartConditionGrade = 4;
	
	
	var stra_temperatureConditionPoint = 90;//이상빈도체온점수
	var stra_temperatureConditionGrade = 1;//이상빈도체온등급
	var stra_temperatureConditionDescription = "지난 일주일의 평균에 비해 ()점 좋습니다.";
	
	var stra_pulseConditionPoint = 80;//이상빈도맥박점수
	var stra_pulseConditionGrade = 1;//이상빈도맥박등급
	var stra_pulseConditionDescription = "지난 일주일의 평균에 비해 ()점 좋습니다.";
	var pointDescription = "100점이 가장 좋으며 0점이 가장 나쁩니다.";
	
	var chan_temperatureConditionGrade =0;
	var chan_temperatureConditionPoint=15;
	
	var chan_pulseConditionGrade =0;
	var chan_pulseConditionPoint=20;
	var ryt_temperature =true;
	var ryt_pulse = false;
	
	var syncGrade = 0; //싱크로 등급
	var syncDescription = "하루 중 맥박과 체온의 오르고 내리는 변화양상이 반대인 경우가 ()% 관찰됩니다. ";
	var description ="%가 높을수록 나쁩니다."
	
	
		$(document).ready(function() {

			getMainConditionJSON(); //메인컨디션
			getHeartConditionJSON(); //심박
			getStraTemperatureConditionJSON(); // 이상빈도 체온
			getStraPulseConditionJSON(); //이상빈도 맥박
			getSyncJSON(); //싱크로지수
			getChanTemperatureConditionJSON();//변동지수 체온
			getChanPulseConditionJSON();//변동지수 맥박
			getRytTemperatureConditionJSON();//리듬지수 체온
			getRytPulseConditionJSON();//리듬지수 맥박
			getActJSON();//행위지수
			
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
				$("#stra_temperature_conditionComment_text").text(
						json.temperatureCondition[stra_temperatureConditionGrade].conditionComment);
				$("#stra_temperature_recipeComment_text").text(
						json.temperatureCondition[stra_temperatureConditionGrade].recipeComment);
	
			});
		}
		
		function getStraPulseConditionJSON(){
			$.getJSON("json/stra_pulse.json", function(json){
				$("#stra_pulse_title_grade").text(json.pulseCondition[stra_pulseConditionGrade].grade);
				$("#stra_pulse_subtitleComment_text").text();
				$("#stra_temperature_subtitleComment_text").text("하루 중 정상범위밖의 맥박이 관찰되는 맥박이상빈도점수는 " + stra_pulseConditionPoint
						+"점으로 "+ json.pulseCondition[stra_pulseConditionGrade].grade 
						+ "한 상태입니다."
						+ pointDescription + " "
						+ stra_pulseConditionDescription);
			
			});
		}
		
		function getSyncJSON(){
			$.getJSON("json/sync.json", function(json){
				$("#sync_title_grade").text(json.sync[syncGrade].grade);
				$("#sync_sub_description").text(syncDescription + description);
				
			});
			
		}
		
		function getChanTemperatureConditionJSON(){
			$.getJSON("json/chan_temperature.json", function(json){
				$("#chan_temperature_title_grade").text(json.temperature[chan_temperatureConditionGrade].grade);
				$("#chan_temperature_subtitleComment_text").text("하루 중 다음에 잰 체온이 이전체온에 비해 갑작스럽게 변화하는 경우가 " + chan_temperatureConditionPoint
						+"% 관찰되어 "+json.temperature[chan_temperatureConditionGrade].grade +" 상태입니다." +description);
			
			});
		}
		function getChanpulseConditionJSON(){
			$.getJSON("json/chan_pulse.json", function(json){
				$("#chan_pulse_title_grade").text(json.pulse[chan_pulseConditionGrade].grade);
				$("#chan_pulse_subtitleComment_text").text("하루중 이전맥박에 비해 다음에 잰 맥박이 갑작스럽게 변화하는 경우가 " + chan_pulseConditionPoint
						+"% 관찰되어 "+json.pulse[chan_pulseConditionGrade].grade +" 상태입니다." +description);
			
			});
		}
		function getRytTemperatureConditionJSON(){
			$.getJSON("json/ryt_temperature.json", function(json){
				$("#ryt_temperature_title_grade").text(json.pulse[chan_pulseConditionGrade].grade);
				$("#chan_pulse_subtitleComment_text").text("하루중 이전맥박에 비해 다음에 잰 맥박이 갑작스럽게 변화하는 경우가 " + chan_pulseConditionPoint
						+"% 관찰되어 "+json.pulse[chan_pulseConditionGrade].grade +" 상태입니다." +description);
			
			});
		}
		/*
	
		getRytTemperatureConditionJSON();//리듬지수 체온
		getRytPulseConditionJSON();//리듬지수 맥박
		getActJSON();//행위지수
		*/
		
