/*Precondition: - 
Launch Chromium in non-headless mode - Create a new browser context. -
 Open a new page within the browser context. - Load the url 
 https://login.salesforce.com/ - 
 Use your Salesforce credentials that you’ve created 
 Requirements: - Enter the username. - Enter the password. - Click the Login button.
  - Wait for 10 seconds  - Print the page title and the current url of the page - Close the browser 
 Expected Outcome: 
Upon completion, you should be able to: - 
Successfully login to the application followed by printing the current URL and page title.*/
import { test } from "@playwright/test";

test("Salesforce Login Validation", async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("priyantitan.07986efd4dba@agentforce.com");
    await page.locator("#password").fill("Priyan123");
    await page.locator("#Login").click();

    await page.waitForTimeout(10000);
    console.log("Page title:", await page.title());
    console.log("Current URL:", page.url());

});