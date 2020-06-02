require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const app = express();
let routes = require('./routes');

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});