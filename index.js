const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, '/public/edit.html'));
});	
	
app.listen(port, ()=> console.log(`Example app listening on port ${port}`));


