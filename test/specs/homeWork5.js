
import GithubMainPage from './../pages/githubmain.page.js'
import GithubRegistration from './../pages/githubregistration.page.js'
import GithubNewstler from './../pages/githubnewstler.page.js'
import GithubPricing from '../pages/githubpricing.page.js'
describe("Github main page", () => {
    it('Testing sign up form', async () => {
        await browser.url('https://github.com/')
        
        await GithubMainPage.clickSignUpBtn()
        await browser.pause(2000)

        const emailInput = await $('#email')
        await emailInput.addValue("testsqaurd@com.ua")

        const passwordInput = await $('#password')
        await passwordInput.addValue("Russia_Will_Disappear")

        const usernameInput = await $('#login')
        await usernameInput.addValue('DmitrijKovalenko123456')

     
        await GithubRegistration.clickOnMarketingCheckbox()
        await browser.pause(2000)
        
        await GithubRegistration.clickContinueBtn()
        await browser.pause(2000)

        const verify = await $('#verify-account-header')
        await expect(verify).toHaveText("Verify your account")

    });
    it('Should check enterprise button', async () => {
        await browser.url('https://github.com/')
        
        await GithubMainPage.pricingBtn.scrollIntoView()
        await GithubMainPage.pricingBtn.isClickable()
        GithubMainPage.clickPricingBtn()
        GithubMainPage.clickstart30Days()
        await browser.pause(2000)
        
        const trial = await $( '.d-md-block')
        await trial.waitForDisplayed()
        await browser.pause(2000)

        
        expect(await trial.getText()).toBe('Pick your trial plan')
        await browser.pause(2000)

        GithubMainPage.clickEnterprise()   
        await browser.pause(2000)


    });
    it('Should check Subscribe button enable', async () => {
        await browser.url('https://github.com/')
       await GithubMainPage.subscribe.scrollIntoView()
       await GithubMainPage.subscribe.isClickable()
        GithubMainPage.clickOnSubscribe()
        await browser.pause(2000)

        const urlToCheck = await browser.getUrl()
        const correctUrl = "https://resources.github.com/newsletter/"
        expect(urlToCheck).toHaveText(correctUrl)
        let correct = urlToCheck === correctUrl
        console.log("Result after checking url is :" + correct)

        const title = await $('#hero-section-brand-heading')
        await title.isEnabled()
        await browser.pause(2000)

        const workEmail = await $('input[name="emailAddress"]')
        await workEmail.addValue('testsqaurd@com.ua')

        const list = await $('#country')
        await list.click()
        await browser.pause(2000)
        const ukraineOption = await $('#country option[value="UA"]');
        await ukraineOption.click();

        const checkbox = await $('.flex-shrink-0.mr-3.mt-2.flex-self-start')
        await checkbox.scrollIntoView()
        await checkbox.click()

        GithubNewstler.clickOnSubmitBtn()
        await browser.pause(2000)

        const text = await $('#hero-section-brand-heading')
        await browser.pause(2000)

        expect(text).toHaveText('Thanks for subscribing!')
        await browser.pause(2000)

    });


    it("should navigate to search page and search Act", async () => {
            await browser.url('https://github.com/');
            GithubMainPage.clicklOnSearchBtn()
        
            GithubMainPage.searchInner.addValue("Act")
            await browser.pause(2000)
            await browser.keys('Enter');
        
            await browser.pause(2000)
            const urlAct = await $('a[href="/nektos/act"]')
            expect(urlAct).toHaveText('Act')

    });

    it("should go to pricing and check headers", async () => {
        await browser.url('https://github.com/');
        GithubMainPage.clicklOnPricingHeader()
        await browser.pause(2000)
        const header = await $('h1.h2-mktg');
        await expect(header).toHaveText('Try the Copilot-powered platform');
    
        GithubPricing.compareAllFeatures.scrollIntoView()
        await browser.pause(2000)
        GithubPricing.clickOncompareAllFeatures()

        const header2 = await $('.h1.h1')
        await header2.scrollIntoView()
        await browser.pause(2000)
        expect(header2).toHaveText('Compare features')

    });
    

})
