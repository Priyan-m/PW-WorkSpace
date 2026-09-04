/*1. Launch the browser and open https://www.pvrcinemas.com/ 
2. Select the city as “Chennai” 
3. Choose cinema from the available list 
4. Select movie date
5. Choose any available movie
6. Select available show time 
7. Click on Book button
8. Click on Accept for Terms & Conditions
9. Select the available seat 
10. Verify seat information and total ticket amount using assertions 
11. Verify the Title of the page 
12. Proceed to booking */
import {test,expect} from "@playwright/test"
test("Booking tickets in PVR cinemas",async({page})=>{
    await page.goto("https://www.pvrcinemas.com/");
    
    
    await page.locator("//input[@placeholder='Search for city']").fill('Chennai')
    await page.locator("//li[contains(text(),'Chennai')]").click();
    //Choose cinema from the available list
    await page.locator('//div[@class="date-show"]/span').nth(1).click();
    //await page.getByText("Select Movie",{exact:true}).click();
    await page.locator('//span[text()="Select Cinema"]').click();
    //Choose any available movie//Select available show time 
    
     await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click()
    await page.locator("//span[contains(text(),'Tomorrow')]").click()
    await page.locator("//span[contains(text(),'IM GAME')]").click()
    console.log("movie booked")
    await page.locator('//span[text()="09:20 AM"]').nth(0).click();
    await page.waitForTimeout(5000);
    


    

});
//await page.getByText("Chennai",{exact:true}).click();
    //await page.locator('//span[@class="sc-dYwGCk lXYXq"]').click();
    //await page.locator('//div[@class="cities-names"]/span[text()="Chennai"]').click();
    //await page.locator(`//div[@class="cities-names"]/img[contains(@src,'Chennai')]`).click();
    //await page.locator('//div[@class="cities-names"]/span[text()="Chennai"]').click();
    // console.log("Page Title:" + await page.title());
    // console.log("Current url:" + page.url);
    //await page.locator('//div[@class="date-show"]/span').nth(1).click();
    //await page.locator('//span[@class="cinemas-inactive"]').click();
    //await page.waitForTimeout(5000);
    //await page.getByText("Select Cinema",{exact:true}).click();
    //await page.goto('https://www.pvrcinemas.com/')

    //await page.waitForTimeout(5000)
    //await page.locator("//div[@class='p-dropdown-items-wrapper']//li)[1]").click()
    //await page.getByText("09:20 AM").click()
    //console.log("time booked")
    //await page.waitForTimeout(5000)
    //await page.locator("//button[@aria-label='Submit']//span[text()='Book']").click()
    //await page.getByRole("button",{name:'Submit'}).click()
    //await page.locator("//button[@type='submit']").click()
    //console.log("booked")
    //await page.waitForTimeout(5000)
    //await page.locator("//button[text()='Accept']").click()

    //await page.getByText("Cinema", { exact: true }).click();

        // await page.getByText("Select Cinema", { exact: true }).click();

        // await page.getByText(
        //     "INOX National,Virugambakkam Chennai",
        //     { exact: true }
        // ).click();
    // await page.getByText("INOX The Marina Mall, OMR...",{exact:true}).click();
    // await page.waitForTimeout(5000);