const puppeteer = require('puppeteer');

const scrapeG1 = async (param) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://g1.globo.com/busca/?q=${param}`);

    const result = await page.evaluate(()=>{
        const arr = [];
        document.querySelectorAll('section > div > div > ul > li')
            .forEach( element => {
                if ( element.classList.contains('widget--info') && !element.classList.contains('widget--ad'))
                    arr.push( element.outerHTML )
            });

        return arr;
    });
    browser.close();

  return result;
};

const scrapeFolha = async (param) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://search.folha.uol.com.br/search?q=${param}&periodo=todos&sd=&ed=&site=todos`);

    const result = await page.evaluate(()=>{
        const arr = [];
        document.querySelectorAll('.u-list-unstyled')

            .forEach( element => {
                if ( element.children[0].children[0].textContent != "Ao Vivo - Mercado")
                    arr.push( element.outerHTML )
            });

        return arr;
    });
    browser.close();

  return result;
};

module.exports.scrapeG1 = scrapeG1;
module.exports.scrapeFolha = scrapeFolha;