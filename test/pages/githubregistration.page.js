class GithubRegistration{

    get marketingCheckbox(){return $('.FormControl-checkbox');} 

    async clickOnMarketingCheckbox() {
    await this.marketingCheckbox.click()
    }
    
    get continueBtn() { return $('button.js-octocaptcha-load-captcha.signup-form-fields__button') }
    
    async clickContinueBtn() {
        await this.continueBtn.click()
    }
    
    get pricingBtn() { return $('a.Link--secondary[href="/pricing"]') }
    
    async clickPricingBtn() {
        await this.pricingBtn.click()
    }

    //get enterpriseBtn(){return $('')}
}


export default new GithubRegistration()