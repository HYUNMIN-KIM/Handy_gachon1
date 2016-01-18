package bean;

public class UserExtraBean {
	
	private String gender;
	private int age;
	private int height;
	public UserExtraBean(String gender, int age, int height, int weight,
			int avg_heart_rate) {
		super();
		this.gender = gender;
		this.age = age;
		this.height = height;
		this.weight = weight;
		this.avg_heart_rate = avg_heart_rate;
	}
	private int weight;
	private int avg_heart_rate;
	
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public int getAvg_heart_rate() {
		return avg_heart_rate;
	}
	public void setAvg_heart_rate(int avg_heart_rate) {
		this.avg_heart_rate = avg_heart_rate;
	}
	

}
