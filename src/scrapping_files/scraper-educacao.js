const puppeteer = require('puppeteer');

const scrapeEducacao = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://veja.abril.com.br/noticias-sobre/educacao/`);

    const result = await page.evaluate(()=>{
        const arr = [];
        document.querySelectorAll('div.list-item')
            .forEach( element => {
                    arr.push(
                        {
                            manchete: element.querySelector(".title").innerText,
                            link: element.querySelector("div.row > div > a").getAttribute('href'),
                            description: element.querySelector(".description").innerText,
                            img: element.querySelector("img").getAttribute('src')
                          }
                    )
            });

        return arr;
    });
    browser.close();

  return result;
};