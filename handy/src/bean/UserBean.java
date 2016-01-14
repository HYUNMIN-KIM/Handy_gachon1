package bean;

public class UserBean {
	
	private String user_id;
	private int user_num;
	private String name;
	public UserBean(String user_id,int user_num,String name)
	{
		super();
		this.user_id = user_id;
		this.user_num = user_num;
		this.name = name;
	}
	public UserBean()
	{
		super();
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public int getUser_num() {
		return user_num;
	}
	public void setUser_num(int user_num) {
		this.user_num = user_num;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}
