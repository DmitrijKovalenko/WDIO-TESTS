import { browser } from "@wdio/globals";
describe("Webdriverio main page", () => {
    it("should navigate to API page when API is clicked", async () => {
        await browser.url('https://webdriver.io/');

        const apiLink = await $('a[href="/docs/api"]');
        await apiLink.scrollIntoView();
        await apiLink.waitForClickable({ timeout: 5000 });
        await apiLink.click();
        await browser.pause(2000)
    });

    it("Should check correct URL", async () => {
        await browser.url('https://webdriver.io/docs/api');
        const urlToCheck = await browser.getUrl()
        const correctUrl = "https://webdriver.io/docs/api"
        let isEqual = urlToCheck === correctUrl
        console.log("Result after checking title is :" + isEqual)
        console.log("Result after checking title is :" + urlToCheck)
        
    });

    it('Should check string "Introduction" on API page', async () => {
        await browser.url('https://webdriver.io/docs/api');
        const h1 = await $("h1");
        await expect(h1).toHaveText("Introduction");

    });

      it("Should compare webDriverButtonLink and the link that is displayed in the lower left corner ",async() =>{
            await browser.url('https://webdriver.io/docs/api');
            const link = await $("a=WebDriver");
        const href = await link.getAttribute("href");
        const fullUrl = new URL(href, "https://webdriver.io").href;
        expect(fullUrl).toBe("https://webdriver.io/docs/api/webdriver");
        }); 

    it('Should type "All is done" in search-input and then delete it',async()=>{
        let searchBut = await $('[aria-label="Search (Ctrl+K)"]')
        await searchBut.click()
        await browser.pause(2000)
        let searchInput = await $("#docsearch-input")
        await searchInput.addValue("All is done")
        await browser.pause(2000)
        await searchInput.clearValue()
        await browser.pause(2000)

        
    });



});