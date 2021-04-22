package pages;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.Hooks_steps;
import utility.Actions;
import utility.PropertiesReader;

public class CarnivalLanding_page extends Hooks_steps {

	Properties property;

	// ByPass Modal
	@FindBy(xpath = "//div[@class='vifp-sweeps-background']")
	public WebElement closeWelcomeModal;

	@FindBy(xpath = "//a[text()='Sign me up']")
	public WebElement SignmeUpLnk;

	// Header - Menu Options
	@FindBy(xpath = "//button[contains(text(),'Sign Up & Save')]")
	public WebElement signUpAndSaveBtn;

	@FindBy(xpath = "//li//a[text()='Create Account']")
	public WebElement createAccountLnk;

	@FindBy(xpath = "//li//a[text()='Login']")
	public WebElement loginLnk;

	@FindBy(xpath = "//button[text()='LOG IN!']")
	public WebElement logInBtn;

	@FindBy(xpath = "//li//a[text()='Logout']")
	public WebElement logoutLnk;

	@FindBy(xpath = "//li//span[text()='saved']")
	public WebElement savedLnk;

	// Create An Account Modal
	@FindBy(id = "username")
	public WebElement emailTxt;

	@FindBy(id = "password")
	public WebElement passwordTxt;

	@FindBy(xpath = "//button[text()='SIGN UP']")
	public WebElement signUpBtn;

	// Complete your Profile Modal
	@FindBy(id = "firstName-pm")
	public WebElement firstNameTxt;

	@FindBy(id = "lastName-pm")
	public WebElement lastNameTxt;

	@FindBy(id = "dobMonth-pm")
	public WebElement month;

	@FindBy(id = "dobDay-pm")
	public WebElement day;

	@FindBy(id = "dobYear-pm")
	public WebElement year;

	@FindBy(id = "gender-pm")
	public WebElement gender;

	@FindBy(id = "countryCode-pm")
	public WebElement country;

	@FindBy(id = "domesticPhoneNumber-pm")
	public WebElement phoneNumberTxt;

	@FindBy(id = "phoneAreaCode-pm")
	public WebElement cityAreaTxt;

	@FindBy(id = "phoneNumber-pm")
	public WebElement localNumberTxt;

	@FindBy(xpath = "//label[text()='I accept ']")
	public WebElement iAcceptTermsAndConditionsChbox;

	@FindBy(id = "submit-guest-pm")
	public WebElement submitBtn;

	// Modal Sign Up Succeed
	@FindBy(id = "lrh-heading")
	public WebElement messageh1;

	@FindBy(id = "ns-have-a-booking")
	public WebElement yesBtn;

	@FindBy(id = "ns-no-booking-yet")
	public WebElement notYetBtn;

	// Search Cruises
	@FindBy(id = "cdc-destinations")
	public WebElement sailToBtn;

	@FindBy(xpath = "//button[contains(text(),'Bahamas')]")
	public WebElement theBahamasBtn;

	@FindBy(id = "cdc-durations")
	public WebElement durationBtn;

	@FindBy(xpath = "//button[contains(text(),'6 - 9 Days')]")
	public WebElement sixToNineDaysBtn;

	@FindBy(xpath = "//li//span[text()='SEARCH ']")
	public WebElement searchCruisesBtn;

	public void searchBahamas() {
		sailToBtn.click();
		theBahamasBtn.click();
		durationBtn.click();
		sixToNineDaysBtn.click();
		searchCruisesBtn.click();
	}

	public void fillLogIn() throws IOException {
		Actions.waitBeforeAction(emailTxt);
		// emailTxt.sendKeys(randomEmail() + "@gmail.com");
		emailTxt.sendKeys("20042021225929@gmail.com");
		property = PropertiesReader.Reader();
		passwordTxt.sendKeys(property.getProperty("password"));
		logInBtn.click();

	}

	public void fillCreateAccount() throws IOException {
		Actions.waitBeforeAction(emailTxt);
		emailTxt.sendKeys(randomEmail() + "@gmail.com");
		property = PropertiesReader.Reader();
		passwordTxt.sendKeys(property.getProperty("password"));
		signUpBtn.click();
	}

	public void fillCompleteYourProfile() {
		Actions.waitBeforeAction(firstNameTxt);
		firstNameTxt.sendKeys("TestFirst");
		lastNameTxt.sendKeys("TestLast");
		Actions.selectWithValue(month, "4");
		day.sendKeys("29");
		year.sendKeys("1995");
		Actions.generalSelect(gender, "Male");
		Actions.generalSelect(country, "Peru");
		cityAreaTxt.sendKeys("01");
		localNumberTxt.sendKeys("986194484");
		Actions.JsClick(iAcceptTermsAndConditionsChbox);
		submitBtn.click();
	}

	public String randomEmail() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("ddMMyyyyHHmm");
		LocalDateTime now = LocalDateTime.now();
		return dtf.format(now);
	}

	public CarnivalLanding_page() {
		PageFactory.initElements(driver, this);

	}

}
