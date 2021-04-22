package stepDefinitions;

import java.io.IOException;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import utility.PropertiesReader;

public class Hooks_steps {

	public static WebDriver driver;
	public Properties property;

	// HOOKS GLOBALES
	@Parameters
	@Before
	public void Setup() throws IOException {
		property = PropertiesReader.Reader();

		switch (property.getProperty("browser")) {
		case ("chrome"): {
			WebDriverManager.chromedriver().setup();
			DesiredCapabilities cap = new DesiredCapabilities();
			cap.setBrowserName(BrowserType.CHROME);

			driver = new RemoteWebDriver(new URL("http://192.168.99.100:4545/wd/hub"), cap);
		}
		case ("firefox"): {
			WebDriverManager.firefoxdriver().setup();
			DesiredCapabilities cap = new DesiredCapabilities();
			cap.setBrowserName(BrowserType.FIREFOX);

			driver = new RemoteWebDriver(new URL("http://192.168.99.100:4545/wd/hub"), cap);
		}
		default: {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}
		}

		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();

		driver.get(property.getProperty("home"));

	}

	@After
	public void TearDown() throws InterruptedException {

		driver.close();

	}

	// HOOKS for spefic scenario

}
