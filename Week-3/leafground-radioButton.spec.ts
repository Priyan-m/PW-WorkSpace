/*1. Navigate to https://leafground.com/radio.xhtml 
2. Identify and assert the default selected radio button. 
3. Click your most favorite browser and assert that the browser is enabled. 
4. Click one of the cities. 
5. Select the age group. Assert the default selected button. */






    import { test, expect } from "@playwright/test";

test("Radio Button in Leafground page", async ({ page }) => {
    await page.goto("https://leafground.com/radio.xhtml");

    // Find only the card named "Find the default select radio button".
    const defaultRadioCard = page.locator(".card").filter({
        has: page.getByText("Find the default select radio button", {
            exact: true,
        }),
    });

    // Safari inside this card is selected by default.
    const defaultRadioButton = defaultRadioCard.getByRole("radio", {
        name: "Safari",
        exact: true,
    });

    await expect(defaultRadioButton).toBeChecked();

    //Click your most favorite browser and assert that the browser is enabled. 
        // Click favorite browser and verify it is enabled and selected.

            // Click your most favorite browser and verify it is enabled.
    const favoriteBrowserCard = page.locator(".card").filter({
        has: page.getByText("Your most favorite browser", { exact: true }),
    });

    const firefoxRadioButton = favoriteBrowserCard.getByRole("radio", {
        name: "Firefox",
        exact: true,
    });

    // Click the visible label because the actual input is hidden.
    await favoriteBrowserCard.getByText("Firefox", { exact: true }).click();
    await page.waitForTimeout(5000);

    await expect(firefoxRadioButton).toBeEnabled();
    await expect(firefoxRadioButton).toBeChecked();


    //click one of the cities
    // ...existing code...

    // Click one city.
    const cityCard = page.locator(".card").filter({
        has: page.getByText("UnSelectable", { exact: true }),
    });

    const chennaiRadioButton = cityCard.getByRole("radio", {
        name: "Chennai",
        exact: true,
    });

    // Click the visible Chennai label.
    await cityCard.getByText("Chennai", { exact: true }).click();
    //await page.waitForTimeout(5000);

    // Verify Chennai is selected.
    await expect(chennaiRadioButton).toBeChecked();

    //Select the age group. Assert the default selected button. */
        // Select the age group and assert the default selected button.
    const ageGroupCard = page.locator(".card").filter({
        has: page.getByText("Select the age group (only if not selected)", {
            exact: true,
        }),
    });

    const defaultAgeRadioButton = ageGroupCard.getByRole("radio", {
        name: "21-40 Years",
        exact: true,
    });

    // Verify the default selected age group.
    await expect(defaultAgeRadioButton).toBeChecked();


});    


// test("Radio Button in Leafground page",async({page})=>{
//     await page.goto("https://leafground.com/radio.xhtml");
// //Identify and assert the default selected radio button
//     //const defaultRadioButton = page.locator('//span[@class="ui-radiobutton-icon ui-icon ui-icon-bullet ui-c"]').nth(3);
//     //await expect(defaultRadioButton).toBe("Safari");

//     // ...existing code...

//     // Safari is the default selected radio button.
//     const defaultRadioButton = page.getByRole("radio", {name: "Safari",exact: true,});

//     await expect(defaultRadioButton).toBeChecked();

// ...existing code...


// ...existing code...
    // const favoriteBrowserCard = page.locator(".card").filter({
    //     has: page.getByText("Your most favorite browser", {
    //         exact: true,
    //     }),
    // });

    // const firefoxRadioButton = favoriteBrowserCard.getByRole("radio", {
    //     name: "Firefox",
    //     exact: true,
    // });

    // await expect(firefoxRadioButton).toBeEnabled();
    // await firefoxRadioButton.check();
    // await expect(firefoxRadioButton).toBeChecked();
    // import {test,expect} from "@playwright/test"
