const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const fs = require('fs-extra');
var app = express()

const MongoClient = require('mongodb').MongoClient;
const { connect } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const { runInNewContext } = require('vm');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('productImage'))
app.use(fileUpload())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ew9hc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    console.log(err)
    const productCollection = client.db("TwursTechShop").collection("product");
    const adminCollection = client.db("TwursTechShop").collection("admin");
    const cartCollection = client.db("TwursTechShop").collection("userCart");
    const checkoutCollection = client.db("TwursTechShop").collection("checkout");
    //post 
    app.post('/addProduct', (req, res) => {
        const productName = req.body.productName;
        const details = req.body.details;
        const category = req.body.category;
        const price = req.body.price;
        const file = req.files.image;
        const filePath = `${__dirname}/productImage/${file.name}`;
        console.log(file, price);
        file.mv(filePath, er => {
            if (er) {
                console.log(er);
                return res.status(500).send({ msg: 'failed to upload image' });
            }
            const newImg = fs.readFileSync(filePath);
            const encodedImage = newImg.toString('base64');
            const imageFile = {
                contentType: file.mimetype,
                size: file.size,
                img: Buffer(encodedImage, 'base64')
            }
            productCollection.insertOne({ productName, details, category, price, imageFile })
                .then(result => {
                    fs.remove(filePath, error => {
                        if (error) { console.log(error) }
                        res.send(result.insertedCount > 0)
                        console.log('res', result);
                    })

                })
        })
    })

    app.post('/addAdmin', (req, res) => {
        const newItem = req.body;
        adminCollection.insertOne(newItem).then(result => {
            console.log("inserted count", result.insertedCount)
            res.send(result.insertedCount > 0)
            console.log('res', result);
        })
        console.log('add', newItem);
    })

    app.post('/addCartInDatabase', (req, res) => {
        const newItem = req.body;
        console.log(newItem)
        cartCollection.insertOne(newItem)
            .then(result => {
                console.log("inserted count", result.insertedCount)
                res.send(result.insertedCount > 0)
                console.log('res', result);
            })
        console.log('add', newItem);
    })

    app.post('/checkout', (req, res) => {
        const newItem = req.body;
        console.log(newItem);
        checkoutCollection.insertOne(newItem)
            .then(result => {
                console.log("inserted count", result.insertedCount)
                res.send(result.insertedCount > 0)
                console.log('res', result);
            })
        console.log('add', newItem);
    })

    //get
    app.get('/item/:category', (req, res) => {
        productCollection.find({ category: req.params.category })
            .toArray((err, newItems) => {
                res.send(newItems);
            })
    })

    app.post('/admin', (req, res) => {
        adminCollection.find({ adminEmail: req.body.email })
            .toArray((err, admin) => {
                console.log(admin);
                res.send(admin.length > 0);
            })
    })

    app.get('/getEmail', (req, res) => {
        cartCollection.find({ email: req.query.email })
            .toArray((err, email) => {
                console.log(email);
                res.send(email.length > 0);
            })
    })

    app.get('/getCart', (req, res) => {
        cartCollection.find({ email: req.query.email })
            .toArray((err, cart) => {
                res.send(cart);
            })
    })

    //update
    app.patch('/updateCart', (req, res) => {
        console.log(req.query.email, req.body.userCart.cart)
        cartCollection.updateOne({ email: req.query.email },
            {
                $set: { cart: req.body.userCart.cart }
            })
            .then(items => {
                res.send(items);
                console.log(items)
            })
    })
    //delete 
    app.delete('/deleteCart', (req, res) => {
        console.log(req.query.email)
        cartCollection.findOneAndDelete({ email: req.query.email })
            .then(items => {
                res.send("deleted cart",items);
                console.log(items)
            })
    })
});


app.listen(process.env.PORT || 5000);