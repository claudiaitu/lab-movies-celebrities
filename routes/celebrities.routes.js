// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celeb = require("../models/Celebrity.model")

// all your routes here

router.get('/', (req, res, next) => {
    Celeb.find()
    .then((celebrity) => {
        res.render('celebrities/celebrities.hbs', {celebrity})
    })
    .catch((err) => {
        console.log(err);
    })
})



router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrities.hbs')

})
router.post('/create', (req, res, next) => {
    Celeb.create({
        name: req.body.name,
        occupation: req.body.occuption, 
        catchPhrase: req.body.occupation,
    })
    .then((createdCeleb) => {
        console.log(createdCeleb)
        res.redirect('/celebrities')
    
    })
    .catch((err) => {
        res.render('celebrities/new-celebrities.hbs')
        console.log(err)
    })
})





module.exports = router;


