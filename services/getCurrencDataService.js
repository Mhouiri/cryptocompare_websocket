const CurrencyData = require('../models/currencyData');

const getCurrencyDataService = async () => {
    const data = await CurrencyData.find();
    const currenciesArray = []

    for (let index = 0; index < data.length; index++) {
        currenciesArray.push({
            currency: data[index].currencyName,
            price: data[index].currencyPrice,
            highHour: data[index].currencyHighHour,
            lowHour:data[index].currencyLowHour,
            openHour: data[index].currencyOpenHour,
            closeHour: data[index].currencyCloseHour
        })
      }

    if (data) {
      return ({status: 200, data: currenciesArray})
    } else {
        return ({status : 404, data: {msg: 'Data not found'}})
    }
}

module.exports = {
    getCurrencyDataService
}