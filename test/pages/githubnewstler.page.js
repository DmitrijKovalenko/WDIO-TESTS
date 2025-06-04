class GithubNewstler {

    get submitBtn() {
        return $('button[class*="Button--primary"][type="submit"]');
    }
    
    async clickOnSubmitBtn() {
        await this.submitBtn.click();
    }
    
}
export default new GithubNewstler()