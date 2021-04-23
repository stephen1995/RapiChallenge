$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Navigate_carnival.feature");
formatter.feature({
  "name": "Navegar en la pagina de Carnival",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Nuevo usuario",
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
  "name": "hace click en Create Account",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_Create_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresa su Correo, Contraseña y da click en SignUp",
  "keyword": "When "
});
formatter.match({
  "location": "LandingCarnival_steps.ingresa_su_Correo_Contraseña_y_da_click_en_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ingresa la informacion del modal Complete Your Profile",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.ingresa_la_informacion_del_modal_Complete_Your_Profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario puede observar un modal con las palabras \"THANKS FOR SIGNING UP!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingCarnival_steps.el_usuario_puede_observar_un_modal_con_las_palabras(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[text()\u003d\u0027Save\u0027]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utility.Actions.waitBeforeAction(Actions.java:22)\r\n\tat stepDefinitions.Itinerary_steps.hace_click_en_guardar(Itinerary_steps.java:14)\r\n\tat ✽.hace click en guardar(file:src/main/java/features/Navigate_carnival.feature:17)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Save\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.85)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2E54QI4\u0027, ip: \u0027192.168.170.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.85, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da...}, goog:chromeOptions: {debuggerAddress: localhost:9898}, javascriptEnabled: true, pageLoadStrategy: normal, platform: ANY, platformName: ANY, proxy: Proxy(), setWindowRect: false, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 63b1b9a6a298cb0922d6a2195ce61af9\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Save\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utility.Actions.waitBeforeAction(Actions.java:22)\r\n\tat stepDefinitions.Itinerary_steps.hace_click_en_guardar(Itinerary_steps.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Continuar desde mi busqueda guardada y realizar cambios",
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
  "name": "hace click en el link saved y es redirigido a la pagina \"/saved\"",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_el_link_saved_y_es_redirigido_a_la_pagina(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona el itinerario guardado y es redirigido a la pagina \"/itinerary\"",
  "keyword": "And "
});
formatter.match({
  "location": "Saved_steps.selecciona_el_itinerario_guardado_y_es_redirigido_a_la_pagina(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el usuario hace click en Review Trip y es redirigido a la pagina \"/booking\"",
  "keyword": "And "
});
formatter.match({
  "location": "Itinerary_steps.el_usuario_hace_click_en_Review_Trip_y_es_redirigido_a_la_pagina(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en continuar",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_continuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en el link Change para modificar la cantidad de asientos",
  "keyword": "When "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_el_link_Change_para_modificar_la_cantidad_de_asientos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aumenta a cuatro el numero de huespedes",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.aumenta_a_cuatro_el_numero_de_huespedes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en continuar",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_continuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona Mexico como su pais de residencia",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_Mexico_como_su_pais_de_residencia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona la opcion, Mostrar tarifas para VIFP Club",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_la_opcion_Mostrar_tarifas_para_VIFP_Club()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en continuar",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_continuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona la habitacion mas barata",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_la_habitacion_mas_barata()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona el interior incluido en el precio",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_el_interior_incluido_en_el_precio()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona continuar para la opcion Let me choose my room",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_continuar_para_la_opcion_Let_me_choose_my_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en mas opciones",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_mas_opciones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona la opcion April Savings Sale",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_la_opcion_April_Savings_Sale()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecciona su cuarto",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.selecciona_su_cuarto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en continuar",
  "keyword": "And "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_continuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hace click en continuar en booking y es llevado a la pagina de \"/payment\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Booking_steps.hace_click_en_continuar_en_booking_y_es_llevado_a_la_pagina_de(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});