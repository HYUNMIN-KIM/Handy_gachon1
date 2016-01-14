	var mainConditionGrade = 4;
	var heartConditionGrade = 4;
	
	
	var stra_temperatureConditionPoint = 90;//�̻��ü������
	var stra_temperatureConditionGrade = 1;//�̻��ü�µ��
	var stra_temperatureConditionDescription = "���� �������� ��տ� ���� ()�� �����ϴ�.";
	
	
	var pointDescription = "100���� ���� ������ 0���� ���� ���޴ϴ�.";
	var stra_pulseConditionGrade = 0;
	
	
	
	var syncGrade = 0; //��ũ�� ���
	var syncDescription = "�Ϸ� �� �ƹڰ� ü���� ������ ������ ��ȭ����� �ݴ��� ��찡 ()% �����˴ϴ�. %�� �������� ���޴ϴ�.";
	
	
	
		$(document).ready(function() {

			getMainConditionJSON(); //���������
			getHeartConditionJSON(); //�ɹ�
			getStraTemperatureConditionJSON(); // �̻�� ü��
			getStraPulseConditionJSON(); //�̻�� �ƹ�
			getSyncJSON(); //��ũ������
			
			
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
				$("#heart_title_grade_detail").text("����ɷ� "+json.heartCondition[heartConditionGrade].condition 
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
				$("#stra_temperature_subtitleComment_text").text("�Ϸ� �� ����������� ü���� �����Ǵ� ü���̻�������� " + stra_temperatureConditionPoint
						+"������ "+ json.temperatureCondition[stra_temperatureConditionGrade].grade 
						+ "�� �����Դϴ�."
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
		
		
		function getSyncJSON(){
			$.getJSON("json/sync.json", function(json){
				$("#sync_title_grade").text(json.sync[syncGrade].grade);
				$("#sync_sub_description").text(syncDescription);
				
			});
			
		}
		
		
