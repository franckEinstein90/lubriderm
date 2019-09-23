const express = require('express');
const helmet = require('helmet'); //security
const indexRouter = require('./routes/index');


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
app.use('/', indexRouter);

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
