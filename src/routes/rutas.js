const express = require('express');
const router = express.Router();
const { v4: vv4 } = require('uuid')

const array1 = [];

router.get('/', (req, res) => {

    res.render('index', { arreglo: array1 });
});


router.get('/addPista', (req, res) => {
    res.render('addPista');
});

router.post('/save', (req, res) => {
    array1.push({ ...req.body, id: vv4() });
    res.redirect('/')
});

router.get('/entregado/:id', (req, res) => {
    const { id } = req.params;
    const idx = array1.findIndex(element => element.id == id);
    array1.splice(idx, 1);
    res.redirect('/')
})

router.get('/editPista/:id', (req, res) => {
    const { id } = req.params;
     const idx = array1.findIndex(element => element.id == id);
    array1.splice(idx, 1);
    res.render('editPista')
})

router.post('/editPista', (req, res) => {
  array1.push({ ...req.body, id: vv4() });
    res.redirect('/')
})
module.exports = router;