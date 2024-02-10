import { Browser } from "puppeteer"
const fs = require('fs')
const puppeteer = require('puppeteer')

const url = 'https://www.svt.se/'

const main = async () => {

	const browser: Browser = await puppeteer.launch({ headless: true })
	console.log('browser open')

	const page = await browser.newPage()

	await page.goto(url)

	await page.click('.LatestNews__showMore___sJcWj')

	const data = await page.evaluate((url) => {

		const arr = Array.from(document.querySelectorAll('.LatestNewsItem__root___oHHgk'))
		const data = arr.map((i: any) => ({
			title: i.querySelector('.LatestNewsItem__title___GFcfW').innerText,
			url: url + i.querySelector('.LatestNewsItem__link___ERU4W').getAttribute('href'),
			category: i.querySelector('.LatestNewsItem__section___FRr4a').innerText,
			published: i.querySelector('a span span time').getAttribute('datetime')
		}))
		return data
	}, url)
	console.log(data)


	await browser.close()
	console.log('done!')
	fs.writeFile('svt-latest.json', JSON.stringify(data), (err: any) => {
		if (err) throw err
		console.log('The file has been saved!')
	})
}
main()