# RappiChallenge
PRE REQUISITE:
- Any Java IDE (Eclipse, IntelliJ)
- Java and set Path
- Create an empty folder with the name (ChromeProfile) in D
- Add chrome to Path:
  - go to This PC and rigth click it
  - click on Properties
  - click on Advanced system settings
  - click on Environment Variables
  - and look for Path Variable in System Variables
  - click on Edit.. for that variable 
  - and copy the path of your Chrome eg. C:\Program Files (x86)\Google\Chrome\Application
  - click on Ok

After your have installed all the PRE Requisite:
- Windows + R and type cmd
- To run the next command we have to be inside C:\Program Files (x86)\Google\Chrome\Application
- So you can use this command: cd C:\Program Files (x86)\Google\Chrome\Application
- Now we can run this command on cmd ("Make sure the port your're setting is available"):
chrome.exe -remote-debugging-port=9898 --user-data-dir="D:\ChromeProfile"

How to Run:
- Open the Java IDE, and open the project
- Go to src/main/java/myRunner
- Open Runner.java file
- Right click inside the file 
- Run As > JUnit Test
