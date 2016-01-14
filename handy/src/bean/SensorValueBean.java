package bean;

import java.util.ArrayList;
import java.util.Date;

public class SensorValueBean {
	private int heart_rate;
	private double temperature;
	private int step_count;
	private Date date;
	public SensorValueBean(int heart_rate, double temperature, int step_count, Date date)
	{
		super();
		this.heart_rate = heart_rate;
		this.step_count = step_count;
		this.temperature = temperature;
		this.date = date;
	}
	public SensorValueBean()
	{
		super();
	}
	
	public double getTemperature() {
		return temperature;
	}
	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}
	public int getStep_count() {
		return step_count;
	}
	public void setStep_count(int step_count) {
		this.step_count = step_count;
	}
	public int getHeart_rate() {
		return heart_rate;
	}
	public void setHeart_rate(int heart_rate) {
		this.heart_rate = heart_rate;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	

}
