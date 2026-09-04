/*Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or 
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have 
been successfully saved. 
 
Precondition: - Use a fixture to setup and teardown 
 
Test Steps: 
 
Assignment: 1 Create a Lead 
1. Navigate to the url http://leaftaps.com/opentaps/control/main 
2. Enter the username as ‘Demosalesmanager’ 
3. Enter the password as ‘crmsfa’ 
4. Click the Login button 
5. Click CRM/SFA 
6. Click Leads 
7. Click Create Lead 
8. Fill the Company Name 
9. Fill the First Name 
10. Fill the Last Name 
11. Fill the Salutation 
12. Fill the Title 
13. Fill the Annual Revenue 
14. Fill the Department 
15. Fill the Phone number 
16. Click Create Lead button 
17. Verify the company name, first name, last name and the status using auto retrying and non
retrying assertions*/
import { test, expect } from "@playwright/test";

test("Create lead in CRM application and using assertions",async ({page}) => {
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("Demosalesmanager");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Proctor and Gamble");
    /* Fill the First Name * Fill the Last Name * Fill the Salutation * Fill the Title 
      * Fill the Annual Revenue * Fill the Department *Fill the Phone number 
*Click Create Lead button */
    await page.locator('#createLeadForm_firstName').fill("Priyan");
    await page.locator('#createLeadForm_lastName').fill("Murthy");
    await page.locator('#createLeadForm_personalTitle').fill("Mr");
    await page.locator('#createLeadForm_generalProfTitle').fill("Automation Tester");
    await page.locator('#createLeadForm_annualRevenue').fill("900000");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9123507783");
    await page.locator('#createLeadForm_departmentName').fill("Testing");
    await page.getByRole("button",{name:"Create Lead",exact:true}).click();
    //Verify the company name, first name, last name and the status using 
    //auto retrying and non retrying assertions
    const firstName="Priyan";
    const lastName ="Murthy";
    const companyName="Proctor and Gamble";
    const status="Assigned";

    // Auto-retrying assertions wait until the elements contain the expected text.
    await expect(page.locator("#viewLead_companyName_sp")).toContainText(companyName);
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText(firstName);
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText(lastName);
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText(status);

    // Non-retrying assertions check the values immediately after reading them.
    expect(await page.locator("#viewLead_companyName_sp").innerText()).toContain(companyName);
    expect(await page.locator("#viewLead_firstName_sp").innerText()).toBe(firstName);
    expect(await page.locator("#viewLead_lastName_sp").innerText()).toBe(lastName);
    expect(await page.locator("#viewLead_statusId_sp").innerText()).toBe(status);
});