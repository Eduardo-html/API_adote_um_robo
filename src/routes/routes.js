const route = require('../funcRoutes')


module.exports = (app) => {
  route.veja(app, 'saude')
  route.veja(app, 'varejo')
  route.veja(app, 'imobiliario')
}
