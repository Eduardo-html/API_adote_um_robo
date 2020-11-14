const puppeteer = require('puppeteer');

const scrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://autoesporte.globo.com/mercado/');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('div.bastian-page > div > div ')
      .forEach( element => {
        if (count >= 3 )
          return;
        else {
          articles.push({
            title: element.querySelector('div.feed-post-body-title > div > a').innerText,

            desc: element.querySelector('div.feed-post-body-resumo').innerText,

            img: element.querySelector('picture > img').getAttribute('src'),

            link: element.querySelector('a').getAttribute('href')
          });
          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

module.exports = scrape;