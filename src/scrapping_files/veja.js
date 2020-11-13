const puppeteer = require("puppeteer");

const veja = async (params) => {
  const path = {
    varejo: "noticias-sobre/comercio/",
    saude: "saude/",
    imobiliario: "noticias-sobre/mercado-imobiliario/"
  }
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(
    `https://veja.abril.com.br/${path[params]}`
  );
  const dimensions = await page.evaluate(() => {
    const link = [];
    const manchete = [];
    const img = [];
    const text = [];
    const final = [];

    document.querySelectorAll(".media img")
      .forEach((item) => img.push(item.src));
    document.querySelectorAll("span + a h2")
    .forEach((item) => {
      manchete.push(item.innerText);
    });
    document.querySelectorAll("span + a").forEach((item) => {
      link.push(item.href);
    });

    document
      .querySelectorAll(".description")
      .forEach((item) => text.push(item.innerText));

    for (let i = 0; i < 3; i++) {
      final.push({
        title: manchete[i],
        desc: text[i],
        img: img[i],
        link: link[i]
      });
    }

    return final;
  });
  await browser.close();
  return dimensions;
}

module.exports = veja;