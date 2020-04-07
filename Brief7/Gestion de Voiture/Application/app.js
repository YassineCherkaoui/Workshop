/*jshint esversion: 6 */

const express= require('express');
const body_parser= require('body-parser');
const fs= require('fs');
const path = require('path');
const app = express();
app.use(body_parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/client', function(req, res){
    res.sendFile(__dirname + "/list.html");
});
app.get('/contract', function(req, res){
    res.sendFile(__dirname + "/contract.html");
});
app.get('/reservation', function(req, res){
    res.sendFile(__dirname + "/Reservation.html");
});





//contract=================================================================================
app.post('/contract',function(req, res){
    var num = req.body.num;
    var locataire = req.body.locataire;
    var matriculation = req.body.matriculation;
    var dateentre = req.body.dateentre;
    var datesortie = req.body.datesortie;
    var nbrJour = req.body.nbrJour;
    var odomaetre = req.body.odomaetre;
    var montant = req.body.montant;
    var rester = req.body.rester;


fs.readFile('./public/data/contract.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        num: arrayOfObjects.length +1,
		locataire: locataire,
        matriculation: matriculation,
        dateentre: dateentre,
        datesortie: datesortie,
        nbrJour: nbrJour,
        odomaetre: odomaetre,
        montant: montant,
        rester: rester,
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/contract.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/Contract.html");

    });
});

});
app.get('/contractdata',function(req, res){

    fs.readFile('./public/data/contract.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})
//client========================================================================================================
app.post('/client',function(req, res){
    var name = req.body.name;
    var Cin = req.body.Cin;
    var permis = req.body.permis;
    var DatePirmis = req.body.DatePirmis;
    var ville = req.body.ville;
    var Phone = req.body.Phone;


fs.readFile('./public/data/client.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        name: name,
		Cin: Cin,
        permis: permis,
        DatePirmis: DatePirmis,
        ville: ville,
        Phone: Phone
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/client.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/list.html");

    });
});

});
app.get('/clientdata',function(req, res){

    fs.readFile('./public/data/client.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})






//Reservation=================================================================================
app.post('/reservation',function(req, res){
    var client = req.body.client;
    var véhicule = req.body.véhicule;
    var du = req.body.du;
    var au = req.body.au;
    var etat = req.body.etat;
    var prixjour = req.body.prixjour;



fs.readFile('./public/data/Reservation.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
		client: client,
        véhicule: véhicule,
        du: du,
        au: au,
        etat: etat,
        prixjour: prixjour,
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/Reservation.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/Reservation.html");

    });
});

});
app.get('/reservationdata',function(req, res){

    fs.readFile('./public/data/Reservation.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})





            
            
                      
                       
                       






app.listen(8080,function(){
        // run server on http://localhost:8080/
    console.log("Server listing on port 8080...");

});