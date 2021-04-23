package stepDefinitions;

import cucumber.api.java.en.*;
import pages.Booking_page;
import utility.Actions;

public class Booking_steps {

	Booking_page page = new Booking_page();
	
	@Given("hace click en continuar")
	public void hace_click_en_continuar() {
		Actions.waitBeforeAction(page.continueBtn);
		Actions.JsClick(page.continueBtn);
	}
	
	@When("hace click en el link Change para modificar la cantidad de asientos")
	public void hace_click_en_el_link_Change_para_modificar_la_cantidad_de_asientos() {
		Actions.waitBeforeAction(page.changeLnk);
		Actions.JsClick(page.changeLnk);
		
	}

	@When("aumenta a cuatro el numero de huespedes")
	public void aumenta_a_cuatro_el_numero_de_huespedes() {
		Actions.waitBeforeAction(page.addMoreGuestsBtn);
		page.addMoreGuestsBtn.click();
		Actions.waitBeforeAction(page.addMoreGuestsBtn);
		page.addMoreGuestsBtn.click();
		
	}
	@When("selecciona la opcion, Mostrar tarifas para VIFP Club")
	public void selecciona_la_opcion_Mostrar_tarifas_para_VIFP_Club() {
		Actions.waitBeforeAction(page.showRatesLbl);
		page.showRatesLbl.click();
	}
	@When("selecciona la habitacion mas barata")
	public void selecciona_la_habitacion_mas_barata() {
		Actions.waitBeforeAction(page.interiorRoomSelectBtn);
		Actions.JsClick(page.interiorRoomSelectBtn);

	}
	
	@When("selecciona Mexico como su pais de residencia")
	public void selecciona_Mexico_como_su_pais_de_residencia() {
		Actions.waitBeforeAction(page.countryCbx);
		Actions.generalSelect(page.countryCbx, "Mexico");
		
		
	}
	@When("selecciona el interior incluido en el precio")
	public void selecciona_el_interior_incluido_en_el_precio() {
		Actions.waitBeforeAction(page.incluideInPrinceSelectBtn);
		Actions.JsClick(page.incluideInPrinceSelectBtn);

	}
	@When("selecciona continuar para la opcion Let me choose my room")
	public void selecciona_continuar_para_la_opcion_Let_me_choose_my_room() {
		Actions.waitBeforeAction(page.continueBookingContinueBtn);
		Actions.JsClick(page.continueBookingContinueBtn);
	}
	@When("hace click en mas opciones")
	public void hace_click_en_mas_opciones() {
		Actions.waitBeforeAction(page.moreOptionsBtn);
		Actions.JsClick(page.moreOptionsBtn);
		
	}
	@When("selecciona la opcion April Savings Sale")
	public void selecciona_la_opcion_April_Savings_Sale() {
		Actions.waitBeforeAction(page.aprilSavingsSaleSelectBtn);
		Actions.JsClick(page.aprilSavingsSaleSelectBtn);
	
	}
	@When("selecciona su cuarto")
	public void selecciona_su_cuarto() {

	}
	@Then("hace click en continuar en booking y es llevado a la pagina de {string}")
	public void hace_click_en_continuar_en_booking_y_es_llevado_a_la_pagina_de(String string) {
		Actions.waitBeforeAction(page.continueBtn);
		Actions.JsClick(page.continueBtn);
		page.closeBrowser();
	}
	
}
