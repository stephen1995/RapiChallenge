package stepDefinitions;

import cucumber.api.java.en.Given;
import pages.Saved_page;
import utility.Actions;

public class Saved_steps {

	Saved_page page = new Saved_page();

	@Given("selecciona el itinerario guardado y es redirigido a la pagina {string}")
	public void selecciona_el_itinerario_guardado_y_es_redirigido_a_la_pagina(String string) {
		Actions.waitBeforeAction(page.BahamasLbl);
		page.BahamasLbl.click();
	}

}
