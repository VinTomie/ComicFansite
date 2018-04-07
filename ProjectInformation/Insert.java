import java.sql;

public class Insert{
	
	public static void main (String[] args) {
        try {
            String url = "jdbc:msql://200.210.220.1:3306/Demo";
            Connection conn = DriverManager.getConnection(url,"","");
            Statement stmt = conn.createStatement();
            ResultSet rs;
 
            rs = stmt.executeQuery("SELECT Lname FROM Customers WHERE Snum = 2001");
            while ( rs.next() ) {
                String lastName = rs.getString("Lname");
                System.out.println(lastName);
            }
            conn.close();
        } catch (Exception e) {
            System.err.println("Got an exception! ");
            System.err.println(e.getMessage());
        }
    }
	
}