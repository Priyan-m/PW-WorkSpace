
/*1. Navigate to https://leafground.com/select.xhtml 
2. Select your favorite UI automation tool using the different select options 
3. Get the count and print of all the values 
4. Choose your preferred Country 
5. Confirm Cities belongs to Country is loaded 
6. Choose any three courses from the dropdown 
7. Choose a language and print all the values from the dropdown. 
8. Select 'Two' irrespective of the language chosen */




import { expect, test } from "@playwright/test";

test("LeafGround dropdown exercise", async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml");

    // 1. Select favorite UI automation tool.
    const toolDropdown = page.locator("select.ui-selectonemenu").nth(0);

    await toolDropdown.selectOption({ label: "Playwright" });
    await expect(toolDropdown).toHaveValue("Playwright");

    // 2. Get and print all tool values.
    const tools = await toolDropdown.locator("option").allTextContents();
    console.log("Tool count:", tools.length);
    console.log("Tools:", tools);

    // 3. Choose preferred country.
    const countryDropdown = page.locator("select.ui-selectonemenu").nth(1);

    await countryDropdown.selectOption({ label: "India" });
    await expect(countryDropdown).toHaveValue("India");

    // 4. Confirm cities are loaded after choosing a country.
    const cityDropdown = page.locator("select.ui-selectonemenu").nth(2);

    await expect(cityDropdown).toBeEnabled();

    const cities = await cityDropdown.locator("option").allTextContents();
    console.log("City count:", cities.length);
    console.log("Cities:", cities);

    // Verify that city values have loaded.
    expect(cities.length).toBeGreaterThan(1);

    // 5. Choose any three courses.
    const courseCard = page.locator(".card", {
        has: page.getByText("Choose the Course", { exact: true }),
    });

    // Open the course multi-select dropdown.
    await courseCard.locator(".ui-multiselect-trigger").click();

    // Get the currently open options panel.
    const coursePanel = page.locator(".ui-multiselect-panel:visible");
    const courseOptions = coursePanel.locator(".ui-multiselect-item");

    // Select the first three available courses.
    await courseOptions.nth(0).click();
    await courseOptions.nth(1).click();
    await courseOptions.nth(2).click();

    // Close the course options panel.
    await courseCard.locator(".ui-multiselect-trigger").click();

    // 6. Choose a language.
    const languageDropdown = page.locator("select.ui-selectonemenu").nth(3);

    await languageDropdown.selectOption({ index: 1 });

    const selectedLanguage = await languageDropdown.inputValue();
    console.log("Selected language:", selectedLanguage);

    // 7. Print values in the dependent number dropdown.
    const numberDropdown = page.locator("select.ui-selectonemenu").nth(4);

    await expect(numberDropdown).toBeEnabled();

    const numbers = await numberDropdown.locator("option").allTextContents();
    console.log("Number values:", numbers);

    // 8. Select Two.
    await numberDropdown.selectOption({ label: "Two" });
    await expect(numberDropdown).toHaveValue("Two");
});



// import { expect, test } from "@playwright/test";

// //  test("Leafground checkbox in Playwright", async ({ page }) => {
// //     await page.goto("https://leafground.com/select.xhtml");
// //     //Select your favorite UI automation tool using the different select options 
// //     await page.selectOption('.ui-selectonemenu',{value:"Select Tool"});
// //     import { expect, test } from "@playwright/test";

// test("Leafground dropdown in Playwright", async ({ page }) => {
//     await page.goto("https://leafground.com/select.xhtml");

//     const toolDropdown = page.locator("select.ui-selectonemenu").first();
//     //await page.waitForTimeout(5000);
//      await toolDropdown.selectOption({ label: "Playwright" });


//     // Select an actual option by its displayed text.
//     // await toolDropdown.selectOption({ label: "Playwright" });
//     // await toolDropdown.selectOption({ label: "Selenium" });
//     // await toolDropdown.selectOption({ label: "Select Tool" });
//     // await toolDropdown.selectOption({ label: "Puppeteer" });
//     // await toolDropdown.selectOption({ label: "Cypress" });
//     // Verify selected option.
    
//     // ...existing code...

    
//     // Get option count.
//     const optionCount = await toolDropdown.locator("option").count();
//     console.log("Number of options:", optionCount);

//     // Print every option text.
//     const allOptions = await toolDropdown.locator("option").allTextContents();
//     console.log("All options:", allOptions);

// // ...existing code...
//     await expect(toolDropdown).toHaveValue("Playwright");
//     await page.waitForTimeout(5000);

// });
//    // await page.waitForTimeout(5000);


//     import { expect, test } from "@playwright/test";

//     test("Leafground dropdown in Playwright", async ({ page }) => {
//     await page.goto("https://leafground.com/select.xhtml");

//     // 1. Select UI automation tool.
//     const toolDropdown = page.locator("select.ui-selectonemenu").nth(0);
//     await toolDropdown.selectOption({ label: "Playwright" });
//     await expect(toolDropdown).toHaveValue("Playwright");

//     // 2. Get count and print all tool values.
//     const toolOptionCount = await toolDropdown.locator("option").count();
//     console.log("Number of tools:", toolOptionCount);

//     const toolOptions = await toolDropdown.locator("option").allTextContents();
//     console.log("All tools:", toolOptions);

//     // 3. Choose preferred country.
//     const countryDropdown = page.locator("select.ui-selectonemenu").nth(1);
//     await countryDropdown.selectOption({ label: "India" });
//     await expect(countryDropdown).toHaveValue("India");

//     // 4. Verify city dropdown is loaded after selecting country.
//     const cityDropdown = page.locator("select.ui-selectonemenu").nth(2);

//     await expect(cityDropdown).toBeEnabled();

//     const cityOptionCount = await cityDropdown.locator("option").count();
//     console.log("Number of cities:", cityOptionCount);

//     const cityOptions = await cityDropdown.locator("option").allTextContents();
//     console.log("Cities loaded:", cityOptions);

//     // 5. Choose any three courses.
//     const courseDropdown = page.locator(".ui-multiselect").first();
//     await courseDropdown.click();

//     await page.getByText("Selenium", { exact: true }).click();
//     await page.getByText("Playwright", { exact: true }).click();
//     await page.getByText("Cypress", { exact: true }).click();

//     // Close the course dropdown by clicking it again.
//     await courseDropdown.click();

//     // 6. Choose a language.
//     const languageDropdown = page.locator("select.ui-selectonemenu").nth(3);
//     await languageDropdown.selectOption({ label: "English" });

//     // 7. Print all values from the second language-related dropdown.
//     const numberDropdown = page.locator("select.ui-selectonemenu").nth(4);

//     const numberOptions = await numberDropdown.locator("option").allTextContents();
//     console.log("Number dropdown values:", numberOptions);

//     // 8. Select Two.
//     await numberDropdown.selectOption({ label: "Two" });
//     await expect(numberDropdown).toHaveValue("Two");
// });
 