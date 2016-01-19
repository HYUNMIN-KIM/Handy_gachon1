package Dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import Model.SIHMSSensingData;
import bean.SensorValueBean;
import bean.UserBean;
import bean.UserExtraBean;

public class DaoGetInfo {

	private static Connection conn = JDBCManager.getInstance();

	private Statement st = null;
	private ResultSet rs = null;
	private PreparedStatement pstmt = null;
	
	/*
	public int getUser_seq()
	{
		int result = 0;
		
		try{
			String query = "select count(*) FROM COMM_USER";
			pstmt = conn.prepareStatement(query);
			
			rs = pstmt.executeQuery();
			rs.next();
			
			result = rs.getInt("count(*)");
		}catch(SQLException e){
    		System.out.println(e.getMessage());
		}
		return result;
	}
	*/
	
	   public void close()
	    {
	      
	        try {
	            conn.close();
	        } catch (SQLException e) {
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	            System.out.println("error/con");
	            	        }
	    }
	 public ArrayList<SIHMSSensingData> getSensorValue_YearWeek(int user_seq, int year, int month, int day)
	  {
	    ArrayList<SIHMSSensingData> sensorInfo = new ArrayList();
	    try
	    {
	      String query = "select LOG_DT,TEMPERATURE,HEART_RATE,STEPS from GB_SENSING_DATA WHERE REG_USER_SEQ=? AND YEAR=? AND MONTH=? AND DAY=?";
	      
	      this.pstmt = conn.prepareStatement(query);
	      this.pstmt.setInt(1, user_seq);
	      this.pstmt.setInt(2, year);
	      this.pstmt.setInt(3, month);
	      this.pstmt.setInt(4, day);
	      this.rs = this.pstmt.executeQuery();
	      while (this.rs.next()) {
	    	  SIHMSSensingData s = new SIHMSSensingData();
	    	  s.setHeart_rate(this.rs.getInt("HEART_RATE"));
	    	  s.setTemperature(this.rs.getFloat("TEMPERATURE"));
	    	  s.setSteps(this.rs.getInt("STEPS"));
	    	  s.setLog_date(this.rs.getDate("LOG_DT"));
	    	  
	    	  sensorInfo.add(s);
//	        sensorInfo.add(new SensorValueBean(this.rs.getInt("HEART_RATE"), this.rs.getDouble("TEMPERATURE"), this.rs.getInt("STEPS"), this.rs.getDate("LOG_DT")));
	      }
	    }
	    catch (SQLException e)
	    {
	      System.out.println(e.getMessage());
	    }
	    return sensorInfo;
	  }
	
	
	public int getUser_seq(String user_id)
	{
		int result = 0;
		
		try{
			String query = "select USER_SEQ FROM COMM_USER WHERE USER_ID = ?";
			pstmt = conn.prepareStatement(query);
			pstmt.setString(1, user_id);
			rs = pstmt.executeQuery();
			rs.next();
			
			result = rs.getInt("USER_SEQ");
		}catch(SQLException e){
    		System.out.println(e.getMessage());
		}
		return result;
	}
	
	public String getUser_Id()
	{
		String result = null;
		
		try{
			String query = "select USER_SEQ,USER_ID FROM COMM_USER";
			pstmt = conn.prepareStatement(query);
			
			rs = pstmt.executeQuery();
			rs.next();
			
			result = rs.getString("USER_ID");
		}catch(SQLException e){
    		System.out.println(e.getMessage());
		}
		return result;
	}
	
	    public ArrayList<SensorValueBean> getSensor(int user_seq)
	    {
	    	ArrayList<SensorValueBean> sensorInfo = new ArrayList<SensorValueBean>();

	    	try{
	    		String query = "select LOG_DT,TEMPERATURE,HEART_RATE,STEPS from GB_SENSING_DATA WHERE REG_USER_SEQ=?";

	    		pstmt = conn.prepareStatement(query);
	    		pstmt.setInt(1,user_seq);
	    		rs = pstmt.executeQuery();
	    		while(rs.next()){
	    			sensorInfo.add(new SensorValueBean(rs.getInt("HEART_RATE"),rs.getDouble("TEMPERATURE"), rs.getInt("STEPS"), rs.getDate("LOG_DT")));
	    		
	    		}
	    		}catch(SQLException e){
	 	    		System.out.println(e.getMessage());
	    	}
			return sensorInfo;
	    }


	public UserBean getUser(int user_seq)
	{
		UserBean user = new UserBean();

		try{
			String query = "select USER_ID,USER_NM,USER_SEQ FROM COMM_USER WHERE USER_SEQ  = ?";

			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1,user_seq);
			rs = pstmt.executeQuery();
			while(rs.next()){
				user = new UserBean(rs.getString("USER_ID"),rs.getInt("USER_SEQ"),rs.getString("USER_NM"));
			}
		}catch(SQLException e){
			System.out.println(e.getMessage());
			

		}
		return user;
	}

	

	public UserExtraBean getExtraUser(int user_seq)
	{
		UserExtraBean userExtra = null;

		try{
			String query = "select GENDER,HEIGHT,WEIGHT FROM GB_USER_EXTRA_INFO WHERE REG_USER_SEQ = ?";

			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, user_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				//TODO age, avg_heart_ 없음
				//String gender, int age, int height, int weight,int avg_heart_rate
				userExtra = new UserExtraBean(rs.getString("GENDER"), 30, rs.getInt("HEIGHT"), rs.getInt("WEIGHT"), 80);	
			}
		}catch(SQLException e){
			System.out.println(e.getMessage());
			

		}
		return userExtra;
	}
}
