package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BaseClass.BaseClass;

public class AccountPage extends BaseClass {

	@FindBy(xpath = "//a[@class='logout']")
	public WebElement signOut;
		

	public AccountPage() {
		PageFactory.initElements(driver, this);
	}
	
	public boolean PageContains (String word) {
		driver.getCurrentUrl().contains(word);		
		return true;
	}


}
