import { Browser } from "puppeteer"

const puppeteer = require('puppeteer-extra')

const stealthPlugin = require('puppeteer-extra-plugin-stealth')

puppeteer.use(stealthPlugin())

const { executablePath } = require('puppeteer')

const url = 'https://clubactivity.netlify.app/'

const main = async () => {

	const browser: Browser = await puppeteer.launch({ headless: false, executablePath: executablePath() })
	console.log('browser open')

	const page = await browser.newPage()

	await page.goto(url)
	await new Promise((resolve) => setTimeout(resolve, 2000))
	await page.type('#mail', 'sylvesterhurst4782@google.com')
	await page.type('#password', '!"QW12qw')
	await page.click("button[type='submit']")
	await new Promise((resolve) => setTimeout(resolve, 5000))
	await browser.close()

}
main()
