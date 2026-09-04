/*Assignment: 3 Create a new Account 
1. Navigate to the url https://login.salesforce.com/ 
2. Enter username using getByLabel 
3. Enter password using getByLabel 
4. Click Login 
5. Verify the title and url of the page using appropriate assertions 
6. Click App Launcher using the class locator 
7. Click View All using getByText 
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
9. Click Service using index based XPath 
10. Click Accounts using attribute based CSS selector 
11. Click New using getByRole 
12. Enter Account name using attribute based CSS selector 
13. Click Save button using XPath 
14. Verify the toast message displayed*/

import { test, expect } from "@playwright/test";

test("Create a new Salesforce account", async ({ page }) => {
	const accountName = `Proctor and Gamble ${Date.now()}`;

	await page.goto("https://login.salesforce.com/");
	await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com");
	await page.locator('//input[@id="Login"]').click();
	await page.getByLabel("Password").fill("TestLeaf@2025");
	await page.locator("#Login").click();
	await page.waitForTimeout(5000);

	await expect(page).toHaveTitle(/Salesforce/);
	await expect(page).toHaveURL(/lightning/);

	await page.locator(".slds-icon-waffle").click();
	await page.getByText("View All", { exact: true }).click();
	await page.getByPlaceholder("Search apps or items...").fill("Service");
	await page.locator('(//p[text()="Service"])[1]').click();

	await page.locator('a[title="Accounts"]').click();
	await page.getByRole("button", { name: "New", exact: true }).click();
	await page.locator('input[name="Name"]').fill(accountName);
	await page.locator('//button[@name="SaveEdit"]').click();

	const toastMessage = page.locator(".toastMessage");
	await expect(toastMessage).toBeVisible();
	await expect(toastMessage).toContainText(`Account "${accountName}" was created`);
});