package stepDefinitions;
import cucumber.api.java.en.Then;
import pages.Itinerary_page;
import utility.Actions;

public class Itinerary_steps {

	Itinerary_page page = new Itinerary_page();
	
	@Then("hace click en guardar")
	public void hace_click_en_guardar() {
		Actions.waitBeforeAction(page.saveBtn);
		page.saveBtn.click();
	}
}
