const functions = require("firebase-functions");

const express = require('express');
const stripe = require('stripe');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});


exports.myExpress = functions.https.onRequest(async(req, res)=>{
    functions.logger.info("Api logs!", { structuredData: true });

    res.send('myExpress');
});

exports.api = functions.https.onRequest( async(req, res) => {
    functions.logger.info("Api logs!", { structuredData: true });
    // res.send("API from Firebase!");
   
    switch(req.method){
        case 'GET':
            res.send("Get request.");
            break;
        case 'POST':
            res.send(req.body);
            break;
        case 'DELETE':
            res.send("Delete request.");
            break;
        case 'PUT':
            res.send("Put request.");
            break;
        default:
            res.send("Invalid request.");
            break;
    }
});