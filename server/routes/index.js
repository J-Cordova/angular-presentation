var express = require('express');
var router = express.Router();
var animals = [
    {
      Name: 'Gaia',
      Picture: '../../assets/GaiaSleep.jpg',
      Description: 'A baby Doberman Pinscher. Loves Naps.',
      Type: 0,
      Avatar: 'Dog'
    },
    {
      Name: 'Sage',
      Picture: '../../assets/SageSleep.jpg',
      Description: 'A 14 week old German Sheperd. Loves the pool.',
      Type: 0,
      Avatar: 'Dog'
    },
    {
      Name: 'Kai',
      Picture: '../../assets/KaiCute.jpg',
      Description: 'A beautiful young kitten. Loves playing with bigger animals.',
      Type: 1,
      Avatar: 'Cat'
    },
    {
      Name: 'Nyx',
      Picture: '../../assets/NyxLooking.jpg',
      Description: 'A beatiful black kitten.  Loves laying on anything warm.',
      Type: 1,
      Avatar: 'Cat'
    }
  ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(animals);
});

module.exports = router;
