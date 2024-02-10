import { Browser } from "puppeteer"

const puppeteer = require('puppeteer-extra')

const stealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(stealthPlugin())

const { executablePath } = require('puppeteer')

const url = 'https://bot.sannysoft.com/'

const main = async () => {

	const browser: Browser = await puppeteer.launch({ headless: true, executablePath: executablePath() })
	console.log('browser open')

	const page = await browser.newPage()

	await page.goto(url)

	await page.screenshot({ path: 'puppeteer.png' })

	await browser.close()

}
main()