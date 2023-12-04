const cors = require('cors');
//const fetch = require('node-fetch');
const express = require('express');
//const ejs = require('ejs');
const routes = require('./Routes/workout');
const app = express();
app.use(cors());
app.use('/api', routes);
//app.set('view engine', 'ejs');
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
