const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/drones', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( () =>
    console.log(`Connected to Mongo!`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
