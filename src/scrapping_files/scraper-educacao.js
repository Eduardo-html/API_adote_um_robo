const puppeteer = require('puppeteer');

const scrapeEducacao = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://veja.abril.com.br/noticias-sobre/educacao/`);

    const result = await page.evaluate(()=>{

        var data = new Date();
		var dia = data.getDate();
		var mes = data.getMonth();
		var ano = data.getFullYear();

        let formatedDate = dia + '/' + (mes+1) + '/' + ano;
        
        const arr = [];
        document.querySelectorAll('div.list-item')
            .forEach( element => {
                    arr.push(
                        {
                            manchete: element.querySelector(".title").innerText,
                            link: element.querySelector("div.row > div > a").getAttribute('href'),
                            description: element.querySelector(".description").innerText,
                            img: element.querySelector("img").getAttribute('src'),
                            date: formatedDate
                          }
                    )
            });

        return arr;
    });
    browser.close();

  return result;
};

module.exports = scrapeEducacao;

