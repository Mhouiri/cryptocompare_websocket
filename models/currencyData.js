const mongoose = require('mongoose');

const CurrencySchema = mongoose.Schema({
    currencyName: {
        type: String,
        required: true
    },
    currencyPrice: {
        usd: String,
        gbp: String,
    },
    currencyLowHour: {
        usd: String,
        gbp: String,
        // required: true
    },
    currencyHighHour: {
        usd: String,
        gbp: String,
        // required: true
    },
    currencyOpenHour: {
        usd: String,
        gbp: String,
        // required: true
    },
    currencyCloseHour: {
        usd: String,
        gbp: String,
        // required: true
    }
})

module.exports = mongoose.model('CurrencyData', CurrencySchema);