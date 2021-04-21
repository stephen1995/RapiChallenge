$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Navigate_carnival.feature");
formatter.feature({
  "name": "Navigate in Carnival page",
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
  "status": "passed"
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
  "name": "se loguea con sus crendenciales",
  "keyword": "And "
});
formatter.match({
  "location": "LandingCarnival_steps.se_loguea_con_sus_crendenciales()"
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
  "name": "selecciona el itinerario guardado",
  "keyword": "And "
});
formatter.match({
  "location": "Saved_steps.selecciona_el_itinerario_guardado()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.128)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2E54QI4\u0027, ip: \u0027192.168.170.49\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Usuario\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57045}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5b0767b46e1edf9ceda8183ec64b62f3\n*** Element info: {Using\u003dxpath, value\u003d//p[text()\u003d\u00276 day The Bahamas\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.toString(Unknown Source)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:305)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\r\n\tat utility.Actions.waitBeforeAction(Actions.java:29)\r\n\tat stepDefinitions.Saved_steps.selecciona_el_itinerario_guardado(Saved_steps.java:13)\r\n\tat ✽.selecciona el itinerario guardado(file:Navigate_carnival.feature:26)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "hace click en Search Cruises y es redirigido a la pagina \"/cruise-search\"",
  "keyword": "When "
});
formatter.match({
  "location": "LandingCarnival_steps.hace_click_en_Search_Cruises_es_redirigido_a_la_pagina_Cruise_search(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el usuario selecciona la primera opcion y es redirigido a \"/itinerary\"",
  "keyword": "And "
});
formatter.match({
  "location": "CruiseSearch_steps.el_usuario_selecciona_la_primera_opcion_y_es_redirigido_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hace click en guardar",
  "keyword": "Then "
});
formatter.match({
  "location": "Itinerary_steps.hace_click_en_guardar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});