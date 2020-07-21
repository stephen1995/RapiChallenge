package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Selenium Project\\Projects\\TranzactChallenge\\src\\main\\java\\Features",
					glue = "GlueOrStepDefinitions",
					tags="@SmokeTest",
					monochrome = true,
					dryRun = false,
					plugin = {"pretty","html:target/Report"},
					strict = true					
					)

public class Runner {

}
