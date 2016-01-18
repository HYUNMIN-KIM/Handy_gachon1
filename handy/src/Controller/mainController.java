package Controller;

import Model.WeekDataModel;
import bean.UserWeekData;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/get")
public class mainController
  extends HttpServlet
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
    String userid = null;
    userid = request.getParameter("userid");
    if (userid != null)
    {
      UserWeekData[] data = WeekDataModel.getWeekData(userid);
      request.setAttribute("data", data);
      try
      {
        RequestDispatcher rd = request
          .getRequestDispatcher("/test.jsp");
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
