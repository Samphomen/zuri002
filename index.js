const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRouter')
const {testDbConnection} = require('./db')
const helmet = require('helmet');


app.use(helmet());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use('/api', userRoutes);

app.get('/', (req,res) => {
  res.send('Welcome to Zuri')
});


testDbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to start the server:", error);
  });