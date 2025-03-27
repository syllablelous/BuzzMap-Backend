require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

const app = express()

// middleware
app.use(express.json());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/v1/posts', postsRoutes);


// Connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database');
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });