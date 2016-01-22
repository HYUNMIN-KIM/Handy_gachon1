package util;

import java.text.NumberFormat;

public class FloatFormat {

	
	public static String format(double s){
		NumberFormat nf = NumberFormat.getInstance();
		nf.setMinimumFractionDigits(2);
		nf.setMaximumFractionDigits(2);
		return nf.format(s);
	}
}