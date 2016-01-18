package bean;

import java.util.ArrayList;
import java.util.List;

public class UserWeekData
{
  private String date;
  private List<SensorValueBean> valueList;
  
  public UserWeekData()
  {
    this.valueList = new ArrayList();
  }
  
  public String getDate()
  {
    return this.date;
  }
  
  public void setDate(String date)
  {
    this.date = date;
  }
  
  public List<SensorValueBean> getValueList()
  {
    return this.valueList;
  }
  
  public void setValueList(List<SensorValueBean> valueList)
  {
    this.valueList = valueList;
  }
}
