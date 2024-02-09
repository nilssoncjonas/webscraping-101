import { Browser } from "puppeteer"

const puppeteer = require('puppeteer')

const url = 'https://books.toscrape.com/'

const main = async () => {

	const browser: Browser = await puppeteer.launch({ headless: false })
	console.log('browser open')

	const page = await browser.newPage()

	await page.goto(url)

	await browser.close()
	console.log('done!')
}
main()