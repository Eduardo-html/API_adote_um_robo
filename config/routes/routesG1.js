module.exports = (app, scraper)=>{
    app.get('/g1/:busca', (req, resp)=>{
        scraper
            .scrapeG1(req.params.busca)
            .then(data=>{
                resp.send(...data)           
            })
            .catch(err => {
                console.log(err)
            })
        
    })
}


