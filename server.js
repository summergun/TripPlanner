const express = require ('express');
const swig = require ('swig');

const path = require('path');

const bodyparser= require('body-parser');

const port = process.env.PORT || 3000;
swig.setDefaults({cache:false});

const app = express();

app.set('view engine','html');
app.engine("html",swig.renderFile);

app.listen(port,()=>console.log(`I am listening on ${port}`));