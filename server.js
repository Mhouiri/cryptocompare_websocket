const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const { setCurrencyDataService } = require('./services/setCurrencyDataService');

//  CryptoCompare websocket connection
let apiKey = process.env.API_KEY;
const WebSocket = require('ws');
const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

// Define the routes
const currencyDataRoute = require('./routes/currencyData');
app.use('/currencyData', currencyDataRoute);

app.get('/', (req, res) => {
    res.send("QLL Technologie");
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("db connected");
        else console.log(err)
    });

// Connect the app with CC websocket
ccStreamer.on('open', function open() {
    var subRequest = {
        "action": "SubAdd",
        "subs": [
            "5~CCCAGG~BTC~USD",
            "5~CCCAGG~BTC~GBP",
            "5~CCCAGG~ETH~USD",
            "5~CCCAGG~ETH~GBP",
            "5~CCCAGG~BSC~USD",
            "5~CCCAGG~BSC~GBP"
        ]
    };
    ccStreamer.send(JSON.stringify(subRequest));
});

ccStreamer.on('message', function incoming(data) {
    data = JSON.parse(data.toString())
    if( data.TYPE == '5')
    {
        setCurrencyDataService(data.FROMSYMBOL, data.TOSYMBOL, data.PRICE, data.HIGHHOUR, data.LOWHOUR, data.OPENHOUR)
    }
});

app.listen((process.env.PORT), function(){
    console.log("Server is connected")
});

