const puppeteer = require('puppeteer');

const scrape = async (param) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`https://br.tradingview.com/markets/stocks-brazilia/sectorandindustry-sector/${param}/`);
  
  const result = await page.evaluate(() => {
    let count = 0;
    const stocklist = [];

    document.querySelectorAll('body table tbody tr')
      .forEach( stock => {
        if (count >= 10 )
          return;
        else 
          stocklist.push(stock.outerHTML);
        count++;
      });
    return stocklist;
  });
  browser.close();

  return result;
};

/* SETORES NA URI
 * finance (finanças)
 * retail-trade (varejo)
 * health-services (saude)
 * oil-gas-production (óleo e gás)
 * distribution-services (logística)
 */