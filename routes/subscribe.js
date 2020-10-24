const express = require('express');
const router = express.Router();
const {validationResult } = require('express-validator');

const Subscriber = require('../models/subscriber');

router.post('/subscribe', function(req,res) {  

    let subscriber = new Subscriber(req.body);
    subscriber.save()
        .then(subscriber => {
            res.send(subscriber);
        })
        .catch(function(err){
            res.status(422).send('subscribe fail')
        })
   
});


router.get('/subscribers', function(req,res){
    Subscriber.find(function(err,subscribers){
        res.json(subscribers)
    })
});

router.delete('/subscribe/:id', function(req, res) {  
    Subscriber.findById(req.params.id, function(err, subscribe) {
      if (!subscribe) {
        res.status(404).send('Subscriber not found');
      } else {
        Subscriber.findByIdAndRemove(req.params.id)
          .then(function() { res.status(200).json("Subscriber deleted") })
          .catch(function(err) {
            res.status(400).send("Subscriber delete failed.");
          })
      }
    });
  })

module.exports = router;
