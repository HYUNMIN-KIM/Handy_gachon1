package REST;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

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
		String name[] = {"ConditionDetail_","Temperature_","TemperatureChange_","TemperatureRhythm_","Heart-lung"
				,"HeartRateChange_","HeartRateRhythm_","Synchronization_","Activity_"};
		
		//out.println(Data(name[8],1));
		out.println(Data("ConditionDetail_",10));
		//out.println(PrintAnalysisData(1,1,1,1,1,1,1,1,1).get(i));
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
		

	}
	/*
	public String PrintAnalysisData(String s,int point)
	{
		String str ="";
		
		str = Data(s,point);
		
		return str;
	}
	*/
	/*
	public ArrayList PrintAnalysisData(int condition, int temp, int tempChange, int tempRhythm, int heartStable,
			int heartChange, int heartRhythm, int sync, int exer )
	{
		
		ArrayList userContents = new ArrayList();
		String name[] = {"ConditionDetail_","Temperature_","TemperatureChange_","TemperatureRhythm_","Heart-lung"
				,"HeartRateChange_","HeartRateRhythm_","Synchronization_","Activity_"};
		
		userContents.add(Data(name[0],condition));
		userContents.add(Data(name[1],temp));
		userContents.add(Data(name[2],tempChange));
		userContents.add(Data(name[3],tempRhythm));
		userContents.add(Data(name[4],heartStable));
		userContents.add(Data(name[5],heartChange));
		userContents.add(Data(name[6],heartRhythm));
		userContents.add(Data(name[7],sync));
		userContents.add(Data(name[8],exer));
		
		return userContents;
	}
		*/
	public String Data(String sub, int num)
	{

		String content = null;
		Document doc = null;
		try {
			doc = Jsoup.connect("http://123.212.190.35/tiki-index_raw.php?page="+sub+num+"&full&format=jqs5").timeout(0).get();
		} catch (IOException e) {
			System.out.println("error");
		}
		Elements contents = doc.select("div.wikitext");
	
		for(Element c: contents) {
			String text = c.text(); // 원하는 부분은 Elements형태로 되어 있으므로 이를 String 형태로
			System.out.println(text);
			content=text;

		}
		
		return content;
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
	
}
