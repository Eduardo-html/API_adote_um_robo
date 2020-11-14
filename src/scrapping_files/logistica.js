const puppeteer = require('puppeteer');

const newtradeScrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://newtrade.com.br/noticias/logistica/feed/');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('item')
      .forEach( element => {
        if (count >= 3 )
          return;
        else {
          articles.push({

            title: element.querySelector('title').innerText,

            desc: element.querySelector('description > p').innerText,

            img: element.querySelector('description > img').getAttribute('src'),

            link: element.querySelector(' item > description > p > a ').getAttribute('href')
          });

          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

module.exports = newtradeScrape;