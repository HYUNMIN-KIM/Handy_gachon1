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
		String userid;
		 userid = request.getParameter("userid");
		 //userid= "hsp201509161@handysoft.co.kr";
		//String dataContents = null;
		//dataContents = request.getParameter("analysis");
		 PrintWriter out = response.getWriter();

		if(userid != null)
		{
			UserWeekData[] data = WeekDataGetter.getWeekData(userid);
			float[] point = {1,1,1,1,1,1,1,1,1};
			int date =1 ;
			List contents = new ArrayList();
			point[0] = data[date].getConditionCalc().getConditionPoint();
					//getConditionCalc().getTempPoint(); 
			point[1] = data[date].getConditionCalc().getConditionPoint();
			point[2] = data[date].getConditionCalc().getTempChangeDeductPoint();
			point[3] = data[date].getConditionCalc().getTempRhythmPoint();
			point[4] = data[date].getConditionCalc().getHrPoint();
			point[5] = data[date].getConditionCalc().getHrChangeDeductPoint();
			point[6] = data[date].getConditionCalc().getHrRhythmPoint();
			point[7] = data[date].getConditionCalc().getSynchroDeductPoint();
			point[8] = data[date].getConditionCalc().getActivityPoint();
			for(int i=0;i<9;i++)
				out.println("point : " + point[i]);
			
			String name[] = {"ConditionDetail_","Temperature_","TemperatureChange_","TemperatureRhythm_","Heart-lung"
					,"HeartRateChange_","HeartRateRhythm_","Synchronization_","Activity_"};
		
			
			contents.add(Data(name[0],Condition_point(point[0])));
			
			contents.add(Data(name[1],Temp_Hr_point(point[1])));
			contents.add(Data(name[2],Sync_TempChange_point(point[2])));
			contents.add(Data(name[3],Rhythm_point(point[3])));
			contents.add(Data(name[4],Temp_Hr_point(point[4])));
			contents.add(Data(name[5],HrChange_point(point[5])));
			contents.add(Data(name[6],Rhythm_point(point[6])));
			contents.add(Data(name[7],Sync_TempChange_point(point[7])));
			contents.add(Data(name[8],Activity_point(point[8])));
			System.out.println(contents.size());
			
			
			request.setAttribute("data", contents);
			try
			{
				RequestDispatcher rd = request.getRequestDispatcher("/abc.jsp");
				rd.forward(request,response);
				
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		else
		{
			  try
		      {
		        response.getWriter().print("contents ERROR");
		      }
		      catch (IOException e)
		      {
		        e.printStackTrace();
		      }
		    }
			
		}
		
	//	String name[] = {"ConditionDetail_","Temperature_","TemperatureChange_","TemperatureRhythm_","Heart-lung"
	//		,"HeartRateChange_","HeartRateRhythm_","Synchronization_","Activity_"};

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);



	}
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
	
	public int Condition_point(float con_p)
	{
		int num=0;
		
		if(con_p>=90)
			num=1;
		else if(con_p<90 && con_p>=80)
			num=2;
		else if(con_p<80 && con_p>=70)
			num=3;
		else if(con_p<70 && con_p>=60)
			num=4;
		else if(con_p<60 && con_p>=50)
			num=5;
		else if(con_p<50 && con_p>=40)
			num=6;
		else if(con_p<40 && con_p>=30)
			num=7;
		else if(con_p<30 && con_p>=20)
			num=8;
		else if(con_p<20 && con_p>=10)
			num=9;
		else if(con_p<10)
			num=10;

		return num;

	}
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
	public int Rhythm_point(float point)
	{
		int num=0;

		if(point>0)
			num=2;
		else
			num=1;
		return num;
	}
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
	/*
	public float[] getPoint(int date)
	{
		float point[] = {0,};
		
		DaoGetInfo db = new DaoGetInfo();
		String userid = db.getUser_Id();

		
		point[0] = data[date].getConditionCalc().getTempPoint(); 
		point[1] = data[date].getConditionCalc().getConditionPoint();
		point[2] = data[date].getConditionCalc().getTempChangeDeductPoint();
		point[3] = data[date].getConditionCalc().getTempRhythmPoint();
		point[4] = data[date].getConditionCalc().getHrPoint();
		point[5] = data[date].getConditionCalc().getHrChangeDeductPoint();
		point[6] = data[date].getConditionCalc().getHrRhythmPoint();
		point[7] = data[date].getConditionCalc().getSynchroDeductPoint();
		point[8] = data[date].getConditionCalc().getActivityPoint();
		
		return point;
		
	}
*/
}
