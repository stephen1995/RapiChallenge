package stepDefinitions;

import static org.hamcrest.CoreMatchers.containsString;
import java.io.IOException;
import org.junit.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CarnivalLanding_page;
import pages.CruiseSearch_page;
import utility.Actions;

public class LandingCarnival_steps {

	CarnivalLanding_page home = new CarnivalLanding_page();
	CruiseSearch_page page = new CruiseSearch_page();

	@Given("el usuario visita el landing de Carnival")
	public void el_usuario_visita_el_landing_de_Carnival() {
	}

	@Given("hace click en Create Account")
	public void hace_click_en_Create_Account() {
		Actions.JsClick(home.closeWelcomeModal);
		home.createAccountLnk.click();

	}

	@Given("se loguea con sus crendenciales")
	public void se_loguea_con_sus_crendenciales() throws IOException {
		Actions.JsClick(home.closeWelcomeModal);
		home.loginLnk.click();
		home.fillLogIn();

	}

	@Given("ingresa su Correo, Contraseña y da click en SignUp")
	public void ingresa_su_Correo_Contraseña_y_da_click_en_SignUp() throws IOException {
		home.fillCreateAccount();

	}

	@Given("ingresa la informacion del modal Complete Your Profile")
	public void ingresa_la_informacion_del_modal_Complete_Your_Profile() {
		home.fillCompleteYourProfile();
	}

	@Then("el usuario puede observar un modal con las palabras {string}")
	public void el_usuario_puede_observar_un_modal_con_las_palabras(String string) {
		Actions.waitBeforeAction(home.notYetBtn);
		Assert.assertEquals(home.messageh1.getText(), string);
		home.notYetBtn.click();
		Actions.waitBeforeAction(home.logoutLnk);
	}

	@Given("hace click en Sail To y selecciona Bahamas")
	public void hace_click_en_Sail_To_y_selecciona_Bahamas() {
		home.searchBahamas();

	}

	@Given("hace click en Duration y seleciona de seis a nueve dias")
	public void hace_click_en_Duration_y_seleciona_de_seis_a_nueve_dias() {

	}

	@When("hace click en Search Cruises y es redirigido a la pagina {string}")
	public void hace_click_en_Search_Cruises_es_redirigido_a_la_pagina_Cruise_search(String string) {

		Assert.assertThat(Hooks_steps.driver.getCurrentUrl(), containsString(string));
	}

	@Given("hace click en el link saved y es redirigido a la pagina {string}")
	public void hace_click_en_el_link_saved_y_es_redirigido_a_la_pagina(String string) {
		Actions.waitBeforeAction(home.savedLnk);
		home.savedLnk.click();
			
	}

}
