package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Selenium Project\\Projects\\RappiAutomationChallenge\\src\\main\\java\\Features",
					glue = "stepDefinitions",
					tags="@SmokeTest1",
					monochrome = true,
					dryRun = false,
					plugin = {"pretty","html:target/Report"},
					strict = false					
					)

public class Runner {

}
