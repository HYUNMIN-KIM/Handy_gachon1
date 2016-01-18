package Model;

import Dao.DaoGetInfo;
import bean.SIHMConditionCalc;
import bean.UserExtraBean;
import bean.UserWeekData;

import java.util.Calendar;

public class WeekDataGetter
{
  public static UserWeekData[] getWeekData(String id)
  {
    DaoGetInfo daoGetInfo = new DaoGetInfo();
    UserWeekData[] data = new UserWeekData[7];
    

    Calendar c = Calendar.getInstance();
    c.add(3, -1);
    
    int dayOfWeek = c.get(7);
    c.add(5, (dayOfWeek - 1) * -1);
    


    int userSeq = daoGetInfo.getUser_seq(id);
    for (int i = 0; i < 7; i++)
    {
      data[i] = new UserWeekData();
      int year = c.get(1);
      int month = c.get(2) + 1;
      int day = c.get(5);
      

      data[i].setDate(year + "/" + month + "/" + day);
      data[i].setValueList(
        daoGetInfo.getSensorValue_YearWeek(userSeq, year, month, day));
    
      
      //TODO : user extra
      
      
      //String gender, int age, int height, int weight, int avg_heart_rate
      	UserExtraBean ux = daoGetInfo.getExtraUser(userSeq);
    		  
      	data[i].setConditionCalc(new SIHMConditionCalc(ux.getGender(), ux.getAge(), ux.getHeight(), ux.getWeight(), ux.getAvg_heart_rate()));
      	data[i].getConditionCalc().calcPoints(data[i].getValueList());
      
      

      c.add(Calendar.DAY_OF_MONTH, 1);
    }
    
	
    return data;
  }
}
