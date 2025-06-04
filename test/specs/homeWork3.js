import { browser, expect } from "@wdio/globals";
describe("Github main page", () => {
    it("should navigate to search page,type iphone and check title", async () => {
        await browser.url('https://github.com/');
        const searchSpan = await $('/html/body/div[1]/div[3]/header/div/div[2]/div/div/qbsearch-input');
        await searchSpan.click() 
        const searchInner = await $('#query-builder-test')
        await searchInner.addValue("iphone")
        await browser.pause(2000)
        const searchGitHub = await $('.ActionListItem-description QueryBuilder-ListItem-trailing')
        await browser.keys('Enter');
        await browser.pause(2000)
        const url = await browser.getUrl()
        await expect(url).toContain("iphone")
    
    
    });
    it("should not login with wrong password", async () => {
        await browser.url('https://github.com/');
        const loginButton = await $('.d-flex.d-lg-none > a[href="/login"]')
        loginButton.click()
        const login = await $('#login_field')
        login.addValue("DmitrijKovalenko")

        const password = await $('#password')
        password.addValue("123")

        const signInButton = await $('.btn.btn-primary.btn-block.js-sign-in-button')
        signInButton.click()

        const alert = await $('.js-flash-alert')
        expect(alert).toHaveText('Incorrect username or password.')


    
    });

    it("should check empty form for registration", async () => {
        await browser.url('https://github.com/');
        let signUpForGitHub = await $('//button[contains(@class, "js-hero-action")]')
        await signUpForGitHub.click()
        const nameOfForm = await $('#signup-form-fields')
        await expect(nameOfForm).toHaveText("Sign up to GitHub");
        console.log("nameOfForm is :" + nameOfForm)

    });
    it('should display the GitHub logo', async () => {
        await browser.url('https://github.com');
        const logo = await $('a[aria-label="Homepage"]');   
        await logo.scrollIntoView();
    
        await expect(logo).toBeDisplayed();
    });
    

    it('should display "Start your 45-day free trial of Enterprise Server', async () => {
        await browser.url('https://github.com');
        const pricing = await $('a[href="https://github.com/pricing"]')
        await browser.pause(2000)
        await pricing.click()
        const startFree = await $('.btn-mktg.mt-4')
        await browser.pause(2000)
        await startFree.click()
        const enterprise = await $('a[href="https://enterprise.github.com/trial?source=pricing-card-enterprise"]')
        await enterprise.scrollIntoView()
        await enterprise.click()
        await browser.pause(2000)
        const text = await $('.trial-requests-controller new-action page-responsive site-subpage')
        expect(text).toHaveText("Start your 45-day free trial of Enterprise Server")


    });
    });


