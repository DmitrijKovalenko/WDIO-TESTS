import { browser } from "@wdio/globals";

describe("Webdriverio main page", () => {
it("should navigate to API page", async () => {
    await browser.url('https://webdriver.io/');
    const apiLink = await $('nav a[href="/docs/api"]');
    await apiLink.click();


});
it("should scrolldown to API page and check isDisplayed blogButton", async () => {
    await browser.url('https://webdriver.io/docs/api');
    const blogButton = await $('.footer__link-item[href="/blog"]')
    await browser.pause(2000)
    await blogButton.scrollIntoView()
    let isDisplayed = await blogButton.isDisplayed()
    
    console.log("blogButton isDisplayed :" + isDisplayed)

});
it("should check element if it is isDisplayed", async () => {
    await browser.url('https://webdriver.io/docs/api/');


    const protocolCommands = await $('.pagination-nav__link.pagination-nav__link--next')
    await browser.pause(2000)
    await protocolCommands.scrollIntoView()
    let isDisplayed = await protocolCommands.isDisplayed()
    let isClickable = await protocolCommands.isClickable()
    console.log("ProtocolCommands isDisplayed :" + isDisplayed)
    console.log("ProtocolCommands isClickable :" + isClickable)
    let prHTML = await protocolCommands.getHTML()
    await protocolCommands.click()
    console.log("prHNML :" + prHTML)

    const webDriverBP = await $('h2#webdriver-bidi-protocol')
    await browser.waitUntil(
        async () => await webDriverBP.isDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'WebDriver Bidi Protocol header not visible after 5s'
        }
    );

});
    


    
    
    
    
});
