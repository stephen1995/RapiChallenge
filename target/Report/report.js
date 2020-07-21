$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:SignIn.feature");
formatter.feature({
  "name": "Sign In",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sign In",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "The user has navigated to Automation Practice page and click on login",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.the_user_has_navigated_to_Automation_Practice_page_and_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters an email and submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.the_user_enters_an_email_and_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he fills all necessary data and submit",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_fills_all_necessary_data_and_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has successfully created an account",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_has_successfully_created_an_account()"
});
formatter.result({
  "status": "passed"
});
});