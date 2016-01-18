package Dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

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
		UserExtraBean userExtra = new UserExtraBean();

		try{
			String query = "select GENDER,HEIGHT,WEIGHT FROM GB_USER_EXTRA_INFO WHERE REG_USER_SEQ = ?";

			pstmt = conn.prepareStatement(query);
			pstmt.setInt(1, user_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				userExtra = new UserExtraBean(rs.getString("GENDER"),rs.getDouble("HEIGHT"),rs.getDouble("WEIGHT"));
			}
		}catch(SQLException e){
			System.out.println(e.getMessage());
			

		}
		return userExtra;
	}
}
