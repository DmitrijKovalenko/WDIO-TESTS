import { browser, expect } from '@wdio/globals'
import MainPage from './../pages/main.page.js'
import GameDevTopratesPage from '../pages/gamedevToprates.page.js'
import GameDevPage from './../pages/gamedev.page.js'



describe("Webdriverio main page", () => {
    xit('done', async () => {
        await browser.url('https://dou.ua')
        
        await MainPage.clickOnBanBtn()
        await browser.pause(2000)

        await MainPage.clickOnForumBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)
    
        await GameDevPage.clickOnTopGamesRateLink()
        expect(GameDevTopratesPage.title).toHaveValue("Матеріали на тему «топ ігор місяця»")
        
    })
})

