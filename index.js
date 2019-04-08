const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');


const port = process.env.PORT || 3000;
const app = express();

var hbs = exphbs.create({
    defaultLayout: 'main', 
    partialsDir: [
        'views/partials'
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req, res){
    res.render('home');
});	
app.use(express.static('public/'));	
app.listen(port, ()=> console.log(`Example app listening on port ${port}`));


