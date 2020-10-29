module.exports = (app, scraper)=>{
    app.get('/folha/:busca', (req, resp)=>{
        scraper
            .scrapeFolha(req.params.busca)
            .then(data=>{
                resp.send(...data)           
            })
            .catch(err => {
                console.log(err)
            })
        
    })
}


