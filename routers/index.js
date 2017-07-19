const express = require('express');
const router = express.Router();
const model = require ('../models');

router.get('/', (req,res)=> {
  res.render('index', {
    title: 'Even Ticket Seller'
  })
})

router.get('/add-event', (req, res) => { // by dayat
  res.render('add-event', {
    title: 'Add Event'
  })
})

router.post('/add-event', (req,res) => { // by dayat
  model.Event.create(req.body)
  .then(row => {res.redirect('/')})
})



module.exports = router
