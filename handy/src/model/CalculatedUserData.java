package model;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import util.FloatFormat;
import dao.DaoGetInfo;
import bean.SIHMCalorieCalc;
import bean.SIHMConditionCalc;
import bean.UserExtraBean;
import bean.UserSensingData;

public class CalculatedUserData {

	public static UserSensingData[] getWeekData(String id, String startDate) {
		float heartAvg = 0;
		int sum = 0;
		int cnt = 0;
		int userSeq = 0;
		int year = 0;
		int month = 0;
		int day = 0;

		String strDate = null;
		DaoGetInfo daoGetInfo = new DaoGetInfo();
		UserExtraBean ux = null;
		UserSensingData[] data = new UserSensingData[7];

		
		
		DaoGetInfo.Connection();

			// user seq, extra info
			userSeq = daoGetInfo.getUser_seq(id);
			ux = daoGetInfo.getExtraUser(userSeq);

			// calendar
			Calendar c = Calendar.getInstance();
			setCalendar(startDate, c);

			// TODO 7일간의 정보를 처리함. 월간 정보 필요 시 수정
			for (int i = 0; i < 7; i++) {
				data[i] = new UserSensingData();

				// 날짜설정
				year = c.get(1);
				month = c.get(2) + 1;
				day = c.get(5);
				strDate = year + "/";

				// 월 설정 - MM형식
				if (month < 10)
					strDate += 0;
				strDate += month + "/" + day;

				// 날짜와 얻어온 센서 정보 설정
				data[i].setDate(strDate);
				data[i].setSensingDataList(daoGetInfo.getSensorData_ymd(
						userSeq, year, month, day));

				// 평균 심박수 계산을 위한 작업
				for (int j = 0; j < data[i].getSensingDataList().size(); j++) {
					if (data[i].getSensingDataList().get(j).steps <= 75) {
						sum += data[i].getSensingDataList().get(j).heart_rate;
						cnt++;
					}
				}

				// calendar++
				c.add(Calendar.DAY_OF_MONTH, 1);
			}

		DaoGetInfo.DisConnection();
		heartAvg = sum / (float) cnt;

		
		
		
		// 센싱데이터의 평균, 칼로리, 컨디션 계산
		for (int i = 0; i < data.length; i++) {

			// 센싱값이 0개 이하면 continue
			if (data[i].getSensingDataList().size() <= 0)
				continue;

			// 데이터 계산을 위한 유저 정보 설정
			setExtraUserInfo(data[i], ux, heartAvg);

			// 칼로리 계산
			data[i].getCalorieCalc().calcConsumedCalorie(
					data[i].getSensingDataList());

			// 컨디션 계산
			data[i].getConditionCalc().calcPoints(data[i].getSensingDataList());

			// 기존 1분마다의 값 제거 후 5분마다 평균을 낸 값 추가
			List<SIHMSSensingData> avgList = sensingValueAvg(data[i]
					.getSensingDataList());
			data[i].getSensingDataList().clear();
			data[i].getSensingDataList().addAll(avgList);
		}

		return data;
	}

	
	
	
	
	// Calendar 설정 메소드 : startDate가 null이면 한 주 전 일요일로
	private static void setCalendar(String startDate, Calendar c) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");

		if (startDate == null) {
			c.add(3, -1);
			c.add(5, (c.get(7) - 1) * -1);

		} else {
			try {
				c.setTime(formatter.parse(startDate));
			} catch (Exception e) {
				// formatter parse error
				e.printStackTrace();
			}

		}
	}

	// Extra User Info 설정 메소드
	private static void setExtraUserInfo(UserSensingData userSensingData,
			UserExtraBean ux, float heartAvg) {

		try {
			userSensingData
					.setCalorieCalc(new SIHMCalorieCalc(ux.getGender(), ux
							.getAge(), ux.getHeight(), ux.getWeight(),
							(int) heartAvg));
			userSensingData.setConditionCalc(new SIHMConditionCalc(ux
					.getGender(), ux.getAge(), ux.getHeight(), ux.getWeight(),
					(int) heartAvg));


		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 측정된 센서값의 시간 차가 2분 이상이 아니면 5분동안 센서 정보들의 평균값만을 포함한다.

	// 5분마다의 평균 계산 메소드
	private static List<SIHMSSensingData> sensingValueAvg(
			List<SIHMSSensingData> originalList) {

		int cnt = 0;
		int minute = 0, firstMinute = 0, heartTotal = 0, stepTotal = 0;
		float temperatureTotal = 0;

		ArrayList<SIHMSSensingData> list = new ArrayList<>();
		for (int j = 0; j < originalList.size(); j++) {

			if (cnt == 0) {
				firstMinute = minute = originalList.get(j).getLog_date()
						.getMinutes();
				heartTotal = originalList.get(j).getHeart_rate();
				stepTotal = originalList.get(j).getSteps();
				temperatureTotal = originalList.get(j).getTemperature();
				cnt = 1;

			} else if (cnt < 4) {

				// 이전 정보와 시간 차이가 2분을 넘어간경우
				if (minute + 2 > originalList.get(j).getLog_date().getMinutes()) {
					heartTotal += originalList.get(j).getHeart_rate();
					stepTotal += originalList.get(j).getSteps();
					temperatureTotal += originalList.get(j).getTemperature();
					cnt++;
					minute = originalList.get(j).getLog_date().getMinutes();

				} else {
					SIHMSSensingData sData = new SIHMSSensingData();
					sData.setLog_date(originalList.get(j).getLog_date());
					sData.getLog_date().setSeconds(0);
					sData.getLog_date().setMinutes(firstMinute);

					if (heartTotal != 0)
						sData.setHeart_rate(heartTotal / cnt);
					if (stepTotal != 0)
						sData.setSteps(stepTotal / cnt);
					if (temperatureTotal != 0)
						sData.setTemperature(temperatureTotal / cnt);

					list.add(sData);
					cnt = 0;
				}

			} else {
				SIHMSSensingData sData = new SIHMSSensingData();
				sData.setLog_date(originalList.get(j).getLog_date());
				sData.getLog_date().setSeconds(0);
				sData.getLog_date().setMinutes(firstMinute);

				if (heartTotal != 0)
					sData.setHeart_rate(heartTotal / cnt);
				if (stepTotal != 0)
					sData.setSteps(stepTotal / cnt);
				if (temperatureTotal != 0)
					sData.setTemperature(Float.parseFloat(FloatFormat
							.format(temperatureTotal / cnt)));

				list.add(sData);
				cnt = 0;
			}
		}
		return list;
	}

}