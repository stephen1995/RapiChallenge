package stepDefinitions;

import cucumber.api.java.en.When;
import pages.CruiseSearch_page;
import utility.Actions;

public class CruiseSearch_steps {

	CruiseSearch_page page = new CruiseSearch_page();

	@When("el usuario selecciona la primera opcion y es redirigido a {string}")
	public void el_usuario_selecciona_la_primera_opcion_y_es_redirigido_a(String string) {
		Actions.waitBeforeAction(page.firstResultForBahamas);
		page.firstResultForBahamas.click();

	}

}
