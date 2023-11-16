import java.io.FileNotFoundException;
import java.util.HashMap;

public class EmailAndPasswords {
	DataBaseProfile db = new DataBaseProfile();
	

	HashMap<String, String> login = new HashMap<String, String>();

	EmailAndPasswords() {
		db.getEmailAndPass();
		int val = 0;

		while(db.key.size() > val) {	
		login.put(db.emails.get(val), db.key.get(val));
		
		// Scanner scan = new Scanner();
		// System.out.println("Enter your E-mail");
		// System.out.println("Enter your password");
		val++;
		}
	}
	public HashMap getLoginInfo() {
		return login;
		
	}

	
}
