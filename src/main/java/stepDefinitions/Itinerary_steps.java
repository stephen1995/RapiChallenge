package stepDefinitions;


import cucumber.api.java.en.*;
import pages.Itinerary_page;
import utility.Actions;

public class Itinerary_steps {

	Itinerary_page page = new Itinerary_page();

	@Then("hace click en guardar")
	public void hace_click_en_guardar() {
		Actions.waitBeforeAction(page.saveBtn);
		page.saveBtn.click();
	}

	@Then("hace click en la imagen de Carnival")
	public void hace_click_en_la_imagen_de_Carnival() {
		page.logoImg.click();
	}
	@Given("el usuario hace click en Review Trip y es redirigido a la pagina {string}")
	public void el_usuario_hace_click_en_Review_Trip_y_es_redirigido_a_la_pagina(String string) {

		page.reviewTripBtn.click();
	}

}
