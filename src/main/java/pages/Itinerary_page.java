package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepDefinitions.Hooks_steps;

public class Itinerary_page extends Hooks_steps {

	@FindBy(xpath = "//span[text()='Save']")
	public WebElement saveBtn;

	@FindBy(id = "sm-logo")
	public WebElement logoImg;
	
	@FindBy(xpath = "//span[text()='Review Trip']")
	public WebElement reviewTripBtn;
	
	

	public Itinerary_page() {
		PageFactory.initElements(driver, this);
	}

}
