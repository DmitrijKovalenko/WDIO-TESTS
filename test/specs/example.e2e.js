import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"
describe("Webdriverio main page", () => {
    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
        
       
    });
    xit("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")
    });
    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.setValue("world")
        await browser.pause(2000)
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")
    });
    xit("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()   
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("SuoerSecretPassword!")
        await browser.pause(2000)

    
        await loginButton.click()
        await browser.pause(4000)

    });

    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua/search');

        let inputSearch = await $("#gsc-i-id1")
        await browser.pause(2000)
        let attr = await inputSearch.getAttribute("aria-label")
        await browser.pause(2000)
        console.log("Placeholder attribute is : "+ attr) //outputs:шукати
        
        await inputSearch.setValue("Cat")
        await browser.pause(2000)
        attr = await inputSearch.getValue()
        await browser.pause(2000)

        console.log("Value attribute is :"+ attr) // outputs:Cat
       
    });
    xit("should show getLocation command", async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $("#txtGlobalSearch")
        await browser.pause(2000)

        let location = await inputSearch.getLocation()
        await browser.pause(2000)
        console.log("location is : "+ location) //outputs: x y 
        
        let xlocation = await inputSearch.getLocation("x")
        await browser.pause(2000)
        console.log("location is : "+ xlocation) //outputs: x 
        await browser.pause(2000)
       
    });

    xit("should show getText", async () => {
        await browser.url('https://webdriver.io/');

        let subtitle = await $(".hero__subtitle")
        console.log("Sibtitle text is :" + await subtitle.getText() ) // outputs : Next gen broser...
        
       
    });

    xit("should show if an element is clickable", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton =await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable : "+clickable)
       
    });
    xit("should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton =await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed : "+displayed)
       
    });
    xit("should show if an element is visiable", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton =await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayed()
        console.log("Is blog button displayed in viewport  : "+ displayedInViewport)
       
    });
    xit("should show if an element is enabled", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton =await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is get started button is enabled  : "+ isEnabled)
       
    });
    xit("should show if an element is focused", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton =await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log("Is get started button is focused  : " + isFocused)
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is get started button is focused after click  : " + isFocused)
        await browser.pause(2000)

    });
    xit("should save screenshot element", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenShot.png')
        
       
    });
    xit("should switch to another window", async () => {
        await browser.url('https://webdriver.io/');
        await browser.pause(2000)

        await browser.newWindow('https://google.com')
        await browser.pause(2000)
        
        await browser.switchWindow('https://webdriver.io/');
        await browser.pause(2000)

        
        
       
        
    
    });
    xit("should show  waitUntill command", async () => {
        await browser.url('https://webdriver.io/');

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]').isDisplayed();},5000,"Button is not displayed" )
        
       
    });
    xit("should get html for certain elements", async () => {
        await browser.url('https://webdriver.io/');
        
        const outerHTML = await $('.dropdown__menu').getHTML()
        console.log("outerHTML :"+ outerHTML)
       
        const innerHTML = await $('.dropdown__menu').getHTML(false)
        console.log("outerHTML :" + innerHTML)
        
        assert(1 === 1, "1 not equal 1")
        assert(1 === "hello","1 not equal hello")
    
    });




});

