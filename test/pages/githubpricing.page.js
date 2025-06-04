class GitHubPricing {
    get compareAllFeatures(){return $("#compare-features");} 

    async clickOncompareAllFeatures() {
    await this.compareAllFeatures.click()
    }

}
export default new GitHubPricing()