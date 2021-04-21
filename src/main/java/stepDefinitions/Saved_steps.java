package stepDefinitions;

import cucumber.api.java.en.Given;
import pages.Saved_page;
import utility.Actions;

public class Saved_steps {
	
	Saved_page page = new Saved_page();
	
	@Given("selecciona el itinerario guardado")
	public void selecciona_el_itinerario_guardado() {
		Actions.waitBeforeAction(page.BahamasLbl);
		page.BahamasLbl.click();
	}

}
