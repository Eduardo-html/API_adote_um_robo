const puppeteer = require('puppeteer');

const scrape = async (param) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`https://g1.globo.com/busca/?q=${param}`);
  
  const result = await page.evaluate(() => {
    const articles = [];
    document.querySelectorAll('section > div > div > ul > li')
      .forEach( element => {
        if( element.classList.contains('widget--info') && !element.classList.contains('widget--ad') )
          articles.push( element.outerHTML )
      });
    
    return articles;
  });
  browser.close();

  return result;
};
