
const express= require('express');
const body_parser= require('body-parser');
const fs= require('fs');
const path = require('path');
const app = express();
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});
const readJson = fs.readFileSync('./public/data/client.json');
let data = JSON.parse(readJson);
app.set('views', './public/views'); 
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + './public/views'));






//login
app.get('/login', function(req, res){
    res.sendFile(__dirname + "/sing in.html");
});
app.get('/register', function(req, res){
    res.sendFile(__dirname + "/sign up.html");
});


app.get('/contract', function(req, res){
    res.sendFile(__dirname + "/contract.html");
});
app.get('/reservation', function(req, res){
    res.sendFile(__dirname + "/Reservation.html");
});
app.get('/facturation', function(req, res){
    res.sendFile(__dirname + "/Facturation.html");
});
app.get('/intervention', function(req, res){
    res.sendFile(__dirname + "/intervention.html");
});
app.get('/client', (req, res) => {
	res.render('client', { data });
});






//Registration validation =================================================================

app.post('/register',function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.pass;
    var re_pass = req.body.re_pass;


fs.readFile('./public/data/user.json', 'utf-8', function(err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
		name: name,
        email: email,
        pass : pass,
        re_pass : re_pass
	});

    // console.log(arrayOfObjects);

    fs.writeFile('./public/data/user.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        // res.sendFile(__dirname + "/list.html");
        res.redirect('/login')
       



    });
});

});
//Registration login =================================================================
app.post('/login',function(req, res){
    var your_name = req.body.your_name;
    var your_pass = req.body.your_pass;


fs.readFile('./public/data/user.json', 'utf-8', function(err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);


    console.log(arrayOfObjects);

    arrayOfObjects.forEach(element => {
        if (your_name === element.name && your_pass === element.pass ) {

        //  res.sendFile(__dirname + "/page1.html");
        res.redirect('/client')


        }else
        res.sendFile(__dirname + "/404.html");




    });

});

});

//Add, delet, idit client =================================================================
app.get('/add', (req, res) => {
	res.render('add');
});

app.post('/add', (req, res) => {
	const { name, Cin,permis,DatePirmis,ville,Phone} = req.body;

	data.push({ ID: data.length + 1,
		name: name,
		Cin: Cin,
		permis:permis,
		DatePirmis:DatePirmis,
		ville:ville,
		Phone:Phone
	 });
	fs.writeFileSync('./public/data/client.json', JSON.stringify(data, null, 4));
	res.redirect('client');
});


app.get('/edit/:id', (req, res) => {
	const { id } = req.params;
	let dataId;

	for (let i = 0; i < data.length; i++) {
		if (Number(id) == data[i].ID) {
			dataId = i;
		}
	}

	res.render('edit', { data: data[dataId] });
	res.redirect('client');
});


app.post('/edit/:id', (req, res) => {
	const { id } = req.params;
	const { name, Cin,permis,DatePirmis,ville,Phone } = req.body;

	let dataId;
	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	data[dataId].name = name;
	data[dataId].Cin = Cin;
	data[dataId].permis = permis;
	data[dataId].DatePirmis = DatePirmis;
	data[dataId].ville = ville;
	data[dataId].Phone = Phone;

	fs.writeFileSync('./public/data/client.json', JSON.stringify(data, null, 4));
	// res.redirect('index ');
	res.render('client',{data});
});

app.get('/delete/:id', (req, res) => {
	const { id } = req.params;

	const newData = [];
	for (let i = 0; i < data.length; i++) {
		if (Number(id) !== data[i].ID) {
			newData.push(data[i]);
		}
	}

	data = newData;
	fs.writeFileSync('./public/data/client.json', JSON.stringify(data, null, 4));
	// res.redirect('index');
	res.render('client',{data});
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


//Facturation=================================================================================
app.post('/facturation',function(req, res){
    var num = req.body.num;
    var datefacturation = req.body.datefacturation;
    var prixjour = req.body.prixjour;
    var nbrjour = req.body.nbrjour;
    var tv = req.body.tv;
    var client = req.body.client;
    var vehicule = req.body.vehicule;
    var montantTTL = req.body.montantTTL;


fs.readFile('./public/data/facturation.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        num: arrayOfObjects.length +1,
		datefacturation: datefacturation,
        prixjour: prixjour,
        nbrjour: nbrjour,
        tv: tv,
        client: client,
        vehicule: vehicule,
        montantTTL: montantTTL,
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/facturation.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/Facturation.html");

    });
});

});
app.get('/facturationdata',function(req, res){

    fs.readFile('./public/data/facturation.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})



//intervention========================================================================================================
app.post('/intervention',function(req, res){
    var type = req.body.type;
    var date = req.body.date;
    var kilometrage = req.body.kilometrage;
    var cout = req.body.cout;
    var matricule = req.body.matricule;



fs.readFile('./public/data/intervention.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        type: type,
		date: date,
        kilometrage: kilometrage,
        cout: cout,
        matricule: matricule,
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/intervention.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/intervention.html");

    });
});

});
app.get('/interventiondata',function(req, res){

    fs.readFile('./public/data/intervention.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})

//contact========================================================================================================
app.post('/contact',function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;


fs.readFile('./public/data/contact.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        name: name,
		email: email,
        subject: subject,
        message: message
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/contact.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/index.html");

    });
});

});
app.get('/contactdata',function(req, res){

    fs.readFile('./public/data/contact.json', 'utf-8', function(err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
})
//search===============================================================




            
            
                      
                       
                       






app.listen(8080,function(){
        // run server on http://localhost:8080/
    console.log("run server on http://localhost:8080/");

});