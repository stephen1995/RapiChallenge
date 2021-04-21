package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepDefinitions.Hooks_steps;

public class Saved_page extends Hooks_steps {
	
	
	@FindBy(xpath = "//p[text()='6 day The Bahamas']")
	public WebElement BahamasLbl;
	
	

	public Saved_page() {
		PageFactory.initElements(driver, this);
	}
}
