/*Assignment: 2 Edit Lead 
10. Login to https://login.salesforce.com  
11. Click on toggle menu button from the left corner  
12. Click view All and click Sales from App Launcher  
13. Navigate to the Leads tab   
14. Click on Edit button  
15. Update the necessary fields (e.g., Salutation, Last Name, or Company Name) 
16. Click Save  
17. Verify that the Lead details are updated successfully  */
import {test,expect} from "@playwright/test"
test("Edit lead in Salesforce",async({page})=>{
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
    await page.locator('//p[@class="slds-truncate"]').nth(6).click();
    // Click on Leads tab
    await page.getByLabel("Leads").click();
    await page.locator('//a[@title="Murthy"]').nth(0).click();
    //await page.waitForTimeout(5000);
//   Edit button clicking
    await page.getByRole("button",{name:"Edit",exact:true}).click();
    //await page.waitForTimeout(3000);
//Update the necessary fields (e.g., Salutation, Last Name, or Company Name)
    //await page.locator('#combobox-button-190').click();
    //await page.waitForTimeout(3000);
    await page.getByRole("button",{name:"Save",exact:true}).click();
    await page.waitForTimeout(3000);
    //Verify that the Lead details are updated successfully  */
    const leadName = "Mr. Murthy";
    const successToast = page.locator(".toastMessage"); //-D
    await expect(successToast).toBeVisible();
    await expect(successToast).toContainText(`Lead "${leadName}" was saved.`);
    // await expect(page.locator(".toastMessage")).toHaveText(`Lead "${lastName}" was created.`);
    



    

});