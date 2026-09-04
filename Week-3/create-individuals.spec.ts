/*Assignment: 3 Create Individuals 
Test Steps:   
1. Login to https://login.salesforce.com  
2. Click on the toggle menu button from the left corner  
3. Click View All and click Individuals from App Launcher  
4. Click on the Dropdown icon in the Individuals tab  
5. Click on New Individual  
6. Enter the Last Name  
7. Click save and verify Individuals Name  */
import {test,expect} from "@playwright/test"
test("Create Individuals in Salesforce",async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();
    console.log("Page title:", await page.title());
    console.log("Current URL:", page.url());
    // Click on toggle menu button from the left corner
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    //await page.waitForTimeout(5000);
    // Click view All and click Sales from App Launcher
    await page.getByRole("button",{name:"View All Applications"}).click();
    //Select Individual
    await page.locator('//p[text()="Individuals"]').click();
    //await page.waitForTimeout(5000);
     //Click on New Individual
    await page.getByRole("button",{name:"New",exact:true}).click();
    //await page.waitForTimeout(5000);
    await page.getByRole("textbox", { name: "Last Name" }).fill("Murthy");
    await page.getByRole("button", { name: "Save", exact: true }).click();
    const lastName="Murthy";
    const toastMessage = page.locator(".toastMessage");
    await expect(toastMessage).toBeVisible();
    await expect(toastMessage).toContainText(`Individual "${lastName}" was created`);
    await page.waitForTimeout(5000);


});