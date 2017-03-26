var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  '{uLgbXk4djsXVzLPXBj5rmeEBHRPs8An8IOOPhAzF}',
  '{hHJBtQJLzL503w4YEmTzeQSYiO-DE6hZp8CuGFU_}'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);
