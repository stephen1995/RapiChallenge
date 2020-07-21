package Pages;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import BaseClass.BaseClass;

public class SignInPage extends BaseClass {

	@FindBy(id = "email")
	public WebElement emailSignIntxt;

	@FindBy(id = "password")
	public WebElement passwordtxt;
	
	@FindBy(id = "SubmitLogin")
	public WebElement signInSubmitbtn;
	
	@FindBy(id = "email_create")
	public WebElement emailCreatetxt;
	
	@FindBy(id = "SubmitCreate")
	public WebElement createAnAccountbtn;

	public SignInPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void PerformSignIn(String email, String password) {
		WebDriverWait wait = new WebDriverWait(driver, 20);				
		wait.until(ExpectedConditions.visibilityOf(emailSignIntxt));
		
		emailSignIntxt.sendKeys(email);
		passwordtxt.sendKeys(password);
		signInSubmitbtn.click();
	}
	
	public void CreateAnAccount() {
		WebDriverWait wait = new WebDriverWait(driver, 20);				
		wait.until(ExpectedConditions.visibilityOf(emailSignIntxt));
		
		emailCreatetxt.sendKeys(randomEmail()+"@gmail.com");
		createAnAccountbtn.click();
	}
	
	public String randomEmail() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("ddMMyyyyHHmmss");  
		   LocalDateTime now = LocalDateTime.now();  
		   return dtf.format(now);
	}
	
	

}
