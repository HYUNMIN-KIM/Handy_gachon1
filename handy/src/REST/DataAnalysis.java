package REST;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import Dao.DaoGetInfo;
import Model.WeekDataGetter;
import bean.UserWeekData;

/**
 * Servlet implementation class DataAnalysis
 */
@WebServlet("/DataAnalysis")
public class DataAnalysis extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DataAnalysis() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();

		try
		{
			
			String content = request.getParameter("content");
			float point = Float.parseFloat(request.getParameter("point"));
			int num=0;
			//ajax를 통해서 받아온 contents와 point를 처리
			if(content.equalsIgnoreCase("ConditionDetail_"))
				num = Condition_point(point);
			else if(content.equalsIgnoreCase("Temperature_"))
				num = Temp_Hr_point(point);
			else if(content.equalsIgnoreCase("TemperatureChange_"))
				num = Sync_TempChange_point(point);
			else if(content.equalsIgnoreCase("TemperatureRhythm_"))
				num = Rhythm_point(point);
			else if(content.equalsIgnoreCase("HeartRate_"))
				num = Temp_Hr_point(point);
			else if(content.equalsIgnoreCase("HeartRateChange_"))
				num = HrChange_point(point);
			else if(content.equalsIgnoreCase("HeartRateRhythm_"))
				num = Rhythm_point(point);
			else if(content.equalsIgnoreCase("Synchronization_"))
				num = Sync_TempChange_point(point);
			else if(content.equalsIgnoreCase("Activity_"))
				num = Activity_point(point);

			response.setContentType("text/plain");
				
				out.println(Data(content,num));
			
		}catch(Exception e){
			e.printStackTrace();
		}


	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);



	}
	//위키피디아 parsing
	public String Data(String sub, int num)
	{

		String anal = "";
		Document doc = null;
		try {
			doc = Jsoup.connect("http://123.212.190.35/tiki-index_raw.php?page="+sub+num+"&full&format=jqs5").timeout(0).get();
		} catch (IOException e) {
			System.out.println("error");
		}
		Elements contents = doc.select("div.wikitext");

		for(Element c: contents) {
			String text = c.text(); // 원하는 부분은 Elements형태로 되어 있으므로 이를 String 형태로
			//System.out.println(text);
			anal+=text;

		}

		return anal;
	}
    //컨디션 점수 등급
	public int Condition_point(float con_p)
	{
		int num=1;

		if(con_p>=90)
			num=10;
		else if(con_p<90 && con_p>=80)
			num=9;
		else if(con_p<80 && con_p>=70)
			num=8;
		else if(con_p<70 && con_p>=60)
			num=7;
		else if(con_p<60 && con_p>=50)
			num=6;
		else if(con_p<50 && con_p>=40)
			num=5;
		else if(con_p<40 && con_p>=30)
			num=4;
		else if(con_p<30 && con_p>=20)
			num=3;
		else if(con_p<20 && con_p>=10)
			num=2;
		else if(con_p<10)
			num=1;

		return num;

	}
	//온도와 맥박 점수
	public int Temp_Hr_point(float point)
	{
		int num=0;
		if(point>=90)
			num=1;
		else if(point<90 && point>=80)
			num=2;
		else if(point<80 && point>=70)
			num=3;
		else if(point<70)
			num=4;

		return num;
	}
	//싱크로와 온도 변화 점수 등급
	public int Sync_TempChange_point(float point)
	{
		int num=0;

		if(point>=15)
			num=1;
		else if(point<15 && point>=10)
			num=2;
		else if(point<10 && point>=5)
			num=3;
		else if(point<5)
			num=4;

		return num;
	}
	//맥박변동 점수 등급
	public int HrChange_point(float point)
	{
		int num=0;

		if(point>=20)
			num=1;
		else if(point<20 && point>=15)
			num=2;
		else if(point<15 && point>=10)
			num=3;
		else if(point<10)
			num=4;

		return num;
	}
	//리듬 점수 등급
	public int Rhythm_point(float point)
	{
		int num=0;

		if(point>0)
			num=2;
		else
			num=1;
		return num;
	}
	//운동량 점수 등급
	public int Activity_point(float point)
	{
		int num=0;
		if(point>=100)
			num=1;
		else if(point<100 && point>=80)
			num=2;
		else if(point<80 && point>=60)
			num=3;
		else if(point<60)
			num=4;

		return num;
	}
	
}
