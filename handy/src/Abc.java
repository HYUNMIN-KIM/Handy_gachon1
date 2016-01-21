import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import Dao.DaoGetInfo;
import bean.SensorValueBean;
import bean.UserBean;
import bean.UserExtraBean;

public class Abc {

	public static void main(String[] args) {
		
		DaoGetInfo db = new DaoGetInfo();
		int totalcount;
		totalcount = db.getUser_seq("test001");
		System.out.println(totalcount);
		
			String abc = db.getUser_Id();
			System.out.println(abc);
			UserBean a = db.getUser(totalcount);
			UserExtraBean b = db.getExtraUser(totalcount);
			//List<SensorValueBean> c = db.getSensor(totalcount);
			String name = a.getName();
			String id = a.getUser_id();
			String gender = b.getGender();
			double height = b.getHeight();
			double weight = b.getWeight();
			//int heartrate = c.get(0).getHeart_rate();
			//double temperature = c.get(1).getTemperature();
			//int steps = c.get(2).getStep_count();
			//Date date = c.get(3).getDate();
			
			System.out.println("Name : "+name +" User ID : " + id);
			//System.out.println("Gender : " + gender +" height/weight : "+height +" / " + weight);
			//System.out.println("temperature : " + temperature + " Heart rate : " +heartrate + " Steps : " + steps);
			//System.out.println("Date : " +date);
			
		

	}

}
