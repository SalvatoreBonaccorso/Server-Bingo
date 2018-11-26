var exp = require('express');
var bingo = require('bingo-extract');

var app = exp();
// mi ritorna i numeri estratti
app.get('/extract', function (req, res) {
    res.json(bingo.extract());
})
// riavvia una nuova partita
app.get('/reset', function (req, res) {
    bingo.reset();
    res.json();
})
// verifico che un numero sia uscito o meno
app.get('/numbers/:number', function (req, res) {
    var number=parseInt(req.params.number);
    res.json({extracted:bingo.getExtracted().indexOf(number) >=0});
})
// mi ritorna tutti i numeri estratti/non estratti in base a
// req.query , di default mi ritorna gli estratti
app.get('/numbers', function (req, res) {
// se esiste la req.query e se è falso mi ritorna i numeri che non sono ancora usciti
    if (req.query.extracted && req.query.extracted ==="false"){
        return res.json(bingo.getBag());
    }
    // altrimenti se la req.query è true mi ritorna tutti i numeri estratti
    return res.json(bingo.getExtracted());
})
app.listen(3001);

module.exports = app;