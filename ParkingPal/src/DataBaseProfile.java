import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class DataBaseProfile {
	CreateProfile profile = new CreateProfile();
	ArrayList<String> emails = new ArrayList<String>();
	ArrayList<String> key = new ArrayList<String>();

	public void addToDatabase() {
		profile.signUp();
		try {
			// FileWriter writer = new FileWriter("ProfileDB.txt");
			File f1 = new File("ProfileDB.txt");
			if (!f1.exists()) {
				f1.createNewFile();
			}

			FileWriter fileWritter = new FileWriter(f1.getName(), true);
			BufferedWriter bw = new BufferedWriter(fileWritter);

			bw.write("\n" + profile.getEmail());
			bw.write("\n" + profile.getName());
			bw.write("\n" + profile.getCar());
			bw.write("\n" + '~' + profile.getPassword());
			bw.write("\n" + profile.calcUserID());

			bw.close();

			System.out.println("Your Profile has been created");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void modifyDataBase() {

	}

	public void getDataBaseInfo() throws FileNotFoundException {

		File file = new File("ProfileDB.txt");

		try {
			Scanner scan = new Scanner(file);

			while (scan.hasNextLine()) {
				if (scan.nextLine() == profile.getEmail())
					
				System.out.println(profile.getEmail());

			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void printDataBase() {
		File file = new File("ProfileDB.txt");

		try {
			BufferedReader br = new BufferedReader(new FileReader(file));

			String lastLine;
			String currentLine;

			while ((currentLine = br.readLine()) != null) {

				System.out.println(currentLine);
			}

			// System.out.println(currentLine);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	public  void getEmailAndPass() {
		File file = new File("ProfileDB.txt");
		String currentLine;
		String user;
		String pass;
		
		

		try {
			BufferedReader br = new BufferedReader(new FileReader(file));

			while ((currentLine = br.readLine()) != null) {

				if (currentLine.indexOf('@') != -1) {

					emails.add(currentLine);
				}
			}
			BufferedReader br2 = new BufferedReader(new FileReader(file));
			while ((currentLine = br2.readLine()) != null) {

				if (currentLine.indexOf('~') != -1) {

					key.add(currentLine);
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	//	System.out.println(emails);
		//System.out.println(key);

	}

}
