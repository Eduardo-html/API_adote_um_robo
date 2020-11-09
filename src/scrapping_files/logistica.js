const puppeteer = require('puppeteer');

const globoScrape = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://g1.globo.com/busca/?q=logística+setor&species=notícias');
  
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
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://www.moneytimes.com.br/tag/logistica/');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('main > div.element-list > div.element-item')
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

const newtradeScrape = async () => {
  const browser = await puppeteer.launch();

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

            img: element.querySelector('description > img').getAttribute('src'),

            link: element.querySelector('link').innerText,

            desc: element.querySelector('description > p').innerText

          });

          count++;
        }
      });
    
    return articles;
  });
  browser.close();

  console.log(result);
  return result;
};

module.exports.globoScrape = globoScrape;
module.exports.moneytimeScrape = moneytimeScrape;
module.exports.newtradeScrape = newtradeScrape;