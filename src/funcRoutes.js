const scrapper = require('./puppeteer-test_cases/veja')

exports.veja = (app, rota) => {
  app.get(`/${rota}`, async (req, res) => {
    const response = await scrapper(`${rota}`)
    res.send(response)
  })
}