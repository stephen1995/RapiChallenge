package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepDefinitions.Hooks_steps;

public class Booking_page extends Hooks_steps {
	
	
	@FindBy(xpath = "//button[text()='Continue']")
	public WebElement continueBtn;
	
	@FindBy(xpath= "//a[text()='change']")
	public WebElement changeLnk;
	
	@FindBy(xpath= "//img[@alt='Add guest button']")
	public WebElement addMoreGuestsBtn;
	
	@FindBy(xpath= "//label[contains(text(),'Show rates')]")
	public WebElement showRatesLbl;
	
	@FindBy(xpath= "//button[contains(@aria-label,'Interior')]")
	public WebElement interiorRoomSelectBtn;
	
	@FindBy(xpath= "//button[contains(@aria-label,'Included')]")
	public WebElement incluideInPrinceSelectBtn;
	
	@FindBy(xpath = "//span[text()='Continue']/parent::button[@data-testid='powerUserFlowSelectButton']")
	public WebElement continueBookingContinueBtn;

	@FindBy(xpath = "//button[contains(@data-testid,'MoreOptions')]")
	public WebElement moreOptionsBtn;
	
	@FindBy(xpath= "//div[contains(@class,'button-container')]//button[contains(@aria-label,'April')]")
	public WebElement aprilSavingsSaleSelectBtn;
	
	@FindBy(id= "country-of-residency.0")
	public WebElement countryCbx;
	
	
	public void closeBrowser() {
		driver.close();
	}
	
	
	
	public Booking_page() {
		PageFactory.initElements(driver, this);
	}

}
