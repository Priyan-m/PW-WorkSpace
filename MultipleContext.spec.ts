/*Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Firefox browser instance and verify the page title and URL.
Preconditions:
1. Use Playwright to launch Edge and Firefox.
2. Create two separate browser instances.
3. Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com
Requirements:
 Red Bus (Edge):
o Load the home page and print the page title and current URL.
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
Hints:
 Use page.title() to retrieve the page title.
 Use page.url() to retrieve the current page URL*/
import { test, expect, chromium, firefox } from '@playwright/test';

test('open Red Bus in Edge and Flipkart in Firefox', async () => {
	const edge = await chromium.launch({ channel: 'msedge' });
	const firefoxBrowser = await firefox.launch();

	try {
		const redBusPage = await edge.newPage();
		await redBusPage.goto('https://www.redbus.in', { waitUntil: 'domcontentloaded' });

		const redBusTitle = await redBusPage.title();
		const redBusUrl = redBusPage.url();

		console.log('Red Bus title:', redBusTitle);
		console.log('Red Bus URL:', redBusUrl);

		expect(redBusTitle).not.toBe('');
		expect(redBusUrl).toContain('redbus.in');

		const flipkartPage = await firefoxBrowser.newPage();
		await flipkartPage.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

		const flipkartTitle = await flipkartPage.title();
		const flipkartUrl = flipkartPage.url();

		console.log('Flipkart title:', flipkartTitle);
		console.log('Flipkart URL:', flipkartUrl);

		expect(flipkartTitle).not.toBe('');
		expect(flipkartUrl).toContain('flipkart.com');
	} finally {
		await edge.close();
		await firefoxBrowser.close();
	}
});