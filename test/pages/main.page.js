class MainPage{

    get forumBtn() { return $('a[href="https://dou.ua/forums/"]') }
    get banBtn() { return $('a[href="https://dou.ua/lenta/"]') }
    get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get searchInput() { return $('#txtGlobalSearch') }
    get gameDevBtn() { return $('.menu-site__gamedev') }
    get relocateBtn() { return $('site__relocate') }
    get jobBtn() { return $('a[href="https://jobs.dou.ua/"]') }
    get calendarBtn() { return $('a[href="https://dou.ua/calendar/"]')}
    
    async clickOnForumBtn() {
        await this.forumBtn.click()
    }
    async clickOnBanBtn() {
        await this.banBtn.click()
    }
    async clickOnGameDevBtn() {
        await this.gameDevBtn.click()
    }
    async clickSearchInput(value) {
        await this.searchInput.addValue(value)
    }
    async clickOnSalaries() {
        await this.salariesBtn.click()
    }

    async clickOnJobBtn() {
        await this.jobBtn.click()
    }

    async clickOnRelocateBtn() {
        
        await this.relocateBtn.click()
    }

    async clickOnCalendarBtn() {
        
        this.calendarBtn.click()
    }
   


}


export default new  MainPage()













// class loginPage{
//     get username() {
//         return $('#username')
//     }
//     get password() {
//         return $('#password')
//     }
//     get loginButton(){
//         return $('.radius')
//     }
//     async setUsernameInput(value) {
//         await this.username.addValue(value)
//     }    

//     async setPasswordInput(value) {
//         await this.password.addValue(value)
//     }
//     async clickOnLoginBtn() {
//         await this.loginButton.click()
//     }

// }
//     export default new loginPage()