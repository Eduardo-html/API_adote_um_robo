const puppeteer = require('puppeteer');

module.exports = scrape = async (param) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`https://br.tradingview.com/markets/stocks-brazilia/${param}/`);
  
  const result = await page.evaluate(() => {
    let count = 0;
    const stocklist = [];

    document.querySelectorAll('body table tbody tr')
      .forEach( stock => {
        if ( count >= 10 )
          return;
        else {
          stocklist.push({
            stockCode: stock.querySelector("a.tv-screener__symbol").innerText,
            title: stock.querySelector("span.tv-screener__description").innerText,
            link: stock.querySelector("a.tv-screener__symbol").getAttribute('href'),
            price: stock.querySelector( "[data-field-key='close'] > span" ).innerText,
            recommendation: stock.querySelector( "[data-field-key='Recommend.All'] > span" ).innerText,
            volume: stock.querySelector( "[data-field-key='volume']" ).innerText,
            marketCap: stock.querySelector( "[data-field-key='market_cap_basic']" ).innerText,
            priceEarnings: stock.querySelector( "[data-field-key='price_earnings_ttm']" ).innerText,
            earningsPerShare: stock.querySelector( "[data-field-key='earnings_per_share_basic_ttm']" ).innerText
          });
        }
        count++;
      });
    return stocklist;
  });
  browser.close();

  return result;
};

/* SETORES NA URI
 * sectorandindustry-sector/finance (finanças)
 * sectorandindustry-sector/retail-trade (varejo)
 * sectorandindustry-sector/health-services (saude)
 * sectorandindustry-sector/distribution-services (logística)
 * sectorandindustry-industry/oil-gas-production (óleo e gás)
 * sectorandindustry-industry/other-transportation (automobilistica)
 */