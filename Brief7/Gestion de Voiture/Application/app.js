
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


app.get('/contactus', function (req, res) {
    res.sendFile(__dirname + "/contactus.html");
});

app.get('/client', (req, res) => {
	res.render('client', { data });
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







//contactus========================================================================================================
app.post('/contactus', function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var message = req.body.message;



fs.readFile('./public/data/contactus.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
        fname: fname,
		lname: lname,
        email: email,
        message: message,
	});

    console.log(arrayOfObjects);

    fs.writeFile('./public/data/contactus.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/contactus.html");

    });
});

});
app.get('/contactusdata', function (req, res) {

    fs.readFile('./public/data/contactus.json', 'utf-8', function (err, data) {
        if (err) throw err;
    
        var arrayOfObjects = JSON.parse(data);
      
        res.send(arrayOfObjects);
        console.log(arrayOfObjects);
        
    });
    });







app.listen(8080,function(){
        // run server on http://localhost:8080/
    console.log("run server on http://localhost:8080/");

});