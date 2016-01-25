package Model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

import util.FloatFormat;
import Dao.DaoGetInfo;
import bean.SIHMCalorieCalc;
import bean.SIHMConditionCalc;
import bean.UserExtraBean;
import bean.UserWeekData;

public class WeekDataGetter {
   public static UserWeekData[] getWeekData(String id, String startDate) {
      DaoGetInfo daoGetInfo = new DaoGetInfo();
      UserExtraBean ux = null;
      UserWeekData[] data = new UserWeekData[7];
      float result = 0;
      int sum = 0;
      int cnt = 0;

      
      Calendar c = Calendar.getInstance();
      
      if(startDate == null){
	      c.add(3, -1);
	      int dayOfWeek = c.get(7);
	      c.add(5, (dayOfWeek - 1) * -1);
      }else{
    	  try {
    		SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
			c.setTime(formatter.parse(startDate));
		} catch (Exception e) {
			// formatter parse error
			System.out.println("WeekDataGetter startDate parseError");
			e.printStackTrace();
		}
    	  
      }
      
      
      
      int userSeq = daoGetInfo.getUser_seq(id);

      for (int i = 0; i < 7; i++)
         data[i] = new UserWeekData();

      for (int i = 0; i < 7; i++) {

         int year = c.get(1);
         int month = c.get(2) + 1;
         int day = c.get(5);
         String strDate = year + "/";
         if(month < 10)
            strDate += 0;
         strDate += month + "/" + day;

         
         data[i].setDate(strDate);
         data[i].setValueList(daoGetInfo.getSensorValue_YearWeek(userSeq,
               year, month, day));

         
         // 유저정보 및 평균심박수를 구한다
         ux = daoGetInfo.getExtraUser(userSeq);

         for (int j = 0; j < data[i].getValueList().size(); j++) {
            if (data[i].getValueList().get(j).steps <= 75) {
               sum += data[i].getValueList().get(j).heart_rate;
               cnt++;
            }
         }

         c.add(Calendar.DAY_OF_MONTH, 1);
      }

      result = sum / (float) cnt;

      int minute, firstMinute, heartTotal, stepTotal, size;
      float temperatureTotal;
      
      //칼로리 계산
      for(int i=0;i<data.length;i++)
      {
         data[i].setCalorieCalc(new SIHMCalorieCalc(ux.getGender(),ux.getAge(),
               ux.getHeight(), ux.getWeight(), (int) result));
         if (data[i].getValueList().size() > 0)
            
            data[i].getCalorieCalc().calcConsumedCalorie(data[i].getValueList());
         //System.out.println("kal : " + data[i].getCalorieCalc().calcConsumedCalorie(data[i].getValueList()));
      }

      for (int i = 0; i < data.length; i++) {

         data[i].setConditionCalc(new SIHMConditionCalc(ux.getGender(), ux
               .getAge(), ux.getHeight(), ux.getWeight(), (int) result));
         
         
         
         // FIXME 센싱데이터가 0개면 NaN 출력됨
         if (data[i].getValueList().size() > 0)
            data[i].getConditionCalc().calcPoints(data[i].getValueList());

         
         
         firstMinute = 0;
         minute = 0;
         cnt = 0;
         heartTotal = 0;
         stepTotal = 0;
         temperatureTotal = 0;
         
         //10분동안 센서 정보들의 평균값만을 포함한다
         ArrayList<SIHMSSensingData> list = new ArrayList<>();
         for (int j = 0; j < data[i].getValueList().size(); j++) {
            
            if(cnt == 0){
               firstMinute = minute = data[i].getValueList().get(j).getLog_date().getMinutes();
               heartTotal = data[i].getValueList().get(j).getHeart_rate();
               stepTotal = data[i].getValueList().get(j).getSteps();
               temperatureTotal = data[i].getValueList().get(j).getTemperature();
               cnt = 1;
               
            }else if(cnt < 4){
               
               //이전 정보와 시간 차이가 2분을 넘어간경우 그때까지 정보만 평균값으로 넣음
               if(minute +2 > data[i].getValueList().get(j).getLog_date().getMinutes()){
                  heartTotal += data[i].getValueList().get(j).getHeart_rate();
                  stepTotal += data[i].getValueList().get(j).getSteps();
                  temperatureTotal += data[i].getValueList().get(j).getTemperature();
                  cnt++;
                  minute = data[i].getValueList().get(j).getLog_date().getMinutes();
                  
               }else {
                  SIHMSSensingData sData = new SIHMSSensingData();
                  sData.setLog_date(data[i].getValueList().get(j).getLog_date());
                  sData.getLog_date().setSeconds(0);
                  sData.getLog_date().setMinutes(firstMinute);
                  
                  if(heartTotal != 0)
                     sData.setHeart_rate(heartTotal / cnt);
                  if(stepTotal != 0)
                     sData.setSteps(stepTotal / cnt);
                  if(temperatureTotal != 0)
                     sData.setTemperature(temperatureTotal / cnt);
                  
                  
                  list.add(sData);
                  cnt = 0;
               }
               
            }else{
               SIHMSSensingData sData = new SIHMSSensingData();
               sData.setLog_date(data[i].getValueList().get(j).getLog_date());
               sData.getLog_date().setSeconds(0);
               sData.getLog_date().setMinutes(firstMinute);
               
               if(heartTotal != 0)
                  sData.setHeart_rate(heartTotal / cnt);
               if(stepTotal != 0)
                  sData.setSteps(stepTotal / cnt);
               if(temperatureTotal != 0)
                  sData.setTemperature(Float.parseFloat(FloatFormat.format(temperatureTotal / cnt)));
               
               
               list.add(sData);
               cnt = 0;
            }
         }
         data[i].getValueList().clear();
         data[i].getValueList().addAll(list);
         
         
         
         
      }

      return data;
   }
}