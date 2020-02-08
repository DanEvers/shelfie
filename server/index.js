require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING} = process.env;
const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller')
// const port = 4000;

app.use(express.json());

massive(CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        console.log('Hi Dan, I am connected to the dbInstance as you wished')
    })
    .catch(err => alert('Houston, we have a problem', err));

app.get('/api/inventory', ctrl.get_inventory);
app.post('/api/product', ctrl.addProduct);
app.put('/api/inventory/:id', ctrl.updateProduct);
app.delete('/api/inventory/:id', ctrl.removeProduct);

app.listen( SERVER_PORT, () => console.log(`Dan I am listening on port ${SERVER_PORT}`));