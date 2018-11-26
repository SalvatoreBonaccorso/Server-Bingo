
var assert = require('assert');
var request = require('supertest')
var app = require('../app')

describe("vogliamo testare l'estrazione", function() {
    it('voglio verificare le API extract', function(done) {
        //request simula il comportamento di una chiamata API
        request(app)
        .get('/extract')
        .expect(200) // verifico lo status
        // lancia una funzione di callback dove da parametro inseriamo
        // il prima valore un eventuale errore il secondo parametro è la risposta 
        .end(function(err,res){
            if (err) return done(err);
            assert.equal(typeof res.body, 'number');
            done(err);
        });
    });

    it('voglio verificare il corretto funzionamento di numbers', function(done) {
        //request simula il comportamento di una chiamata API
        request(app)
        .get('/numbers/4')
        .expect(200) // verifico lo status
        // lancia una funzione di callback dove da parametro inseriamo
        // il prima valore un eventuale errore il secondo parametro è la risposta 
        .end(function(err,res){
            if (err) return done(err);
            assert.equal(typeof res.body.extracted, 'boolean');
            done(err);
        });
    });

    it('voglio verificare il corretto funzionamento di numbers', function(done) {
        //request simula il comportamento di una chiamata API
        request(app)
        .get('/numbers/pippo')
        .expect(400) // verifico lo status
        // lancia una funzione di callback dove da parametro inseriamo
        // il prima valore un eventuale errore il secondo parametro è la risposta 
        .end(function(err,res){
            done(err);
        });
    });

    it('voglio verificare il corretto funzionamento di numbers', function(done) {
        //request simula il comportamento di una chiamata API
        request(app)
        .get('/numbers')
        .expect(200) // verifico lo status
        // lancia una funzione di callback dove da parametro inseriamo
        // il prima valore un eventuale errore il secondo parametro è la risposta 
        .end(function(err,res){
            if (err) return done(err);
            assert.equal(typeof res.body, 'object');
            assert.equal(res.body.length, 1);
            done(err);
        });
    });
});
       

//done("é successo qualcosa che non và");
//done(); // questo done vuol dire che è andato tutto a buon fine