const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

var app = express()

const MongoClient = require('mongodb').MongoClient;
const { connect } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ew9hc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const productCollection = client.db("TwursTechShop").collection("product");
    console.log('connection err', err);
    //post
    app.post('/addProduct', (req, res) => {
        const newItem = req.body;
            productCollection.insertOne(newItem).then(result => {
            console.log("inserted count", result.insertedCount)
            res.send(result.insertedCount > 0)
            console.log('res', result);
        })
        console.log('add', newItem);
    })
  });



app.listen(process.env.PORT || 5000)