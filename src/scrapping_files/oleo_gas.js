const puppeteer = require('puppeteer');

const globoScrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://g1.globo.com/busca/?q=óleo+e+gas&species=notícias');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('section > div > div > ul > li')
      .forEach( element => {
        if( element.classList.contains('widget--info') && !element.classList.contains('widget--ad') ) {
          if (count >= 3 )
            return;
          else {
            articles.push({

              title: element.querySelector('.widget--info__text-container > a > .widget--info__title').innerText,
                
              desc: element.querySelector('.widget--info__text-container > a > .widget--info__description').innerText,

              img: element.querySelector('.widget--info__media-container > a > img').getAttribute('src'),

              link: element.querySelector('.widget--info__text-container > a').getAttribute('href')
            
            });

            count++;
          }
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

const moneytimeScrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://www.moneytimes.com.br/?s=setor+oleo+e+gas');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('main > div.news-list > div.news-item')
      .forEach( element => {
        if (count >= 3 )
          return;
        else {
          articles.push({

            title: element.querySelector('div > h2 > a').innerText,

            img: element.querySelector('figure > a > img').getAttribute('data-src'),

            link: element.querySelector('figure > a').getAttribute('href')

          });

          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

const petronoticiasScrape = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});

  const page = await browser.newPage();

  await page.goto('https://petronoticias.com.br/');
  
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

            img: element.querySelector('div.post > a > img').getAttribute('src'),

            link: element.querySelector('div.post > a').getAttribute('href'),

            desc: element.querySelector('div.post > div.entry > p').innerText

          });

          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  return result;
};

module.exports = [ globoScrape , moneytimeScrape , petronoticiasScrape ];