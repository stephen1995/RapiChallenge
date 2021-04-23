package myRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/java/features",
					glue = "stepDefinitions",
					tags="@SmokeTest",
					monochrome = true,
					dryRun = false,
					plugin = {"json:target/cucumber.json"},
					strict = false					
					)

public class Runner {

}
