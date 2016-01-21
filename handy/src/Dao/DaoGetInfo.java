package Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import Model.SIHMSSensingData;
import bean.SensorValueBean;
import bean.UserBean;
import bean.UserExtraBean;

public class DaoGetInfo {

	//private static Connection conn = JDBCManager.getInstance();
	
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
	 public ArrayList<SIHMSSensingData> getSensorValue_YearWeek(int user_seq, int year, int month, int day)
	  {
		 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	    ArrayList<SIHMSSensingData> sensorInfo = new ArrayList<SIHMSSensingData>();
	    Connection conn = JDBCManager.getInstance();
	    try
	    {
	      String query = "select TO_CHAR(LOG_DT, 'yyyy-mm-dd hh24:mi:ss') as LOG_DT, TEMPERATURE,HEART_RATE,STEPS from GB_SENSING_DATA WHERE REG_USER_SEQ=? AND YEAR=? AND MONTH=? AND DAY=? ORDER BY LOG_DT ";
	      
	      pstmt = conn.prepareStatement(query);
	      pstmt.setInt(1, user_seq);
	      pstmt.setInt(2, year);
	      pstmt.setInt(3, month);
	      pstmt.setInt(4, day);
	      rs = pstmt.executeQuery();
	      
	      
	      while (rs.next()) {
	    	  SIHMSSensingData s = new SIHMSSensingData();
	    	  
	    	  try {
	    		  Date date = sdf.parse(rs.getString("LOG_DT"));
	    		  s.setLog_date(date);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	  s.setHeart_rate(rs.getInt("HEART_RATE"));
	    	  s.setTemperature(rs.getFloat("TEMPERATURE"));
	    	  s.setSteps(rs.getInt("STEPS"));
	    	  
	    	  
	    	  sensorInfo.add(s);
//	        sensorInfo.add(new SensorValueBean(this.rs.getInt("HEART_RATE"), this.rs.getDouble("TEMPERATURE"), this.rs.getInt("STEPS"), this.rs.getDate("LOG_DT")));
	      }
	    }
	    catch (SQLException e)
	    {
	      System.out.println(e.getMessage());
	    }
	    JDBCManager.close();
	    return sensorInfo;
	  }
	  
	
	
	public int getUser_seq(String user_id)
	{
		int result = 0;
		Connection conn = JDBCManager.getInstance();
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
		JDBCManager.close();
		return result;
	}
	
	public String getUser_Id()
	{
		String result = null;
		Connection conn = JDBCManager.getInstance();
		try{
			String query = "select USER_SEQ,USER_ID FROM COMM_USER";
			pstmt = conn.prepareStatement(query);
			
			rs = pstmt.executeQuery();
			rs.next();
			
			result = rs.getString("USER_ID");
		}catch(SQLException e){
    		System.out.println(e.getMessage());
		}
		JDBCManager.close();
		return result;
	}
	
	
	/*
	    public ArrayList<SensorValueBean> getSensor(int user_seq)
	    {
	    	ArrayList<SensorValueBean> sensorInfo = new ArrayList<SensorValueBean>();
	    	Connection conn = JDBCManager.getInstance();
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
	    	JDBCManager.close();
			return sensorInfo;
	    }
*/
	

	public UserBean getUser(int user_seq)
	{
		UserBean user = new UserBean();
		Connection conn = JDBCManager.getInstance();
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
		JDBCManager.close();
		return user;
	}

	

	public UserExtraBean getExtraUser(int user_seq)
	{
		UserExtraBean userExtra = null;
		Connection conn = JDBCManager.getInstance();
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
		JDBCManager.close();
		return userExtra;
	}
}
