const express = require('express');
const app = express();
const path = require('path');



app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./src/routes/rutas'))
app.listen(3000, () => {
    console.log('Run in http://localhost:3000')
});