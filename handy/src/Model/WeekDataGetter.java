package Model;

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
	   float heartAvg = 0;
	   int sum = 0;
	   int cnt = 0;
	   int userSeq = 0;
	   int year = 0;
	   int month = 0;
	   int day = 0;
	   int minute, firstMinute, heartTotal, stepTotal;
	   float temperatureTotal;
	      
	   
	   String strDate = null;
	   SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
	   DaoGetInfo daoGetInfo = new DaoGetInfo();
	   UserExtraBean ux = null;
	   UserWeekData[] data = new UserWeekData[7];
	   userSeq = daoGetInfo.getUser_seq(id);
	   
	   
	   // 유저정보
       ux = daoGetInfo.getExtraUser(userSeq);

	   //get calendar
	   Calendar c = Calendar.getInstance();
	   
      if(startDate == null){
    	  
	      c.add(3, -1);
	      int dayOfWeek = c.get(7);
	      c.add(5, (dayOfWeek - 1) * -1);
	      
      }else{
    	  
    	  try {
			c.setTime(formatter.parse(startDate));
    	  }catch (Exception e) {
			// formatter parse error
			e.printStackTrace();
    	  }
    	  
      }
      

      //TODO 7일간의 정보를 처리함. 월간 정보 필요 시 수정
      for (int i = 0; i < 7; i++) {
    	  data[i] = new UserWeekData();
         
    	  
    	 //날짜설정
         year = c.get(1);
         month = c.get(2) + 1;
         day = c.get(5);
         strDate = year + "/";
         
         //월 설정 - MM형식
         if(month < 10)
            strDate += 0;
         strDate += month + "/" + day;
         
         //날짜와 얻어온 센서 정보 설정
         data[i].setDate(strDate);
         data[i].setValueList(daoGetInfo.getSensorValue_YearWeek(userSeq,
               year, month, day));
         

         //평균 심박수 계산을 위한 작업
         for (int j = 0; j < data[i].getValueList().size(); j++) {
            if (data[i].getValueList().get(j).steps <= 75) {
               sum += data[i].getValueList().get(j).heart_rate;
               cnt++;
            }
         }
         
         //calendar 다음날
         c.add(Calendar.DAY_OF_MONTH, 1);
      }
      
      
      //평균 심박수 계산
      heartAvg = sum / (float) cnt;
      
      
      
      

      for (int i = 0; i < data.length; i++) {
    	  
    	  firstMinute = 0;
          minute = 0;
          cnt = 0;
          heartTotal = 0;
          stepTotal = 0;
          temperatureTotal = 0;
    	  
    	  

    	  if(data[i].getValueList().size() <= 0) //센싱값이 0개 이하면 continue
    		  continue;
    	  
    	  //칼로리 계산
    	    data[i].setCalorieCalc(new SIHMCalorieCalc(ux.getGender(),ux.getAge(),
    	               ux.getHeight(), ux.getWeight(), (int) heartAvg));
    	    data[i].getCalorieCalc().calcConsumedCalorie(data[i].getValueList());
    	  
    	  
    	 //컨디션 계산
         data[i].setConditionCalc(new SIHMConditionCalc(ux.getGender(), ux
               .getAge(), ux.getHeight(), ux.getWeight(), (int) heartAvg));
         data[i].getConditionCalc().calcPoints(data[i].getValueList());
         
         
         
         //측정된 센서값의 시간 차가 2분 이상이 아니면 5분동안 센서 정보들의 평균값만을 포함한다. 
         ArrayList<SIHMSSensingData> list = new ArrayList<>();
         for (int j = 0; j < data[i].getValueList().size(); j++) {
            
            if(cnt == 0){
               firstMinute = minute = data[i].getValueList().get(j).getLog_date().getMinutes();
               heartTotal = data[i].getValueList().get(j).getHeart_rate();
               stepTotal = data[i].getValueList().get(j).getSteps();
               temperatureTotal = data[i].getValueList().get(j).getTemperature();
               cnt = 1;
               
            }else if(cnt < 4){
               
               //이전 정보와 시간 차이가 2분을 넘어간경우 
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
         
         //기존 1분마다의 값 제거 후 5분마다 평균을 낸 값 추가
         data[i].getValueList().clear();
         data[i].getValueList().addAll(list);
      }
      
      

      return data;
   }
}