/*Edit Individuals Test 
Steps:  
1. Login to https://login.salesforce.com  
2. Click on the toggle menu button from the left corner  
3. Click View All and click Individuals from App Launcher   
4. Click on the Individuals tab   
5. Search the Individuals last name  
6. Click on the Dropdown icon and Select Edit  
7. Select Salutation as 'Mr'  
8. Now enter the first name  
9. Click on Save and Verify the first name  */
import {test,expect} from "@playwright/test"
test("Edit Individuals in Salesforce",async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();
     console.log("Current URL:", page.url());
     console.log("Page title:", await page.title());
   
    
    
    // Click on toggle menu button from the left corner
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    //await page.waitForTimeout(5000);
    // Click view All and click Sales from App Launcher
    await page.getByRole("button",{name:"View All Applications"}).click();
    //Select Individual
    await page.locator('//p[text()="Individuals"]').click();
    
    //await page.waitForTimeout(5000);
    //Search the Individuals last name
    const searchBox = page.getByRole("searchbox",{name:"Search this list...",exact:true});
    await searchBox.fill("Murthy");
    await searchBox.press("Enter");
    //Click on the Dropdown icon and Select Edit  
    await page.locator("(//a[@title='Murthy'])[1]").click(); //find another way to click dropdown and select afterwards
    //await page.waitForTimeout(5000);

    await page.getByRole("button",{name:"Edit",exact:true}).click();
    //await page.waitForTimeout(5000);
    //Select Salutation as 'Mr'
    await page.getByRole("button",{name:"Salutation --None--"}).click();
    await page.locator('//a[@title="Mr."]').click();
    //Now enter the first name  
    //Click on Save and Verify the first name 
    await page.getByRole("textbox",{name:"First Name",exact:true}).fill("Priyan");
    await page.locator('//span[@class=" label bBody"]').nth(2).click();
    const toastMessage=page.locator(".toastMessage");
    const fullName="Priyan Murthy";
    await expect(toastMessage).toBeVisible();
    await expect(toastMessage).toContainText(`Individual "${fullName}" was saved.`)

    //await page.getByRole("button",{name:"Salutation Mr.",exact:true}).click();
    // await page.locator('button[aria-label="Salutation"]').click();
    // await page.getByRole("option", { name: "Mr.", exact: true }).click();
    //await page.locator("//span[text()='Salutation']/following::a[@role='button'][1]").click();
    //await page.waitForTimeout(5000);

    //await page.waitForTimeout(5000);
    //await page.locator('//a[@class="slds-button slds-button--icon-x-small slds-button--icon-border-filled"]').click();
    //await page.waitForTimeout(5000);
//     const murthyRow = page
//     .getByRole("row")
//     .filter({
//         has: page.getByRole("link", {
//             name: "Murthy",
//             exact: true
//         })
//     })
//     .first();

// await expect(murthyRow).toBeVisible();

// await murthyRow
//     .getByRole("button", { name: /more actions/i })
//     .click();

// await page.getByRole("menuitem", { name: "Edit" }).click();

});