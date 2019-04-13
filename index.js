const express = require('express');

const router = express.Router();
router.param(function(param, option){
    return function(req, res, next, val){
        if (val == option){next();}
        else {res.sendStatus(403);}
  }
});

router.param('id', 1337);       

const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout: 'main', 
    partialsDir: [
        'views/partials'
    ]
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


router.get('/', function (req, res){
    res.render('home');
});	

app.use(router);

var publicFolderOptions = {
    dotfiles: 'ignore', 
    etag: false, 
    extensions:['htm', 'html'], 
    index: false, 
    maxAge: '1d', 
    redirect: false, 
    setHeaders: function(res, path, stat){
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static('public/', publicFolderOptions));	
app.listen(port, ()=> console.log(`lubriderm listening on port ${port}`));


