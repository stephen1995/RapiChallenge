package pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import stepDefinitions.Hooks_steps;

public class CruiseSearch_page extends Hooks_steps {

	// ByPass Modal
	@FindBy(xpath = "//span[contains(text(),'from Baltimore')][1]")
	public WebElement firstResultForBahamas;



	public CruiseSearch_page() {
		PageFactory.initElements(driver, this);

	}

}
