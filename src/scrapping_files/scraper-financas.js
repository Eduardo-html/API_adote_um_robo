const puppeteer = require('puppeteer');

const scrapeFinancas = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`https://investnews.com.br/financas/`);

	const result = await page.evaluate(() => {
		var data = new Date();
		var dia = data.getDate();
		var mes = data.getMonth();
		var ano = data.getFullYear();

		let formatedDate = dia + '/' + (mes+1) + '/' + ano;

		const arr = [];
		document.querySelectorAll('li.mvp-blog-story-wrap')
			.forEach(element => {
				arr.push({
					title: element.querySelector("div.mvp-blog-story-text > h2").innerText,
					desc: element.querySelector("div.mvp-blog-story-text > p").innerText,
					img: element.querySelector("div.mvp-blog-story-img > img").getAttribute('src'),
					link: element.querySelector("a").getAttribute('href'),
					date: formatedDate
				})
			});

		return arr;
	});
	browser.close();

	return result;
};


module.exports = scrapeFinancas;