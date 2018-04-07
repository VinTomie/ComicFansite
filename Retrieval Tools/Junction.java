import java.sql.*;
import java.net.*;
import java.io.*;
import org.json.simple.JSONObject;

public class Junction{
	
	static String dbName = "comicdb.cc24nnrynf7v.us-east-2.rds.amazonaws.com";
	static String username = "comic";
	static String pass = "Comic";
	static String requestURL = "https://gateway.marvel.com:443/v1/public/";
	static String pubKey = "9c196989b2085c5747b0f8742cc479d2";
	static String privKey = "4aa64352a182f42fde56ef36a87a0c378d8abb4b";

	static String[] set = {"comics", "series", "characters", "creators"};
	
	public static void main(String args[]){
		
		
		
			URL newResult = getInfo("1009146", 2, 0);
			BufferedReader in = new BufferedReader(
			new InputStreamReader(newResult.openStream()));
			
		
		
			
		
		
	}	
	
	public static URL getInfo(String target, int sup, int sub) throws Exception{
		
		try{
			URL result = new URL(requestURL + set[sup]
									+ "/" + target
									+ "/" + set[sub]
									+ "?apikey="
									+ pubKey);
			return result;
		}catch(Exception e){
			System.out.println("Failed to retrieve URL");
		}
		
		
	}
	
}