package bean;

import java.util.ArrayList;
import java.util.List;

import model.SIHMSSensingData;

public class UserSensingData {

	private String date;
	private SIHMConditionCalc conditionCalc;
	private List<SIHMSSensingData> sensingDataList;
	private SIHMCalorieCalc calorieCalc;

	public SIHMCalorieCalc getCalorieCalc(){
		return calorieCalc;
	}
	
	
	public SIHMConditionCalc getConditionCalc() {
		return conditionCalc;
	}
	
	public void setCalorieCalc (SIHMCalorieCalc calorieCalc){
		this.calorieCalc = calorieCalc;
	}
	
	public void setConditionCalc(SIHMConditionCalc conditionCalc) {
		this.conditionCalc = conditionCalc;
	}

	public UserSensingData() {
		//this.valueList = new ArrayList();
	}

	public String getDate() {
		return this.date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	
	public List<SIHMSSensingData> getSensingDataList() {
		return this.sensingDataList;
	}

	public void setSensingDataList(List<SIHMSSensingData> sensingDataList) {
		this.sensingDataList = sensingDataList;
	}
}

