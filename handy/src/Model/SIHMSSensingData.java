package Model;


import java.util.Date;

public class SIHMSSensingData {
	Date log_date = null;
	float temperature = 0;
	int heart_rate = 0;
	int steps = 0;
	
	
	public Date getLog_date() {
		return log_date;
	}
	public void setLog_date(Date log_date) {
		this.log_date = log_date;
	}
	public float getTemperature() {
		return temperature;
	}
	public void setTemperature(float temperature) {
		this.temperature = temperature;
	}
	public int getHeart_rate() {
		return heart_rate;
	}
	public void setHeart_rate(int heart_rate) {
		this.heart_rate = heart_rate;
	}
	public int getSteps() {
		return steps;
	}
	public void setSteps(int steps) {
		this.steps = steps;
	}
	
}
