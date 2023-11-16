import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class CreateProfile {
	String name;
	String car;
	int give;
	int take;
	String email;
	int userID;
	String password;

	CreateProfile() {

	}

	CreateProfile(String name, String car, String email, int userID, String password) {
		this.name = name;
		this.car = car;
		this.email = email;
		this.userID = userID;
		this.password = password;
	}

	public void signUp() {

		Scanner scan = new Scanner(System.in);
		System.out.println("Please fill out information");
		System.out.println("Please enter your name");
		setName(scan.nextLine());
		System.out.println("Please the make of your vehicle");
		setCar(scan.nextLine());
		System.out.println("Please enter your email");
		setEmail(scan.nextLine());
		System.out.println("Please enter a password");
		setPassword(scan.nextLine());

		System.out.println("Your user ID is: " + calcUserID());

	}

	public void setName(String name) {
		this.name = name;

	}

	public void setCar(String car) {
		this.car = car;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getName() {
		return name;
	}

	public String getCar() {
		return car;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public int getUserID() {
		return userID;
	}

	public int calcUserID() {
		File file = new File("ProfileDB.txt");
		int ID = 0;
		String lastLine = "";
		String currentLine;

		try {
			BufferedReader br = new BufferedReader(new FileReader(file));

			while ((currentLine = br.readLine()) != null) {
				lastLine = currentLine;
				// System.out.println(currentLine);
			}
			ID = Integer.parseInt(lastLine);
			// System.out.println(currentLine);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ID + 1;
	}

}