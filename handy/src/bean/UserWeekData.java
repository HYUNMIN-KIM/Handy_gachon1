package bean;

import java.util.ArrayList;
import java.util.List;

import Model.SIHMSSensingData;

public class UserWeekData {

	private String date;
	private SIHMConditionCalc conditionCalc;
	private List<SIHMSSensingData> valueList;

	public SIHMConditionCalc getConditionCalc() {
		return conditionCalc;
	}

	public void setConditionCalc(SIHMConditionCalc conditionCalc) {
		this.conditionCalc = conditionCalc;
	}

	public UserWeekData() {
		//this.valueList = new ArrayList();
	}

	public String getDate() {
		return this.date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<SIHMSSensingData> getValueList() {
		return this.valueList;
	}

	public void setValueList(List<SIHMSSensingData> valueList) {
		this.valueList = valueList;
	}
}
