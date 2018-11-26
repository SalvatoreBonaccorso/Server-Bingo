
var assert = require('assert');
var request = require('supertest')
var dice = require('./app')


describe("vogliamo testare l'estrazione", function() {
    it('voglio verificare le API extract', function(done) {
        //request simula il comportamento di una chiamata API
        request(app)
        .get('/extract')
        .expect(200) // verifico lo status
        // lancia una funzione di callback dove da parametro inseriamo
        // il prima valore un eventuale errore il secondo parametro è la risposta 
        .end(function(err,res){
if (err)
        });
    });
});
        //done("é successo qualcosa che non và");
        //done(); // questo done vuol dire che è andato tutto a buon fine