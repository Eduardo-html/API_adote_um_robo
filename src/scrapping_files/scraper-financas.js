const puppeteer = require('puppeteer');

const scrapeG1 = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://investnews.com.br/financas/`);

    const result = await page.evaluate(()=>{
        const arr = [];
        document.querySelectorAll('li.mvp-blog-story-wrap')
            .forEach( element => {
                //arr.push( element.outerHTML )
                
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

  console.log(result);
};

scrapeG1();
/* const scrapeFolha = async (param) => {
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
module.exports.scrapeFolha = scrapeFolha; */

/* {
    document.querySelectorAll('.bastian-feed-item > div > div')
    manchete: element.querySelector(".feed-post-body-title gui-color-primary gui-color-hover ").innerText,
    //link: element.querySelector(".feed-post-link gui-color-primary gui-color-hover").getAttribute('href'),
    //description: element.querySelector(".feed-post-body-resumo").innerText,
    //img: element.querySelector( "bstn-fd-picture-image").getAttribute('srcset')
  } */

  //if ( element.dataset.type != "cobertura" )