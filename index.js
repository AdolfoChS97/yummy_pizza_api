const express = require('express');
const app = express();
let routes = require('./routes');

app.use('/api', routes);

app.listen(process.env.PORT || 8080);