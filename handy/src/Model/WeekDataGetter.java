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
    UserExtraBean ux = null;
    UserWeekData[] data = new UserWeekData[7];
    float result = 0;
	int sum=0;
	int cnt=0;

    Calendar c = Calendar.getInstance();
    c.add(3, -1);
    
    int dayOfWeek = c.get(7);
    
    c.add(5, (dayOfWeek - 1) * -1);
    


    int userSeq = daoGetInfo.getUser_seq(id);
 
  	
    for(int i=0;i<7;i++)
    	data[i] = new UserWeekData();
    
    for (int i = 0; i < 7; i++)
    {
      
      int year = c.get(1);
      int month = c.get(2) + 1;
      int day = c.get(5);
      

      data[i].setDate(year + "/" + month + "/" + day);
      data[i].setValueList(
        daoGetInfo.getSensorValue_YearWeek(userSeq, year, month, day));
    
      
      //TODO : user extra 데이터 입력받아와야함.
      //String gender, int age, int height, int weight, int avg_heart_rate
       ux = daoGetInfo.getExtraUser(userSeq);
      	// data[i].setConditionCalc(new SIHMConditionCalc(ux.getGender(), ux.getAge(), ux.getHeight(), ux.getWeight(), ux.getAvg_heart_rate()));
    
      	for(int j=0;j<data[i].getValueList().size();j++)
		{
			if(data[i].getValueList().get(j).steps<=75)
			{
				sum += data[i].getValueList().get(j).heart_rate;

				//System.out.println(data[i].getValueList().get(j).log_date+ "ab" + data[i].getValueList().get(j).heart_rate);
				cnt++;
			}
		}
    
    }
    
    result = sum/(float)cnt;
    System.out.println("result: " + result );
    System.out.println(cnt);
    for(int i=0;i<data.length;i++)
    {
      	
      	data[i].setConditionCalc(new SIHMConditionCalc(ux.getGender(), ux.getAge(), ux.getHeight(), ux.getWeight(), (int)result));
      	// FIXME 센싱데이터가 0개면 NaN 출력됨
      	if(data[i].getValueList().size() > 0)
      		data[i].getConditionCalc().calcPoints(data[i].getValueList());
      

      c.add(Calendar.DAY_OF_MONTH, 1);
    }
    
	
    return data;
  }
}
