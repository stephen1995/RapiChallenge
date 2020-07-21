package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BaseClass.BaseClass;

public class HomePage extends BaseClass {

	@FindBy(xpath = "//a[@class='login']")
	public WebElement signInlnk;

	public HomePage() {
		PageFactory.initElements(driver, this);

	}

}
