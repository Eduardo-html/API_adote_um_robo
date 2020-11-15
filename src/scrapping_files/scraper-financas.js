const puppeteer = require('puppeteer');

module.exports = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`https://investnews.com.br/financas/`);

	const result = await page.evaluate(() => {
		const articles = [];
		let count = 0;

		document.querySelectorAll('li.mvp-blog-story-wrap')
			.forEach(element => {
				if ( count >= 3 )
					return;
				else {
					articles.push({
						title: element.querySelector("div.mvp-blog-story-text > h2").innerText,
						desc: element.querySelector("div.mvp-blog-story-text > p").innerText,
						img: element.querySelector("div.mvp-blog-story-img > img").getAttribute('src'),
						link: element.querySelector("a").getAttribute('href')
					})
				}
				count++;
			});

		return articles;
	});
	browser.close();

	return result;
};