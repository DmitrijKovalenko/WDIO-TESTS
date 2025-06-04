import MainPage from './../pages/main.page.js'
import JobPage from '../pages/job.page.js'


describe("Dou.ua main page", () => {
    xit('done', async () => {
        await browser.url('https://dou.ua')
        
        await MainPage.clickOnSalaries()
        await browser.pause(2000)

        const quarter = await $('#q1')
        expect(quarter).toHaveText("I Квартиль")

        await MainPage.clickOnJobBtn()
        await browser.pause(2000)
        await JobPage.clickOnSearchBtn()

        const fastJump = await $('.example');
        const text = await fastJump.getText()
        await expect(text).toContain("Швидкий перехід");

        await MainPage.clickOnCalendarBtn()
        const dontMiss = await $('.b-adv-events h4')
        await expect (dontMiss).toHaveText("Не пропустіть")

        const comments = await $('.b-sidebar-comments h3')
        await expect (comments).toHaveText("Коментарі")


        
    })
})