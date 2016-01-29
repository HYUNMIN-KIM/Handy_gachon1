package rest;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import util.ActivityFormat;
import util.HeartChangeDeductFormat;
import util.HeartTemperatureFormat;
import util.RhythmFormat;
import util.SyncTempChangeDeductFormat;


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
			int grade=0;
			//ajax를 통해서 받아온 contents와 point를 처리
			if(content.equalsIgnoreCase("ConditionDetail_"))
				grade = (int)point;
			else if(content.equalsIgnoreCase("Temperature_"))
				grade = HeartTemperatureFormat.format(point);
			else if(content.equalsIgnoreCase("TemperatureChange_"))
				grade = SyncTempChangeDeductFormat.format(point);
			else if(content.equalsIgnoreCase("TemperatureRhythm_"))
				grade = RhythmFormat.format(point);
			else if(content.equalsIgnoreCase("HeartRate_"))
				grade = HeartTemperatureFormat.format(point);
			else if(content.equalsIgnoreCase("HeartRateChange_"))
				grade = HeartChangeDeductFormat.format(point);
			else if(content.equalsIgnoreCase("HeartRateRhythm_"))
				grade = RhythmFormat.format(point);
			else if(content.equalsIgnoreCase("Synchronization_"))
				grade = SyncTempChangeDeductFormat.format(point);
			else if(content.equalsIgnoreCase("Activity_"))
				grade = ActivityFormat.format(point);

			response.setContentType("text/plain");
				
				out.println(Data(content,grade));
			
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
	public String Data(String sub, int grade)
	{

		String anal = "";
		Document doc = null;
		try {
			doc = Jsoup.connect("http://123.212.190.35/tiki-index_raw.php?page="+sub+grade+"&full&format=jqs5").timeout(0).get();
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
    
}