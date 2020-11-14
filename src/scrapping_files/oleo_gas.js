const puppeteer = require('puppeteer');

const petronoticiasScrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://petronoticias.com.br/category/og/');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('div#main > div.box')
      .forEach( element => {
        if (count >= 3 )
          return;
        else {
          articles.push({

            title: element.querySelector('div.post > h2 > a').getAttribute('title'),

            desc: element.querySelector('div.post > div.entry > p').innerText,

            img: element.querySelector('div.post > a > img').getAttribute('src'),

            link: element.querySelector('div.post > a').getAttribute('href')
          });

          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

module.exports = petronoticiasScrape;