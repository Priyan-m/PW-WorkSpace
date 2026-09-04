/*Assignment: 2 Edit a Lead 
1. Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Find Leads 
8. Enter the first name 
9. Click Find Leads button 
10. Click the first resulting Lead ID 
11. Click Edit 
12. Edit Company name 
13. Edit Annual Revenue 
14. Edit Department 
15. Enter Description 
16. Click Update 
17. Verify the edited fields using appropriate assertions */
import { test, expect } from "@playwright/test";

test("Edit  lead in CRM application and using assertions",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("Demosalesmanager");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();
    //Click Find Leads button 
    await page.getByRole("link",{name:"Find Leads",exact:true}).click();
    //Click the first resulting Lead ID //Click Edit //Edit Company name // Edit Annual Revenue 
    //Edit Department //Enter Description// Click Update 
    const firstLeadId= page.getByRole("link",{name:/^\d+$/}).first();
    await firstLeadId.click();
    await page.getByRole("link",{name:"Edit",exact:true}).click();
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill("Proctor and Gamble");
    await page.locator('//input[@id="updateLeadForm_annualRevenue"]').fill("900000");
    await page.locator('//input[@id="updateLeadForm_departmentName"]').fill("Testing");
    await page.locator('//textarea[@id="updateLeadForm_description"]').fill("Added to the Testing team");
    await page.getByRole("button",{name:"Update",exact:true}).click();
    await page.waitForTimeout(3000);
    const companyName="Proctor and Gamble";
    const annualRevenue="$900,000.00";
    const department="Testing";
    //Non-trying assertions
    expect (await page.locator('//span[@id="viewLead_companyName_sp"]').innerText()).toContain(companyName);
    expect(await page.locator("#viewLead_annualRevenue_sp").innerText()).toBe(annualRevenue);
    expect (await page.locator("#viewLead_departmentName_sp").innerText()).toBe(department);

    
});