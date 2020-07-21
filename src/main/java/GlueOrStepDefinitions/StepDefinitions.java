package GlueOrStepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import BaseClass.BaseClass;
import Pages.AccountPage;
import Pages.CreateAnAccountPage;
import Pages.HomePage;
import Pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends BaseClass {

	public WebDriver driver;

	@Given("The user has navigated to Automation Practice page and click on login")
	public void the_user_has_navigated_to_Automation_Practice_page_and_click_on_login() {
		BaseClass.Setup("http://automationpractice.com/index.php");

		HomePage home = new HomePage();
		home.signInlnk.click();
	}

	@And("The user enters an email and submit")
	public void the_user_enters_an_email_and_submit() {
		SignInPage signIn = new SignInPage();
		signIn.CreateAnAccount();
	}

	@When("he fills all necessary data and submit")
	public void he_fills_all_necessary_data_and_submit() {
		CreateAnAccountPage create = new CreateAnAccountPage();
		create.fillForm();
	}


	@Then("The user has successfully created an account")
	public void the_user_has_successfully_created_an_account() {
		
		AccountPage page = new AccountPage();

		Assert.assertTrue(page.signOut.isDisplayed());
	
		Assert.assertTrue(page.PageContains("?controller=my-account"));
		
		page.signOut.click();
					
		BaseClass.TearDown();
	}

}
