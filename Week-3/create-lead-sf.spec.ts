/*Assignment: 1 Create Lead 
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner 
3. Click view All and click Sales from App Launcher 
4. Click on Leads tab 
5. Click on New button 
6. Select Salutation dropdown 
7. Enter the Last Name 
8. Enter the Company Name 
9. Click Save and Verify Leads name created*/


//     await expect(
//     page.getByRole("heading", { name: `Lead ${lastName}`, exact: true })
//  ).toBeVisible();
// const lastName = "Murthy";


    // 
    // await expect(page.getByRole("alert")).toContainText("Lead"); - dk why failing
    // await expect(page.getByRole("alert")).toContainText("was created");

    // await expect(page.getByRole("alert")).toContainText(`Lead "${lastname}" was created`);
    // const lastName = "Murthy";

// await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
// await page.getByRole("textbox", { name: "Company" }).fill("Proctor & Gamble");
// await page.getByRole("button", { name: "Save", exact: true }).click();
// await page.getByRole("button", { name: "Save", exact: true }).click();
// await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
// await page.getByRole("textbox", { name: "Company" }).fill("Proctor & Gamble");

// await page.getByRole("button", { name: "Save", exact: true }).click();

import {test,expect} from "@playwright/test"
test("Salesforce Login Validation",async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();
    console.log("Page title:", await page.title());
    console.log("Current URL:", page.url());
    // Click on toggle menu button from the left corner
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    await page.waitForTimeout(5000);
    // Click view All and click Sales from App Launcher
    await page.getByRole("button",{name:"View All Applications"}).click();
    await page.locator('//p[@class="slds-truncate"]').nth(6).click();
    await page.waitForTimeout(5000);
    // Click on Leads tab 
    await page.locator('//div[@class="slds-context-bar__label-action slds-p-left_none"]').nth(1).click();
    //  Click on New button 
    await page.getByRole("menuitem",{name:"New Lead"}).click();
    //Select Salutation dropdown 
    await page.locator('//button[@aria-label="Salutation"]').click();
    // Enter the Last Name 
    //  Enter the Company Name
    await page.getByRole("textbox",{name:"Last Name"}).fill("Murthy");
    await page.getByRole("textbox",{name:"Company"}).fill("Proctor & Gamble");
    const lastName= "Murthy";
    // Click Save and Verify Leads name created*/
    await page.getByRole("button",{name:"Save",exact:true}).click();
    const successToast = page.locator(".toastMessage"); //-D
    await expect(successToast).toBeVisible();
    await expect(successToast).toContainText(`Lead "${lastName}" was created.`);
    await expect(page.locator(".toastMessage")).toHaveText(`Lead "${lastName}" was created.`);

});