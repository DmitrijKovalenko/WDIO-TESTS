class GithubMainPage {
    
    get signupBtn() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}

    async clickSignUpBtn() {
        await this.signupBtn.click()
    }

    get start30Days() { return $('.btn-mktg.mt-4') }

    async clickstart30Days() {
        await this.start30Days.click()
    }

    get enterprise (){return $('a[href="/enterprise/trial/start?ref_cta=Enterprise+Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan"]')}
    
    async clickEnterprise() {
        await this.enterprise.click()
    }

    get subscribe() { return $('a[href="https://resources.github.com/newsletter/"]') }

    async clickOnSubscribe() {
        
        await this.subscribe.click()
    }

    get pricingBtn() { return $('a.Link--secondary[href="/pricing"]') }
    
    async clickPricingBtn() {
        await this.pricingBtn.click()
    }

    get searchSpan(){return $('/html/body/div[1]/div[3]/header/div/div[2]/div/div/qbsearch-input')}
    
    async clicklOnSearchBtn() {
        await this.searchSpan.click()
    }

    get searchInner() { return $('#query-builder-test') }

    async clicklOnSearchInner() {
        await this.searchInner.click()
    }

    get pricingHeader() { return $('a[href="https://github.com/pricing"]') }
    
    async clicklOnPricingHeader() {
        await this.pricingHeader.click()
    }


    
}
export default new  GithubMainPage()