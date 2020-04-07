const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/Salaire', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/Salaire', function (req, res) {
            var name = req.body.name;
            var name2 = req.body.name2;
            var age = req.body.age;
            var slr = req.body.slr;


            fs.readFile('data.json', 'utf-8', function (err, data) {
                if (err) throw err;

                var arrayOfObjects = JSON.parse(data);
                arrayOfObjects.companies.push({
                    matricule: arrayOfObjects.companies.length +1,
                    name: name,
                    name2: name2,
                    age: age,
                    slr: slr
                });

                console.log(arrayOfObjects);

                fs.writeFile('data.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
                    if (err) throw err;
                    console.log('Done!');
                    res.sendFile(__dirname + "/index.html");

                });
            });
    
})


app.get('/userss', function (req, res) {

    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) throw err;

        var arrayOfObjects = JSON.parse(data);

        res.send(arrayOfObjects);
        console.log(arrayOfObjects);

    });
})

app.listen('3000',function(){
    console.log("Server listning on port 3000...");
    
})