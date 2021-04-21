package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import BaseClass.BaseClass;

public class CreateAnAccountPage extends BaseClass {

	@FindBy(id = "id_gender1")
	public WebElement Mrrbtn;

	@FindBy(id = "customer_firstname")
	public WebElement firstNametxt;
	
	@FindBy(id = "customer_lastname")
	public WebElement lastNametxt;
	
	@FindBy(id = "email")
	public WebElement emailtxt;
	
	@FindBy(id = "passwd")
	public WebElement passwordtxt;
	
	@FindBy(id = "days")
	public WebElement dayscbx;
	
	@FindBy(id = "months")
	public WebElement monthcbx;
	
	@FindBy(id = "years")
	public WebElement yearcbx;
	
	@FindBy(id = "newsletter")
	public WebElement signUpForOurNewslettercbx;	
	
	@FindBy(id = "firstname")
	public WebElement addressFirstNametxt;
	
	@FindBy(id = "lastname")
	public WebElement addressLastNametxt;
	
	@FindBy(id = "company")
	public WebElement companytxt;
	
	@FindBy(id = "address1")
	public WebElement addressLine1txt;
	
	@FindBy(id = "city")
	public WebElement citytxt;
	
	@FindBy(id = "id_state")
	public WebElement statecbx;
	
	@FindBy(id = "postcode")
	public WebElement zipPostalCodetxt;
	
	@FindBy(id = "id_country")
	public WebElement countrytxt;
	
	@FindBy(id = "phone_mobile")
	public WebElement mobilePhonetxt;
	
	@FindBy(id = "alias")
	public WebElement aliasAddresstxt;
	
	@FindBy(id = "submitAccount")
	public WebElement Registerbtn;
	
	public CreateAnAccountPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void selectDate(WebElement element,String value) {
		Select select = new Select(element);
				select.selectByValue(value);
	}
	public void generalSelect(WebElement element,String value) {
		Select select = new Select(element);
				select.selectByVisibleText(value);
	}
	
	public void fillForm() {
		WebDriverWait wait = new WebDriverWait(driver, 20);				
		wait.until(ExpectedConditions.visibilityOf(firstNametxt));
		
		Mrrbtn.click();
		firstNametxt.sendKeys("First");
		lastNametxt.sendKeys("Last");
		passwordtxt.sendKeys("Password123");
		selectDate(dayscbx, "19");		
		selectDate(monthcbx, "4");
		selectDate(yearcbx, "1995");		
		signUpForOurNewslettercbx.click();
		
		addressFirstNametxt.sendKeys("AddresFirst");
		addressLastNametxt.sendKeys("AddresFirst");
		companytxt.sendKeys("Company");
		addressLine1txt.sendKeys("Address");
		citytxt.sendKeys("City");
		generalSelect(statecbx, "Alabama");
		zipPostalCodetxt.sendKeys("35004");
		mobilePhonetxt.sendKeys("986194484");
		Registerbtn.click();
		
	}

}
