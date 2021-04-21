package utility;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class PropertiesReader {
	
	
	public static Properties Reader() throws IOException  {
		
		Properties prop	=	new Properties();		
		FileReader reader= new FileReader("D:\\Selenium Project\\Projects\\CixInmoHogaremi\\info.properties");	
		prop.load(reader);
		
		return prop;
	}

}
