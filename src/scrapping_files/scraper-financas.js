const puppeteer = require('puppeteer');

const scrapeFinancas = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://investnews.com.br/financas/`);

    const result = await page.evaluate(()=>{
        const arr = [];
        document.querySelectorAll('li.mvp-blog-story-wrap')
            .forEach( element => {                
                    arr.push(
                        {
                            manchete: element.querySelector("div.mvp-blog-story-text > h2").innerText,
                            link: element.querySelector("a").getAttribute('href'),
                            description: element.querySelector("div.mvp-blog-story-text > p").innerText,
                            img: element.querySelector("div.mvp-blog-story-img > img").getAttribute('src')
                          }
                    )                    
            });

        return arr;
    });
    browser.close();

  return result;
};
