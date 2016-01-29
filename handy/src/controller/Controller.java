package controller;

import bean.UserSensingData;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.SensingDataGetter;
import dao.DaoGetInfo;

@WebServlet("/get")
public class Controller  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  
  
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    process(request, response);
  }
  
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    process(request, response);
  }
  
  
  
  
  
  private void process(HttpServletRequest request, HttpServletResponse response)
  {
	  //userId와 startDate로 일주간의 데이터를 받아옴
	String startDate = null;
    String userid = null;
    userid = request.getParameter("userid");
    
    if (userid != null)
    {
    	
    	if(request.getParameter("startDate") != null && !request.getParameter("startDate").equals(""))
    		startDate = request.getParameter("startDate");
    	
    	//데이터 가져오기
    	DaoGetInfo.Connection();
    		UserSensingData[] data = SensingDataGetter.getWeekData(userid, startDate);
    	DaoGetInfo.DisConnection();
    	request.setAttribute("data", data);
      
      try
      {
        RequestDispatcher rd = request.getRequestDispatcher("/index.jsp");
        rd.forward(request, response);
      }
      catch (Exception e)
      {
        e.printStackTrace();
      }
    
    }
    else
    {
      try
      {
        response.getWriter().print("USERID ERROR");
      }
      catch (IOException e)
      {
        e.printStackTrace();
      }
      
    }
    
    
  }
}
