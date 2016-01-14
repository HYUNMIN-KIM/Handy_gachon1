package bean;

public class UserExtraBean {
	
	private String gender;
	private double height;
	private double weight;
	
	public UserExtraBean( String gender, double height, double weight)
	{
		super();
		
		this.gender = gender;
		this.height = height;
		this.weight = weight;
	}
	public UserExtraBean()
	{
		super();
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
}
