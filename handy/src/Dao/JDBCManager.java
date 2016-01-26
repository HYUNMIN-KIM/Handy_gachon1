package Dao;


import java.sql.*;

public class JDBCManager {

	private static String DB_URL = "jdbc:oracle:thin:@123.212.190.37:1521:DB11G";
	private static String DB_USER = "sihms";
	private static String DB_PASSWORD = "sihms";

	private static Connection conn = null;

	private JDBCManager()
	{}

	public static Connection getInstance() {



		if(conn == null) {
			try {
				// 드라이버를 로딩
				Class.forName("oracle.jdbc.driver.OracleDriver");
			} catch (ClassNotFoundException e ) {
				e.printStackTrace();
			}

			try {
				// DB 연결 설정
				conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
			} catch ( Exception e ) {
				e.printStackTrace();
			} 
		}
		return conn;
	}
	//DB close()
	public static void close(){

		if(conn==null)
			return;
		try{
			if(!conn.isClosed())
				conn.close();
		}catch(Exception e){

		}
		conn=null;
	}
}
