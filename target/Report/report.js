$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Navigate_carnival.feature");
formatter.feature({
  "name": "Navegar en la pagina de Carnival",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Buscar cruceros a Bahamas con duracion de seis a nueve dias y guardar busqueda",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "el usuario visita el landing de Carnival",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingCarnival_steps.el_usuario_visita_el_landing_de_Carnival()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en Sail To y selecciona Bahamas",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_Sail_To_y_selecciona_Bahamas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en Duration y seleciona de seis a nueve dias",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_Duration_y_seleciona_de_seis_a_nueve_dias()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en Search Cruises y es redirigido a la pagina \"/cruise-search\"",
  "keyword": "When "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_Search_Cruises_es_redirigido_a_la_pagina_Cruise_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario selecciona la primera opcion y es redirigido a \"/itinerary\"",
  "keyword": "And "
});
formatter.match({
  "location": "CruiseSearch_steps.el_usuario_selecciona_la_primera_opcion_y_es_redirigido_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en guardar",
  "keyword": "Then "
});
formatter.match({
  "location": "Itinerary_steps.hace_click_en_guardar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});