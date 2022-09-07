require('dotenv').config()
const CurrencyData = require('../models/currencyData');

const setCurrencyDataService = async (fromCurrency, toCurrency, price, highhour, lowhour, openhour) => {
    const filter = { currencyName: fromCurrency}

    const update = {}
    update.currencyName = fromCurrency

    // Define in which curreny the data will be stored in the DB (USD or GBP)
    if (toCurrency == 'USD'){
        if (price){
            update["currencyPrice.usd"] = price
            update["currencyCloseHour.usd"] = price
        }
        if (lowhour)
            update["currencyLowHour.usd"] = lowhour
        if (highhour)
            update["currencyHighHour.usd"]= highhour
        if (openhour)
            update["currencyOpenHour.usd"]= highhour
    }

    if (toCurrency == 'GBP'){
        if (price){
            update["currencyPrice.gbp"] = price
            update["currencyCloseHour.gbp"] = price
        }
        if (lowhour)
            update["currencyLowHour.gbp"] = lowhour
        if (highhour)
            update["currencyHighHour.gbp"]= highhour
        if (openhour)
            update["currencyOpenHour.gbp"]= highhour

    }


    const setNewCurrenyData = { $set: update};

    await CurrencyData.updateOne(filter, setNewCurrenyData, {upsert:true} )
}

module.exports = {
    setCurrencyDataService
}