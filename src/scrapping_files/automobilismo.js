const puppeteer = require('puppeteer');

const globoScrape = async (param) => {
  const browser = await puppeteer.launch();

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

            img: element.querySelector('picture.bstn-fd-cover-picture > img').getAttribute('src'),

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

const moneytimeScrape = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://www.moneytimes.com.br/tag/setor-automotivo/');
  
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

const vejaScrape = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://veja.abril.com.br/noticias-sobre/setor-automotivo/');
  
  const result = await page.evaluate(() => {
    let count = 0;
    const articles = [];

    document.querySelectorAll('div#infinite-list > div')
      .forEach( element => {
        if ( !element.className.includes('radar') ) {
          if (count >= 3 )
            return;
          else {
            articles.push({

              title: element.querySelector('h2').innerText,
  
              img: element.querySelector('figure > img').getAttribute('src'),
  
              link: element.querySelector('div > div > a').getAttribute('href'),
  
              desc: element.querySelector('span.description').innerText
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

module.exports = [ globoScrape , moneytimeScrape , vejaScrape ];