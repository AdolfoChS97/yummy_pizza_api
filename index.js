require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
let routes = require('./routes');

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});